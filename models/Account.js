const utils = require('../utils/utils');
const Account_data = require('../models/Account_data');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'number',
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
                key: `${keyPrefix}username`,
                label: `[${labelPrefix}username]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}provider`,
                label: `[${labelPrefix}provider]`,
                type: 'string',
            },
            ...Account_data.fields(`${keyPrefix}data`, isInput),
            {
                key: `${keyPrefix}authorized`,
                label: `[${labelPrefix}authorized]`,
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
            'username': bundle.inputData?.[`${keyPrefix}username`],
            'provider': bundle.inputData?.[`${keyPrefix}provider`],
            'data': utils.removeIfEmpty(Account_data.mapping(bundle, `${keyPrefix}data`)),
            'authorized': bundle.inputData?.[`${keyPrefix}authorized`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
        }
    },
}
