// jest.config.js
module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Adiciona suporte para JSX
    },
    testEnvironment: 'jest-environment-jsdom', // Necessário para testes de componentes React
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      },
  };