const path = require("path");
console.log(path.sep); // yeh btata hai ki apka path kis se seprate hota hai
console.log(path.sep + path.join("content", "sufolder", "txt.js"));
const file = path.join("content", "sufolder", "txt.js");
const base = path.basename(file); // apko kisi bhi locationki last file pta krni  ho toh
console.log(base);
const absolute = path.resolve(__dirname); // return the current working directory __dirname yeh likho ya na likho
console.log(absolute);
const abs1 = path.resolve(__dirname, "content", "sufolder", "txt.js"); // hama path location de dega
console.log(abs1);
// difference between join ans resolve is that join sirf yehi tenno ko \ isse join krke dega but resolve give whole c:user:
