import '@testing-library/jest-dom';
import * as analytics from '../analytics-service';

describe('Analytics service', () => {
    afterEach(() => jest.clearAllMocks());

    it('should have called the track method', () => {
        const mockEvent = 'event-name';
        const mockProperties = {
            identity: 'labdoaxelatendimento',
            accessKey: 'A1234567890=='
        };

        const mockMethod = jest.spyOn(analytics, 'track');

        analytics.track(mockEvent, mockProperties);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(mockEvent, mockProperties);
    });

    it('should have called the page method', () => {
        const mockEvent = 'home';
        const mockProperties = {
            path: '/'
        };

        const mockMethod = jest.spyOn(analytics, 'page');

        analytics.page(mockEvent, mockProperties);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(mockMethod).toHaveBeenCalledWith(mockEvent, mockProperties);
    });
});
