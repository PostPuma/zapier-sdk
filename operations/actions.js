const AccountsApi = require('../PostPuma/AccountsApi');
const MediaApi = require('../PostPuma/MediaApi');
const PostsApi = require('../PostPuma/PostsApi');
const TagsApi = require('../PostPuma/TagsApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [AccountsApi.getAccount.key]: AccountsApi.getAccount,
    [AccountsApi.listAccounts.key]: AccountsApi.listAccounts,
    [MediaApi.deleteMediaFiles.key]: MediaApi.deleteMediaFiles,
    [MediaApi.getMediaFile.key]: MediaApi.getMediaFile,
    [MediaApi.listMediaFiles.key]: MediaApi.listMediaFiles,
    [MediaApi.uploadMediaFile.key]: MediaApi.uploadMediaFile,
    [PostsApi.createPost.key]: PostsApi.createPost,
    [PostsApi.deletePost.key]: PostsApi.deletePost,
    [PostsApi.deletePosts.key]: PostsApi.deletePosts,
    [PostsApi.getPost.key]: PostsApi.getPost,
    [PostsApi.listPosts.key]: PostsApi.listPosts,
    [PostsApi.queuePost.key]: PostsApi.queuePost,
    [PostsApi.schedulePost.key]: PostsApi.schedulePost,
    [PostsApi.updatePost.key]: PostsApi.updatePost,
    [TagsApi.createTag.key]: TagsApi.createTag,
    [TagsApi.deleteTag.key]: TagsApi.deleteTag,
    [TagsApi.getTag.key]: TagsApi.getTag,
    [TagsApi.listTags.key]: TagsApi.listTags,
    [TagsApi.updateTag.key]: TagsApi.updateTag,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
