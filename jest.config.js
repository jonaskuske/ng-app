const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest')

module.exports = {
  testPathIgnorePatterns: ['node_modules', 'cypress', 'testcafe'],
  setupFilesAfterEnv: ['<rootDir>/src/jest.ts'],
  coverageReporters: ['html', 'text', 'text-summary'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
    '^src/(.*)$': '<rootDir>/src/$1',
  },
}
