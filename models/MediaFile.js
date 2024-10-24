const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}uuid`,
                label: `[${labelPrefix}uuid]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mime_type`,
                label: `[${labelPrefix}mime_type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `[${labelPrefix}url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}thumb_url`,
                label: `[${labelPrefix}thumb_url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_video`,
                label: `[${labelPrefix}is_video]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `[${labelPrefix}created_at]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'uuid': bundle.inputData?.[`${keyPrefix}uuid`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'mime_type': bundle.inputData?.[`${keyPrefix}mime_type`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
            'thumb_url': bundle.inputData?.[`${keyPrefix}thumb_url`],
            'is_video': bundle.inputData?.[`${keyPrefix}is_video`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
        }
    },
}
