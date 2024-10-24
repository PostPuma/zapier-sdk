const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}body`,
                label: `[${labelPrefix}body]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}media`,
                label: `[${labelPrefix}media]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `[${labelPrefix}url]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'body': bundle.inputData?.[`${keyPrefix}body`],
            'media': bundle.inputData?.[`${keyPrefix}media`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
        }
    },
}
