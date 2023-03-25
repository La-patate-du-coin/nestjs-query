import { SortDirection, SortNulls } from '@la-patate-du-coin/nestjs-query-core'

describe('SortField', () => {
  it('should define SortDirection', () => {
    expect(SortDirection).toBeDefined()
  })
  it('should define SortNulls', () => {
    expect(SortNulls).toBeDefined()
  })
})
