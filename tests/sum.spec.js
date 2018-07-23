/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import { expect } from 'chai';
import sum from '../src/utils/math';


describe('Utils', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('Function Sum must exist', () => {
      expect(sum).to.exist;
    });
  });

  describe('Tests to Utils functions', () => {
    it('Sum function: adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).to.eql(3);
    });
  });
});
