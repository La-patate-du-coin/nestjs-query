const nxPreset = require('@nrwl/jest/preset').default

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: ['html', 'clover'],
  collectCoverageFrom: ['**/*.ts', '!**/__tests__/**', '!*.spec.ts', '!**/dist/**', '!**/node_modules/**', '!**/jest.config.ts'],
  moduleNameMapper: {
    '@ptc-org/nestjs-query-core': process.cwd() + '/packages/core/src',
    '@ptc-org/nestjs-query-graphql': process.cwd() + '/packages/query-graphql/src',
    '@ptc-org/nestjs-query-typeorm': process.cwd() + '/packages/query-typeorm/src'
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended'],
  snapshotSerializers: ['jest-snapshot-serializer-raw/always'],
  testTimeout: 10000
}
