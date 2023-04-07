const fs = require("fs").promises;

const readKnowledge = async () => {
  try {
    const data = JSON.parse(
      (await fs.readFile("./previousViews.json")).toString()
    );

    return data;
  } catch (err) {
    console.error(err + " While attempting to READ ./previousViews.txt");
  }
};

const writeKnowledge = async (newKnowledge) => {
  try {
    fs.writeFile("./previousViews.json", JSON.stringify(newKnowledge));
  } catch (err) {
    console.error(
      err + " Encountered while attempting to WRITE to ./previousViews.txt"
    );
  }
};

exports.readKnowledge = readKnowledge;
exports.writeKnowledge = writeKnowledge;
