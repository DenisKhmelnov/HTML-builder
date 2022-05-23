const fs = require("fs");
const path = require("path");

fs.readdir(
  path.join(__dirname, "secret-folder"),
  { withFileTypes: true },
  (err, data) => {
    data.forEach((el) => {
      if (el.isFile()) {
        fs.stat(path.join(__dirname, "secret-folder", el.name), (err, stat) => {
          const extension = path.extname(el.name).slice(1);
          const name = el.name.slice(0, -extension.length - 1);
          const size = stat.size;

          console.log(`${name} - ${extension} - ${size}b`);
        });
      }
    });
  }
);
