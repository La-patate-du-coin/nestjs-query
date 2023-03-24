import { Class } from '@la-patate-du-coin/nestjs-query-core'
import { DynamicModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import type { DataSource } from 'typeorm'

import { createTypeOrmQueryServiceProviders } from './providers'

export class NestjsQueryTypeOrmModule {
  static forFeature(entities: Class<unknown>[], connection?: DataSource | string): DynamicModule {
    const queryServiceProviders = createTypeOrmQueryServiceProviders(entities, connection)
    const typeOrmModule = TypeOrmModule.forFeature(entities, connection)

    return {
      imports: [typeOrmModule],
      module: NestjsQueryTypeOrmModule,
      providers: [...queryServiceProviders],
      exports: [...queryServiceProviders, typeOrmModule]
    }
  }
}
