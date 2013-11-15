'use strict';

var fs = require('fs'),
    path = require('path'),
    rightClick = require('rightClick'),
    log = require('col'),
    storage = require('../../config').storage;

module.exports = function engage(act, tar) {
    var origin = path.join(storage, act),
        target = path.join(process.cwd(), tar);

    fs.mkdirSync(target);

    rightClick(origin)
        .copy(fs.readdirSync(origin))
        .tap(gitignore())
        .paste(target);

    log.success(act + ' created');

};
