const yourDatabaseURI = "(Your URI Here)";

const { MongoClient } = require("mongodb");
const client = new MongoClient(yourDatabaseURI);

const dbname = "std1";
const collectionName = "viewLog";
const stdCollection = client.db(dbname).collection(collectionName);

const getDatabaseKnowledge = async () => {
  const dbKnowledge = await stdCollection
    .find({ views: { $gte: 0 } }, { projection: { _id: 0 } })
    .toArray();

  return dbKnowledge;
};

exports.getDatabaseKnowledge = getDatabaseKnowledge;
