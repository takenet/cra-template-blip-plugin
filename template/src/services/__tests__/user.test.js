import '@testing-library/jest-dom';

import * as user from '../user-service';

describe('User service', () => {
    afterEach(() => jest.clearAllMocks());

    it('should have called the getLoggedUserAsync method', async () => {
        const expectedResult = { fullName: 'Chuck Norris', culture: 'en' };
        const mockMethod = jest
            .spyOn(user, 'getLoggedUserAsync')
            .mockImplementation(() => Promise.resolve(expectedResult));

        const response = await user.getLoggedUserAsync();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(expectedResult);
    });

    it('should have called the userHasPermissionAsync method', async () => {
        const mockMethod = jest
            .spyOn(user, 'userHasPermissionAsync')
            .mockImplementation(() => Promise.resolve(false));

        const response = await user.userHasPermissionAsync();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });
});
