// Write test for calculator on Mocha

const expect = require('chai').expect;

const { calculation } = require('./calculator.service');

describe('calculator', () => {
  it('should calculate expression', () => {
    const result = calculation('8 9 + 1 7 - *');
    expect(result).to.be.equals(-102);
  });

  it('should calculate expression', () => {
    const result = calculation('7 45 5 3 * / + 10 + 4 6 2 / - -');
    expect(result).to.be.equals(19);
  });

  it('should catch error', () => {
    expect(() => calculation('7 45 1')).to.throw('Invalid input format: there are not enough operators');
  });

  it('should catch error', () => {
    expect(() => calculation('7 45 ')).to.throw('Invalid input format: there are not enough lexemes');
  });

  it('should catch error', () => {
    expect(() => calculation('7 45 + +')).to.throw('Invalid input format: there are not enough operands');
  });
});
