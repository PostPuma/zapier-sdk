const samples = require('../samples/TagsApi');
const Tag = require('../models/Tag');
const createTag_request = require('../models/createTag_request');
const deleteMediaFiles_200_response = require('../models/deleteMediaFiles_200_response');
const listTags_200_response = require('../models/listTags_200_response');
const updateTag_request = require('../models/updateTag_request');
const utils = require('../utils/utils');

module.exports = {
    createTag: {
        key: 'createTag',
        noun: 'tags',
        display: {
            label: 'Create tag',
            description: 'Create tag',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...createTag_request.fields(),
            ],
            outputFields: [
                ...Tag.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/tags'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...createTag_request.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createTag', response.json);
                    return results;
                })
            },
            sample: samples['TagSample']
        }
    },
    deleteTag: {
        key: 'deleteTag',
        noun: 'tags',
        display: {
            label: 'Delete tag',
            description: 'Delete tag',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tagUuid',
                    label: 'Tag UUID',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...deleteMediaFiles_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/tags/{tagUuid}'),
                    method: 'DELETE',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteTag', response.json);
                    return results;
                })
            },
            sample: samples['deleteMediaFiles_200_responseSample']
        }
    },
    getTag: {
        key: 'getTag',
        noun: 'tags',
        display: {
            label: 'Get tag',
            description: 'Get tag',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tagUuid',
                    label: 'Tag UUID',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Tag.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/tags/{tagUuid}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTag', response.json);
                    return results;
                })
            },
            sample: samples['TagSample']
        }
    },
    listTags: {
        key: 'listTags',
        noun: 'tags',
        display: {
            label: 'List tags',
            description: 'List tags',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...listTags_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/tags'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listTags', response.json);
                    return results;
                })
            },
            sample: samples['listTags_200_responseSample']
        }
    },
    updateTag: {
        key: 'updateTag',
        noun: 'tags',
        display: {
            label: 'Update tag',
            description: 'Update tag',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tagUuid',
                    label: 'Tag UUID',
                    type: 'string',
                    required: true,
                },
                ...updateTag_request.fields(),
            ],
            outputFields: [
                ...deleteMediaFiles_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/tags/{tagUuid}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...updateTag_request.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateTag', response.json);
                    return results;
                })
            },
            sample: samples['deleteMediaFiles_200_responseSample']
        }
    },
}
