'use strict';

var fs = require('fs'),
    log = require('col');

module.exports = function (item) {

    if (!fs.existsSync(item)) {

        fs.mkdirSync(item);

        log.success('created ' + item + ' directory');

    }

};