const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}posts`,
                label: `Post UUIDs - [${labelPrefix}posts]`,
                required: true,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}trash`,
                label: `[${labelPrefix}trash]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'posts': bundle.inputData?.[`${keyPrefix}posts`],
            'trash': bundle.inputData?.[`${keyPrefix}trash`],
        }
    },
}
