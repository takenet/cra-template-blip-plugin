import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Input from '../Input';

describe('Button component', () => {
    const handleEvent = jest.fn();
    let rtlContainer;

    beforeEach(() => {
        const { container } = render(
            <Input
                name="search"
                label="Search"
                placeholder="E.g. Music Bot"
                value="Test Bot"
                icon="search"
                onChange={handleEvent}
                onBlur={handleEvent}
            />
        );
        rtlContainer = container;
    });

    it('should render correctly', () => {
        expect(screen.queryByTestId('bds-input')).toBeInTheDocument();
    });

    it('should matches with snapshot', () => {
        expect(rtlContainer.firstChild).toMatchSnapshot();
    });
});
