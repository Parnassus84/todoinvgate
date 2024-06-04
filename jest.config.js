/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/.storybook/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!jest.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/testing/utils/setupTests.ts'],
  moduleNameMapper: {
    'test-utils': '<rootDir>/src/testing/utils/test-utils.tsx',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg': 'svgr/webpack',
    'shared/imported-icon/imported-icon': '<rootDir>/src/testing/__mocks__/imported-icon.mock.tsx',
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/testing/utils/fileTransformer.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!(@alicorpdigital)/)'],
};
