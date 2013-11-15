'use strict';

var fs = require('fs'),
    rightClick = require('rightClick'),
    log = require('col'),
    ensure = require('../../utils/ensure-directory'),
    storage = require('../../config').storage;

module.exports = function () {
    var lib = process.mainModule.filename.replace(/\/bin\/engage$/, '/lib');

    ensure(storage);
    console.log(fs.readdirSync(lib));
    rightClick(lib)
        .copy(fs.readdirSync(lib))
        .paste(storage);

    log.success('initialised, use: engage ls to see available make options');

};
