'use strict';

var rightClick = require('rightclick'),
    log = require('col'),
    storage = require('../../config').storage;

module.exports = function (act) {

    rightClick(storage).cut(act);

    log.success(act + ' removed');

};