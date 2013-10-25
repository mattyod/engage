'use strict';

var col = require('../col');

describe('col', sandbox(function () {

    beforeEach(function () {
        this.stub(col, 'log');
    });

    describe('error', function () {

        beforeEach(function () {
            col.error('foo');
        });

        it('logs the message as an error', function () {
            var msg = '\u001b[31mERROR: \u001b[39m foo'

            col.log.should.have.been.calledWith(msg);
        });

    });

    describe('warn', function () {

        beforeEach(function () {
            col.error('foo');
        });

        it('logs the message as an error', function () {
            var msg = '\u001b[31mERROR: \u001b[39m foo';

            col.log.should.have.been.calledWith(msg);
        });

    });

    describe('success', function () {

        beforeEach(function () {
            col.success('foo');
        });

        it('logs the message as an info', function () {
            var msg = '\u001b[39mfoo';

            col.log.should.have.been.calledWith(msg);
        });

    });

}));