const utils = require('../utils/utils');
const Version = require('../models/Version');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}date`,
                label: `[${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}time`,
                label: `[${labelPrefix}time]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timezone`,
                label: `[${labelPrefix}timezone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}schedule`,
                label: `[${labelPrefix}schedule]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}schedule_now`,
                label: `[${labelPrefix}schedule_now]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}queue`,
                label: `[${labelPrefix}queue]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}accounts`,
                label: `[${labelPrefix}accounts]`,
                list: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}tags`,
                label: `[${labelPrefix}tags]`,
                list: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}versions`,
                label: `[${labelPrefix}versions]`,
                children: Version.fields(`${keyPrefix}versions${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'time': bundle.inputData?.[`${keyPrefix}time`],
            'timezone': bundle.inputData?.[`${keyPrefix}timezone`],
            'schedule': bundle.inputData?.[`${keyPrefix}schedule`],
            'schedule_now': bundle.inputData?.[`${keyPrefix}schedule_now`],
            'queue': bundle.inputData?.[`${keyPrefix}queue`],
            'accounts': bundle.inputData?.[`${keyPrefix}accounts`],
            'tags': bundle.inputData?.[`${keyPrefix}tags`],
            'versions': utils.childMapping(bundle.inputData?.[`${keyPrefix}versions`], `${keyPrefix}versions`, Version),
        }
    },
}
