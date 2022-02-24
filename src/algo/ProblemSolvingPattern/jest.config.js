module.exports = {
  preset: ['ts-jest','es2015'],
  testEnvironment: 'node',
  collectCoverage: true,
  moduleFileExtensions: [
    "js",
    "mjs",
    "ts"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
    "^.+\\.ts$": "babel-jest"
  },
 
  testRegex: "((\\.|/*.)(spec))\\.js?$"
};