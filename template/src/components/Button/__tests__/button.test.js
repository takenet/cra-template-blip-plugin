import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from '../Button';

describe('Button component', () => {
    const handleClick = jest.fn();

    it('should render with children', () => {
        render(<Button>Adicionar Plugin</Button>);
        expect(screen.queryByTestId('bds-button')).toHaveTextContent(
            'Adicionar Plugin'
        );
    });

    it('should handle click event', () => {
        render(<Button text="Adicionar Plugin" onClick={handleClick} />);

        const backButtonNode = screen.queryByTestId('bds-button');
        fireEvent.click(backButtonNode);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should matches with snapshot', () => {
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
        expect(container.firstChild).toMatchSnapshot();
    });
});
