const fs = require("fs");

const writeData = (path, data) => {
  fs.writeFileSync(path, data);
};

module.exports = writeData;
