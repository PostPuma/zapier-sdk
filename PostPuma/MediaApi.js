const samples = require('../samples/MediaApi');
const MediaFile = require('../models/MediaFile');
const deleteMediaFiles_200_response = require('../models/deleteMediaFiles_200_response');
const deleteMediaFiles_request = require('../models/deleteMediaFiles_request');
const listMediaFiles_200_response = require('../models/listMediaFiles_200_response');
const utils = require('../utils/utils');
const FormData = require('form-data');

module.exports = {
    deleteMediaFiles: {
        key: 'deleteMediaFiles',
        noun: 'media',
        display: {
            label: 'Delete media files',
            description: 'Delete media files',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...deleteMediaFiles_request.fields(),
            ],
            outputFields: [
                ...deleteMediaFiles_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/media'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...deleteMediaFiles_request.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteMediaFiles', response.json);
                    return results;
                })
            },
            sample: samples['deleteMediaFiles_200_responseSample']
        }
    },
    getMediaFile: {
        key: 'getMediaFile',
        noun: 'media',
        display: {
            label: 'Get media file',
            description: 'Get media file',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'mediaUuid',
                    label: 'Media UUID',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...MediaFile.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/media/{mediaUuid}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMediaFile', response.json);
                    return results;
                })
            },
            sample: samples['MediaFileSample']
        }
    },
    listMediaFiles: {
        key: 'listMediaFiles',
        noun: 'media',
        display: {
            label: 'List media files',
            description: 'List media files',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'page',
                    label: 'Page number',
                    type: 'integer',
                },
            ],
            outputFields: [
                ...listMediaFiles_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/media'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listMediaFiles', response.json);
                    return results;
                })
            },
            sample: samples['listMediaFiles_200_responseSample']
        }
    },
    uploadMediaFile: {
        key: 'uploadMediaFile',
        noun: 'media',
        display: {
            label: 'Upload media file',
            description: 'Upload media file',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'file',
                    label: '',
                    type: 'file',
                },
            ],
            outputFields: [
                ...MediaFile.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/media'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'uploadMediaFile', response.json);
                    return results;
                })
            },
            sample: samples['MediaFileSample']
        }
    },
}
