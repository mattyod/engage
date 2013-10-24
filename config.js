'use strict';

module.exports = {
    get: function get() {

        return {
            'package.json': {
                type: 'file',
                content: '{ "test": true }'
            },
            '.gitignore': {
                type: 'file',
                content: '.'
            }
        };

    }
};