const amount = 12;
if (amount < 10) {
  console.log("small no");
} else {
  console.log("large no");
}

console.log(`its my first node app`);
// console.log(module);
console.log(__dirname);

// in this we have both settimeout and setinterval
const _ = require("lodash");
const items = [1, [2, [3, [4, 6]]]];
const newitems = _.flattenDeep(items);

console.log(newitems);
