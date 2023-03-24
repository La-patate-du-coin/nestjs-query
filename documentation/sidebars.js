/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    Introduction: ['introduction/getting-started', 'introduction/install', 'introduction/example'],
    Concepts: [
      'concepts/dtos',
      'concepts/queries',
      'concepts/services',
      {
        Advanced: ['concepts/advanced/assemblers']
      }
    ],
    Persistence: [
      'persistence/services',
      {
        TypeOrm: [
          'persistence/typeorm/getting-started',
          'persistence/typeorm/custom-service',
          'persistence/typeorm/multiple-databases',
          'persistence/typeorm/soft-delete',
          'persistence/typeorm/testing-services'
        ]
      }
    ],
    GraphQL: [
      'graphql/getting-started',
      'graphql/dtos',
      'graphql/resolvers',
      'graphql/queries',
      'graphql/mutations',
      'graphql/paging',
      'graphql/hooks',
      'graphql/authorization',
      'graphql/aggregations',
      'graphql/subscriptions',
      'graphql/relations',
      'graphql/types',
      'graphql/federation'
    ],
    Utilities: ['utilities/query-helpers']
  }
}
