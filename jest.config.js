/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.spec.js'
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['vue', 'js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transform: {
    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest', // vue文件用vue-jest转换
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest', // ts文件用ts-jest转换
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss|less)$'
  ],
  // 全局alias
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  resetMocks: true,
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      pageTitle: '神机UI 单元测试',
      outputPath: '<rootDir>/test.report.html'
    }]

  ]
}
