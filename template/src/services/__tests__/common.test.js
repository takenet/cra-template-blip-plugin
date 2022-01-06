import '@testing-library/jest-dom';

import * as common from '../common-service';

describe('Common service', () => {
    afterEach(() => jest.clearAllMocks());

    it('should have called the startLoading method', () => {
        const mockMethod = jest.spyOn(common, 'startLoading');
        common.startLoading();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
    });

    it('should have called the stopLoading method', () => {
        const mockMethod = jest.spyOn(common, 'stopLoading');
        common.stopLoading();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
    });

    it('should have called the setHeight method', () => {
        const mockParameter = 500;
        const mockMethod = jest.spyOn(common, 'setHeight');

        common.setHeight(mockParameter);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(mockParameter);
    });

    it('should have called the showToast method', () => {
        const mockParameter01 = 'success';
        const mockParameter02 = 'Default Message';
        const mockParameter03 = 'Success';
        const mockMethod = jest.spyOn(common, 'showToast');

        common.showToast(mockParameter01, mockParameter02, mockParameter03);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(
            mockParameter01,
            mockParameter02,
            mockParameter03
        );
    });

    it('should have called the showModal method', () => {
        const mockParameter01 = 'Modal Test';
        const mockParameter02 = 'Foo boo';
        const mockMethod = jest.spyOn(common, 'showModal');

        common.showModal(mockParameter01, mockParameter02);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(
            mockParameter01,
            mockParameter02
        );
    });

    it('should have called the withLoadingAsync method', async () => {
        const mockFunction = jest.fn();
        const mockStart = jest.spyOn(common, 'startLoading');
        const mockStop = jest.spyOn(common, 'stopLoading');
        const mockMethod = jest
            .spyOn(common, 'withLoadingAsync')
            .mockImplementation(async (func) => {
                common.startLoading();
                try {
                    return await func();
                } finally {
                    common.stopLoading();
                }
            });

        await common.withLoadingAsync(mockFunction);

        expect(mockStart._isMockFunction).toBeTruthy();
        expect(mockStop._isMockFunction).toBeTruthy();
        expect(mockMethod._isMockFunction).toBeTruthy();

        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(mockFunction);

        expect(mockStart).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockStop).toHaveBeenCalledTimes(1);
    });
});
