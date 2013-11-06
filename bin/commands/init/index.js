'use strict';

var fs = require('fs'),
    rightClick = require('rightClick'),
    log = require('col'),
    storage = require('../../config').storage;

module.exports = function () {
    var lib = process.mainModule.filename.replace(/\/bin\/engage$/, '/lib');

    rightClick(lib)
        .copy(fs.readdirSync(lib))
        .paste(storage);

    log.success('initialised, use: engage ls to see available make options');

};