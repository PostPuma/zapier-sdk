const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}union_id`,
                label: `[${labelPrefix}union_id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}is_private`,
                label: `[${labelPrefix}is_private]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}duet_disabled`,
                label: `[${labelPrefix}duet_disabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}privacy_levels`,
                label: `[${labelPrefix}privacy_levels]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}stitch_disabled`,
                label: `[${labelPrefix}stitch_disabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}comment_disabled`,
                label: `[${labelPrefix}comment_disabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}max_video_post_duration_sec`,
                label: `[${labelPrefix}max_video_post_duration_sec]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'union_id': bundle.inputData?.[`${keyPrefix}union_id`],
            'is_private': bundle.inputData?.[`${keyPrefix}is_private`],
            'duet_disabled': bundle.inputData?.[`${keyPrefix}duet_disabled`],
            'privacy_levels': bundle.inputData?.[`${keyPrefix}privacy_levels`],
            'stitch_disabled': bundle.inputData?.[`${keyPrefix}stitch_disabled`],
            'comment_disabled': bundle.inputData?.[`${keyPrefix}comment_disabled`],
            'max_video_post_duration_sec': bundle.inputData?.[`${keyPrefix}max_video_post_duration_sec`],
        }
    },
}
