const fs = require("fs");

const breedDetailsFromFile = function (breed, callback) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`cats/data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (error) {
      console.log(error.message);
    } else {
      callback(data);
    }
  });
};

const printData = (data) => {
  console.log("Return Value: ", data);
};

breedDetailsFromFile("Bombay", printData);
