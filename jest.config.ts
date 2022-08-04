import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  transform: {'^.+\\.(js|jsx|ts|tsx)?$': 'ts-jest' },
  'moduleNameMapper': {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.svg$': '<rootDir>/__mocks__/svg.ts',
  }
};

export default config;