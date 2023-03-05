import { describe, it, expect } from '@jest/globals';
import { correctOrderedTestData, randomizedOrderTestData } from './stub';
import { sort } from './index';


describe('testing sort', () => {
    it('randomized data are not equal with original one', () => {
        expect(correctOrderedTestData)
            .not.toStrictEqual(randomizedOrderTestData);
    });

    it('is returning randomized data in correct order', () => { 
        expect(correctOrderedTestData)
            .toStrictEqual(sort(randomizedOrderTestData));
    });
});