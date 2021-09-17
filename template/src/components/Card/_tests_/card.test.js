import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import Card from '../Card';

describe('Card component', () => {
    const handleClick = jest.fn();

    it('should render correctly with default props', () => {
        render(
            <Card
                title="Card Title"
                description="Short description about my bot"
                imageUrl="http://placekitten.com/g/100/100"
                imageType="square"
                btn={{ text: 'Ativar', active: false }}
            />
        );

        expect(
            screen.getByRole('heading', {
                name: /card title/i
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(/short description about my bot/i)
        ).toBeInTheDocument();

        expect(
            screen.getByRole('img', {
                name: /card avatar/i
            })
        ).toHaveAttribute('src', 'http://placekitten.com/g/100/100');

        expect(
            screen.getByRole('button', {
                name: /ativar/i
            })
        ).toBeInTheDocument();
    });

    it('should render correctly when remove props', () => {
        render(
            <Card title="New Card Title">
                Other short description about my bot
            </Card>
        );

        expect(
            screen.getByRole('heading', {
                name: /new card title/i
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(/other short description about my bot/i)
        ).toBeInTheDocument();

        expect(screen.queryByTestId('card.img')).not.toBeInTheDocument();
        expect(screen.queryByTestId('card-btn')).not.toBeInTheDocument();
    });

    it('should handle click event', () => {
        render(
            <Card
                title="Card Title"
                description="Short description about my bot"
                imageUrl="http://placekitten.com/g/100/100"
                imageType="square"
                btn={{ text: 'Ativar', active: false, onClick: handleClick }}
            />
        );
        const buttonNode = screen.queryByTestId('card-btn');
        fireEvent.click(buttonNode);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should matches with snapshot', () => {
        const { container } = render(
            <Card
                title="Card Title"
                description="Short description about my bot"
                imageUrl="http://placekitten.com/g/100/100"
                imageType="square"
                btn={{ text: 'Ativar', active: false }}
            />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
