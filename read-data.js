const fs = require("fs");

module.exports = (filePath) => {
  const stream = fs.createReadStream(__dirname + filePath, "utf8");
  let data = "";

  return new Promise((resolve) => {
    stream.on("data", (chunk) => {
      data += chunk;
    });

    stream.on("end", () => {
      resolve(data);
    });
  });
};
