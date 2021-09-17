import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from '../Button';

describe('Button component', () => {
    const handleClick = jest.fn();
    let rtlContainer;

    beforeEach(() => {
        const { container } = render(
            <Button
                text="Adicionar Plugin"
                icon="upload"
                variant="ghost"
                arrow={false}
                disabled={false}
                onClick={handleClick}
            />
        );
        rtlContainer = container;
    });

    it('should render correctly', () => {
        expect(screen.queryByTestId('bds-button')).toBeInTheDocument();
        expect(screen.queryByTestId('bds-button')).toHaveTextContent(
            'Adicionar Plugin'
        );
    });

    it('should handle click event', () => {
        const backButtonNode = screen.queryByTestId('bds-button');
        fireEvent.click(backButtonNode);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should matches with snapshot', () => {
        expect(rtlContainer.firstChild).toMatchSnapshot();
    });
});
