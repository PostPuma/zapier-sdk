const utils = require('../utils/utils');
const Version_options_instagram = require('../models/Version_options_instagram');
const Version_options_linkedin = require('../models/Version_options_linkedin');
const Version_options_mastodon = require('../models/Version_options_mastodon');
const Version_options_pinterest = require('../models/Version_options_pinterest');
const Version_options_tiktok = require('../models/Version_options_tiktok');
const Version_options_youtube = require('../models/Version_options_youtube');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Version_options_tiktok.fields(`${keyPrefix}tiktok`, isInput),
            ...Version_options_youtube.fields(`${keyPrefix}youtube`, isInput),
            ...Version_options_linkedin.fields(`${keyPrefix}linkedin`, isInput),
            ...Version_options_mastodon.fields(`${keyPrefix}mastodon`, isInput),
            ...Version_options_instagram.fields(`${keyPrefix}instagram`, isInput),
            ...Version_options_pinterest.fields(`${keyPrefix}pinterest`, isInput),
            ...Version_options_instagram.fields(`${keyPrefix}facebook_page`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'tiktok': utils.removeIfEmpty(Version_options_tiktok.mapping(bundle, `${keyPrefix}tiktok`)),
            'youtube': utils.removeIfEmpty(Version_options_youtube.mapping(bundle, `${keyPrefix}youtube`)),
            'linkedin': utils.removeIfEmpty(Version_options_linkedin.mapping(bundle, `${keyPrefix}linkedin`)),
            'mastodon': utils.removeIfEmpty(Version_options_mastodon.mapping(bundle, `${keyPrefix}mastodon`)),
            'instagram': utils.removeIfEmpty(Version_options_instagram.mapping(bundle, `${keyPrefix}instagram`)),
            'pinterest': utils.removeIfEmpty(Version_options_pinterest.mapping(bundle, `${keyPrefix}pinterest`)),
            'facebook_page': utils.removeIfEmpty(Version_options_instagram.mapping(bundle, `${keyPrefix}facebook_page`)),
        }
    },
}
