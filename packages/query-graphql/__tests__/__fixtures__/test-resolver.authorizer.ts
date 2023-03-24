import { Filter } from '@la-patate-du-coin/nestjs-query-core'
import { Authorizer } from '@la-patate-du-coin/nestjs-query-graphql'
import { Injectable } from '@nestjs/common'

import { TestResolverDTO } from './test-resolver.dto'

@Injectable()
export class TestResolverAuthorizer implements Authorizer<TestResolverDTO> {
  authorize(): Promise<Filter<TestResolverDTO>> {
    return Promise.reject(new Error('authorize Not Implemented'))
  }

  authorizeRelation<Relation>(): Promise<Filter<Relation>> {
    return Promise.reject(new Error('authorizeRelation Not Implemented'))
  }
}
