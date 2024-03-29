// -------------------Path Package--------------------
const path = require("path")

const dirUploads = path.join(__dirname,"www","files","uploads");

console.log(dirUploads);

// -------------------Core Package--------------------
const util = require("util");

util.log(path.basename(__filename))
util.log("The name of the file is ^")

util.log(path.basename(__dirname))
util.log("The directory is ^")

// -------------------v8 Package--------------------
const v8 = require("v8");

util.log(v8.getHeapStatistics());


