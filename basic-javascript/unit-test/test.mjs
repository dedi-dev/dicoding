import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

describe('calculator.mjs', () => {
  it('should add correctly', () => {
    // Arrange
    const a = 2;
    const b = 3;
    const expected = 2 + 3;

    // Action
    const actual = add(a, b);

    // Assert
    assert.equal(actual, expected);
  });

  it('should throw an error if string passed on numA parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = '5';
      const operandB = 4;

      // Action
      add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  });

  it('should throw an error if string passed on numB parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 10;
      const operandB = '8';

      // Action
      add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  });
});
