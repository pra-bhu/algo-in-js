module.exports = {
  preset: ['ts-jest','es2015'],
  testEnvironment: 'node',
  collectCoverage: true,
  moduleFileExtensions: [
    "js",
    "mjs"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.mjs$": "babel-jest"
  },
 
  testRegex: "((\\.|/*.)(spec))\\.js?$"
};