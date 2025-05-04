const axios = require("axios");
const { promisify } = require("util");
const fs = require("fs");
const writeFilePromised = promisify(fs.writeFile);

const exo_api = "https://jsonplaceholder.typicode.com/posts";

const getAllObjects = () =>
  axios({
    url: exo_api,
    method: "GET",
    params: {
      format: "json",
    },
    responseType: "json",
  });

function transformObject(object) {
  return {
    name: object.title,
    description: object.body,
  };
}

function loadObjectsToFile(objects, outputFilePath) {
  if (!outputFilePath) {
    throw new Error("Filepath required");
  }
  return writeFilePromised(outputFilePath, JSON.stringify(objects, null, 2));
}

const startEtl = async () => {
  try {
    const response = await getAllObjects();
    const objects = response.data;
    let objectsTransformed;

    if (Array.isArray(objects)) {
      console.log(`Extracted ${objects.length} objects`);
      objectsTransformed = objects.map((object) => transformObject(object));
      console.log(`Transformed ${objectsTransformed.length} objects`);
    } else if (typeof objects === "object" && objects !== null) {
      const objectsArray = Object.values(objects);
      console.log(`Extracted ${objectsArray.length} objects`);
      objectsTransformed = objectsArray.map((object) =>
        transformObject(object)
      );
      console.log(`Transformed ${objectsTransformed.length} objects`);
    } else {
      console.log("Unexpected data format:", typeof objects);
      return;
    }

    const outputFilePath = "./transformed_data.json";
    await loadObjectsToFile(objectsTransformed, outputFilePath);
    console.log(`loaded data to ${outputFilePath}`);
  } catch (err) {
    console.log(err);
  }
};

startEtl();
