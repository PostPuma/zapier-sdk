const utils = require('../utils/utils');
const Version_options_pinterest_boards = require('../models/Version_options_pinterest_boards');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}link`,
                label: `[${labelPrefix}link]`,
                type: 'string',
            },
            ...Version_options_pinterest_boards.fields(`${keyPrefix}boards`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'link': bundle.inputData?.[`${keyPrefix}link`],
            'boards': utils.removeIfEmpty(Version_options_pinterest_boards.mapping(bundle, `${keyPrefix}boards`)),
        }
    },
}
