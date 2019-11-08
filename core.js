const path = require("path")

const dirUploads = path.join(__dirname,"www","files","uploads");

console.log(dirUploads);

const util = require("util");

util.log(path.basename(__filename))
util.log("The name of the file is ^")

util.log(path.basename(__dirname))
util.log("The directory is ^")


