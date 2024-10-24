const samples = require('../samples/AccountsApi');
const Account = require('../models/Account');
const listAccounts_200_response = require('../models/listAccounts_200_response');
const utils = require('../utils/utils');

module.exports = {
    getAccount: {
        key: 'getAccount',
        noun: 'accounts',
        display: {
            label: 'Get account',
            description: 'Get account',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'accountUuid',
                    label: 'Account UUID',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Account.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/accounts/{accountUuid}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAccount', response.json);
                    return results;
                })
            },
            sample: samples['AccountSample']
        }
    },
    listAccounts: {
        key: 'listAccounts',
        noun: 'accounts',
        display: {
            label: 'List accounts',
            description: 'List accounts',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...listAccounts_200_response.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://app.postpuma.com/app/5afgg2-1egj4n-7612ng-g313ie/accounts'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'listAccounts', response.json);
                    return results;
                })
            },
            sample: samples['listAccounts_200_responseSample']
        }
    },
}
