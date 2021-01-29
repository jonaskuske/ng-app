const tsconfig = require('./tsconfig.json')
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig)

module.exports = {
  preset: 'jest-preset-angular',
  roots: [''],
  testPathIgnorePatterns: ['node_modules', 'cypress', 'testcafe'],
  transformIgnorePatterns: ['^.+\\.js$'],
  setupFilesAfterEnv: ['<rootDir>/src/jest.ts'],
  coverageReporters: ['html', 'text', 'text-summary'],
  moduleNameMapper,
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json',
      diagnostics: { warnOnly: true },
      stringifyContentPathRegex: '\\.html$',
      astTransformers: {
        after: [
          'jest-preset-angular/build/InlineFilesTransformer',
          'jest-preset-angular/build/StripStylesTransformer',
        ],
      },
    },
  },
}
