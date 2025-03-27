const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/second.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// through async function method

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    console.log(first);
    const second = await readFile("./content/second.txt", "utf8");
    console.log(second);
    await writeFile(
      "./content/async-result-file.txt",
      "hello  this is using async await hi "
    );
  } catch (error) {
    console.log(error);
  }
};

start();
