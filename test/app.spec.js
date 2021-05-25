// const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../src/app");
const chai = require('chai');
const should = chai.should();

describe("App", () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app).get("/").expect(200, "Hello, world!");
  });
});

/* global describe, it, before, after, beforeEach, afterEach */
describe('Calculator Module', function () {
  it('should export an object with 4 methods', function () {
    const calculator = require('../modules/calculator')
    calculator.should.be.an('object');
    calculator.should.have.all.keys('add', 'subtract', 'multiply', 'divide');
  });

});

describe('App parent file', function () {
  it('should require module and destructure the properties', function () {
    const calculator = require('../app')
    calculator.should.be.an('object');
    calculator.should.have.all.keys('add', 'subtract', 'multiply', 'divide');
  });

});
