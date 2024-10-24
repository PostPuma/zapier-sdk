const utils = require('../utils/utils');
const Account = require('../models/Account');
const Post_user = require('../models/Post_user');
const Tag = require('../models/Tag');
const Version = require('../models/Version');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}uuid`,
                label: `[${labelPrefix}uuid]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accounts`,
                label: `[${labelPrefix}accounts]`,
                children: Account.fields(`${keyPrefix}accounts${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}versions`,
                label: `[${labelPrefix}versions]`,
                children: Version.fields(`${keyPrefix}versions${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}tags`,
                label: `[${labelPrefix}tags]`,
                children: Tag.fields(`${keyPrefix}tags${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...Post_user.fields(`${keyPrefix}user`, isInput),
            {
                key: `${keyPrefix}scheduled_at`,
                label: `[${labelPrefix}scheduled_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}published_at`,
                label: `[${labelPrefix}published_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}created_at`,
                label: `[${labelPrefix}created_at]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}trashed`,
                label: `[${labelPrefix}trashed]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'uuid': bundle.inputData?.[`${keyPrefix}uuid`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'accounts': utils.childMapping(bundle.inputData?.[`${keyPrefix}accounts`], `${keyPrefix}accounts`, Account),
            'versions': utils.childMapping(bundle.inputData?.[`${keyPrefix}versions`], `${keyPrefix}versions`, Version),
            'tags': utils.childMapping(bundle.inputData?.[`${keyPrefix}tags`], `${keyPrefix}tags`, Tag),
            'user': utils.removeIfEmpty(Post_user.mapping(bundle, `${keyPrefix}user`)),
            'scheduled_at': bundle.inputData?.[`${keyPrefix}scheduled_at`],
            'published_at': bundle.inputData?.[`${keyPrefix}published_at`],
            'created_at': bundle.inputData?.[`${keyPrefix}created_at`],
            'trashed': bundle.inputData?.[`${keyPrefix}trashed`],
        }
    },
}
