'use strict';

var rightClick = require('rightClick'),
    log = require('col'),
    storage = require('../../config').storage;

module.exports = function (act) {

    rightClick(storage)
        .copy(act)
        .paste(process.cwd());

    log.success(act + ' created');

};