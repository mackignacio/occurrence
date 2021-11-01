const read = require("./read-data");

const commonWord = async (text) => {
  const data = await read("/genesis.txt");
  let output = 0;

  //    find common word here

  return output;
};

module.exports = commonWord;
