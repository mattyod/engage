'use strict';

var rightClick = require('rightclick'),
    log = require('col'),
    ensure = require('../../utils/ensure-directory'),
    storage = require('../../config').storage;

module.exports = function (act) {

    ensure(storage);

    rightClick(process.cwd())
        .copy(act)
        .paste(storage);

    log.success(act + ' now available to use');

};