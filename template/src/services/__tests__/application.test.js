import '@testing-library/jest-dom';

import * as application from '../application-service';

describe('Application service', () => {
    afterEach(() => jest.clearAllMocks());

    it('should have called the getApplicationDataAsync method', async () => {
        const expectedResult = { application: { accessKey: 'abc123' } };
        const mockMethod = jest
            .spyOn(application, 'getApplicationDataAsync')
            .mockImplementation(() => Promise.resolve(expectedResult));

        const response = await application.getApplicationDataAsync();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(expectedResult);
    });

    it('should have called the getCurrentLanguageAsync method', async () => {
        const expectedResult = { culture: 'en' };
        const mockMethod = jest
            .spyOn(application, 'getCurrentLanguageAsync')
            .mockImplementation(() => Promise.resolve(expectedResult));

        const response = await application.getCurrentLanguageAsync();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(expectedResult);
    });
});
