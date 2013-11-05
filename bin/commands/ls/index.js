'use strict';

var fs = require('fs'),
    log = require('col'),
    ensure = require('../../utils/ensure-directory'),
    storage = require('../../config').storage;

module.exports = function () {
    var engages;

    ensure(storage);

    engages = fs.readdirSync(storage);

    if (engages.length) {
        log.success('');
    } else {
        log.success('Nothing installed, try: engage init');
    }

    engages.forEach(function (engage) {
        log.info('* ' + engage);
    });

};