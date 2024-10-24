const utils = require('../utils/utils');
const Version_content = require('../models/Version_content');
const Version_options = require('../models/Version_options');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}account_id`,
                label: `[${labelPrefix}account_id]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}is_original`,
                label: `[${labelPrefix}is_original]`,
                required: true,
                type: 'boolean',
            },
            ...Version_content.fields(`${keyPrefix}content`, isInput),
            ...Version_options.fields(`${keyPrefix}options`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'account_id': bundle.inputData?.[`${keyPrefix}account_id`],
            'is_original': bundle.inputData?.[`${keyPrefix}is_original`],
            'content': utils.removeIfEmpty(Version_content.mapping(bundle, `${keyPrefix}content`)),
            'options': utils.removeIfEmpty(Version_options.mapping(bundle, `${keyPrefix}options`)),
        }
    },
}
