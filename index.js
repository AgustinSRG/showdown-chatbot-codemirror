// Entry point

"use strict";

const Path = require("path");

exports.getBundlePath = function () {
    return Path.resolve(__dirname, "bundle.js");
};
