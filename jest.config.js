module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>'], 
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    testEnvironmentOptions: {
        'jest-environment-jsdom': { port: 3000 }
    }
  };
  
