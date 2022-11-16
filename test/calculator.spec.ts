import 'mocha';
import { expect } from 'chai';
import { calculator } from '../src/calculator';

describe('calculator', () => {
  it('adds 2 numbers', () => {
    expect(calculator(27, 15)).equals(42);
  });
});
