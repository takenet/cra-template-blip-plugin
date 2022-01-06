import '@testing-library/jest-dom';

import * as utils from '../string';

describe('String utils', () => {
    const mockParameter = 'FooBoo String';

    afterEach(() => jest.clearAllMocks());

    it('should toKebabCase have been called', () => {
        const expectedResult = 'foo-boo-string';
        const mockMethod = jest.spyOn(utils, 'toKebabCase');

        const result = utils.toKebabCase(mockParameter);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(mockParameter);
        expect(result).toBe(expectedResult);
    });
});
