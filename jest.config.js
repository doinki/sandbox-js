/* eslint-disable sort-keys-fix/sort-keys-fix */

const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: '.' });

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const customJestConfig = {
  collectCoverageFrom: ['src/**/*.@(j|t)s?(x)'],
  moduleNameMapper: {
    '^@/icons(.*)': '<rootDir>/src/components/atoms/icons$1',
    '^@/atoms(.*)': '<rootDir>/src/components/atoms$1',
    '^@/molecules(.*)': '<rootDir>/src/components/molecules$1',
    '^@/organisms(.*)': '<rootDir>/src/components/organisms$1',
    '^@/templates(.*)': '<rootDir>/src/components/templates$1',
    '^@/(.*)': '<rootDir>/src/$1',
    '^src/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
