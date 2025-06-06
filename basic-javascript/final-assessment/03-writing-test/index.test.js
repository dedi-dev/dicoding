import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('should return sum of param a and param b', () => {
    // Arrange
    const a = 4;
    const b = 5;
    const expected = a + b;

    // Action
    const actual = sum(a, b);

    // Assert
    assert.equal(actual, expected);
})