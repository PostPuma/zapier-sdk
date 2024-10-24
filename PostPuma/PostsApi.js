const samples = require('../samples/PostsApi');
const Post = require('../models/Post');
const createPost_request = require('../models/createPost_request');
const deleteMediaFiles_200_response = require('../models/deleteMediaFiles_200_response');
const deletePost_request = require('../models/deletePost_request');
const deletePosts_200_response = require('../models/deletePosts_200_response');
const deletePosts_request = require('../models/deletePosts_request');
const listPosts_200_response = require('../models/listPosts_200_response');
const queuePost_200_response = require('../models/queuePost_200_response');
const schedulePost_request = require('../models/schedulePost_request');
const updatePost_request = require('../models/updatePost_request');
const utils = require('../utils/utils');

module.exports = {
    createPost: {
        key: 'createPost',
        noun: 'posts',
        display: {
            label: 'Create post',
            description: 'Create post',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...createPost_request.fields(),
            ],
            outputFields: [
                ...Post.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/posts'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...createPost_request.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createPost', response.json);
                    return results;
                })
            },
            sample: samples['PostSample']
        }
    },
    deletePost: {
        key: 'deletePost',
        noun: 'posts',
        display: {
            label: 'Delete post',
            description: 'Delete post',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'postUuid',
                    label: 'Post UUID',
                    type: 'string',
                    required: true,
                },
                ...deletePost_request.fields(),
            ],
            outputFields: [
                ...deletePosts_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/posts/{postUuid}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...deletePost_request.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deletePost', response.json);
                    return results;
                })
            },
            sample: samples['deletePosts_200_responseSample']
        }
    },
    deletePosts: {
        key: 'deletePosts',
        noun: 'posts',
        display: {
            label: 'Delete posts',
            description: 'Delete posts',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...deletePosts_request.fields(),
            ],
            outputFields: [
                ...deletePosts_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/posts'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...deletePosts_request.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deletePosts', response.json);
                    return results;
                })
            },
            sample: samples['deletePosts_200_responseSample']
        }
    },
    getPost: {
        key: 'getPost',
        noun: 'posts',
        display: {
            label: 'Get post',
            description: 'Get post',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'postUuid',
                    label: 'Post UUID',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Post.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/posts/{postUuid}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPost', response.json);
                    return results;
                })
            },
            sample: samples['PostSample']
        }
    },
    listPosts: {
        key: 'listPosts',
        noun: 'posts',
        display: {
            label: 'List posts',
            description: 'List posts',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'page',
                    label: 'Page',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...listPosts_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/posts'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'page': bundle.inputData?.['page'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listPosts', response.json);
                    return results;
                })
            },
            sample: samples['listPosts_200_responseSample']
        }
    },
    queuePost: {
        key: 'queuePost',
        noun: 'posts',
        display: {
            label: 'Queue post',
            description: 'Queue post',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'postUuid',
                    label: 'Post UUID',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...queuePost_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/posts/add-to-queue/{postUuid}'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'queuePost', response.json);
                    return results;
                })
            },
            sample: samples['queuePost_200_responseSample']
        }
    },
    schedulePost: {
        key: 'schedulePost',
        noun: 'posts',
        display: {
            label: 'Schedule post',
            description: 'Schedule post',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'postUuid',
                    label: 'Post UUID',
                    type: 'string',
                    required: true,
                },
                ...schedulePost_request.fields(),
            ],
            outputFields: [
                ...queuePost_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/posts/schedule/{postUuid}'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...schedulePost_request.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'schedulePost', response.json);
                    return results;
                })
            },
            sample: samples['queuePost_200_responseSample']
        }
    },
    updatePost: {
        key: 'updatePost',
        noun: 'posts',
        display: {
            label: 'Update post',
            description: 'Update post',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'postUuid',
                    label: 'Post UUID',
                    type: 'string',
                    required: true,
                },
                ...updatePost_request.fields(),
            ],
            outputFields: [
                ...deleteMediaFiles_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/posts/{postUuid}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...updatePost_request.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updatePost', response.json);
                    return results;
                })
            },
            sample: samples['deleteMediaFiles_200_responseSample']
        }
    },
}
