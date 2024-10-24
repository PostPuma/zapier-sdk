const utils = require('../utils/utils');
const Version_options_tiktok_privacy_level = require('../models/Version_options_tiktok_privacy_level');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Version_options_tiktok_privacy_level.fields(`${keyPrefix}privacy_level`, isInput),
            ...Version_options_tiktok_privacy_level.fields(`${keyPrefix}allow_comments`, isInput),
            ...Version_options_tiktok_privacy_level.fields(`${keyPrefix}allow_duet`, isInput),
            ...Version_options_tiktok_privacy_level.fields(`${keyPrefix}allow_stitch`, isInput),
            ...Version_options_tiktok_privacy_level.fields(`${keyPrefix}content_disclosure`, isInput),
            ...Version_options_tiktok_privacy_level.fields(`${keyPrefix}brand_organic_toggle`, isInput),
            ...Version_options_tiktok_privacy_level.fields(`${keyPrefix}brand_content_toggle`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'privacy_level': utils.removeIfEmpty(Version_options_tiktok_privacy_level.mapping(bundle, `${keyPrefix}privacy_level`)),
            'allow_comments': utils.removeIfEmpty(Version_options_tiktok_privacy_level.mapping(bundle, `${keyPrefix}allow_comments`)),
            'allow_duet': utils.removeIfEmpty(Version_options_tiktok_privacy_level.mapping(bundle, `${keyPrefix}allow_duet`)),
            'allow_stitch': utils.removeIfEmpty(Version_options_tiktok_privacy_level.mapping(bundle, `${keyPrefix}allow_stitch`)),
            'content_disclosure': utils.removeIfEmpty(Version_options_tiktok_privacy_level.mapping(bundle, `${keyPrefix}content_disclosure`)),
            'brand_organic_toggle': utils.removeIfEmpty(Version_options_tiktok_privacy_level.mapping(bundle, `${keyPrefix}brand_organic_toggle`)),
            'brand_content_toggle': utils.removeIfEmpty(Version_options_tiktok_privacy_level.mapping(bundle, `${keyPrefix}brand_content_toggle`)),
        }
    },
}
