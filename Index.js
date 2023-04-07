const dbFunctions = require("./DatabaseKnowledge");
const localFunctions = require("./LocalKnowledge");

let local; //holds existing stats
let db; //holds most recent stats

const onDataArrival = () => {
  const newViews = local.map((localItem) => {
    return [
      localItem.siteID,
      db.find((dbItem) => dbItem.siteID === localItem.siteID).views -
        localItem.views,
    ];
  });
  console.log("\n\nNew Views: ", newViews);
};

const print = () => {
  console.log("Previous Views: ", local);
  console.log("Total Views: ", db);
};

const getData = async () => {
  local = await localFunctions.readKnowledge();
  db = await dbFunctions.getDatabaseKnowledge();
  print();
  onDataArrival();
};

//retrieves data then calls onDataArrival which compares
//the old and the new views values to generate newViews
getData();
