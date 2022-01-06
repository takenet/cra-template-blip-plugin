import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';

import sleep from '../sleep';

jest.mock('../sleep', () => {
    const original = jest.requireActual('../sleep');
    return {
        __esModule: true,
        default: jest.fn(original.default)
    };
});

describe('Sleep utils', () => {
    const mockParameter = 100;

    it('should have mocked the method', () => {
        expect(sleep._isMockFunction).toBeTruthy();
    });

    it('should have been called', async () => {
        await sleep(mockParameter);

        await waitFor(() => expect(sleep).toHaveBeenCalledTimes(1));
    });

    it('should have been called with default value', async () => {
        await sleep(mockParameter);

        await waitFor(() => expect(sleep).toHaveBeenCalledWith(mockParameter));
    });
});
