import {describe, it} from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('unit test for sum function', () => {
    it('should return 0 if typeof param a is not number', () => {
        // Arrange
        const a = '1';
        const b = 2;
        const expected = 0;

        // Action
        const actual = sum(a, b);

        // Assert
        assert.equal(actual, expected);
    })

    it('should return 0 if typeof param b is not number', () => {
        // Arrange
        const a = 1;
        const b = '2';
        const expected = 0;

        // Action
        const actual = sum(a, b);

        // Assert
        assert.equal(actual, expected);
    })

    it('should return 0 if param a is less than 0', () => {
        // Arrange
        const a = -1;
        const b = 2;
        const expected = 0;

        // Action
        const actual = sum(a, b);

        // Assert
        assert.equal(actual, expected);
    })

    it('should return 0 if param b is less than 0', () => {
        // Arrange
        const a = 1;
        const b = -2;
        const expected = 0;

        // Action
        const actual = sum(a, b);

        // Assert
        assert.equal(actual, expected);
    })

    it('should return result of additional operation for a and b correctly', () => {
        // Arrange
        const a = 1;
        const b = 2;
        const expected = a + b;

        // Action
        const actual = sum(a, b);

        // Assert
        assert.equal(actual, expected);
    })
})