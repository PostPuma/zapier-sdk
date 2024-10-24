const utils = require('../utils/utils');
const deletePosts_200_response_oneOf = require('../models/deletePosts_200_response_oneOf');
const deletePosts_200_response_oneOf_1 = require('../models/deletePosts_200_response_oneOf_1');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}deleted`,
                label: `[${labelPrefix}deleted]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}to_trash`,
                label: `[${labelPrefix}to_trash]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'deleted': bundle.inputData?.[`${keyPrefix}deleted`],
            'to_trash': bundle.inputData?.[`${keyPrefix}to_trash`],
        }
    },
}
