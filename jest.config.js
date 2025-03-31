module.exports = {
  testEnvironment: "jest-environment-jsdom",  
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }
};