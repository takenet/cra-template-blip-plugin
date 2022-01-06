import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import Card from '../Card';

describe('Card component', () => {
    const handleClick = jest.fn();

    it('should render correctly without props', () => {
        render(<Card>Other short description about my bot</Card>);

        expect(
            screen.getByText(/other short description about my bot/i)
        ).toBeInTheDocument();

        expect(screen.queryByTestId('card-img')).not.toBeInTheDocument();
        expect(screen.queryByTestId('card-url-img')).not.toBeInTheDocument();
        expect(screen.queryByTestId('card-btn')).not.toBeInTheDocument();
    });

    it('should render with image', () => {
        render(
            <Card title="Card Title" image="image" imageType="cover">
				Short description about my bot
            </Card>
        );

        expect(screen.queryByTestId('card-img')).toBeInTheDocument();
        expect(screen.queryByTestId('card-url-img')).not.toBeInTheDocument();
    });

    it('should render with image type `cover`', () => {
        render(
            <Card
                title="Card Title"
                imageUrl="http://placekitten.com/g/100/100"
                imageType="cover"
            >
				Short description about my bot
            </Card>
        );

        const img = screen.queryByTestId('card-url-img');
        expect(img).toHaveClass('db w-100 br--top br2');
    });

    it('should render with image type `circle`', () => {
        render(
            <Card
                title="Card Title"
                imageUrl="http://placekitten.com/g/100/100"
                imageType="circle"
            >
				Short description about my bot
            </Card>
        );

        const img = screen.queryByTestId('card-url-img');
        expect(img).toHaveClass('db br-100 h3 w3 mt2 mt3-ns');
    });

    it('should render with image type `double-ring`', () => {
        render(
            <Card
                title="Card Title"
                imageUrl="http://placekitten.com/g/100/100"
                imageType="double-ring"
            >
				Short description about my bot
            </Card>
        );

        const img = screen.queryByTestId('card-url-img');
        expect(img).toHaveClass(
            'db br-100 h3 w3 pa1 ba b--black-10 mt2 mt3-ns'
        );
    });

    it('should render with image type `rounded-large`', () => {
        render(
            <Card
                title="Card Title"
                imageUrl="http://placekitten.com/g/100/100"
                imageType="rounded-large"
            >
				Short description about my bot
            </Card>
        );

        const img = screen.queryByTestId('card-url-img');
        expect(img).toHaveClass('db br4 h3 w3 mt2 mt3-ns');
    });

    it('should render with image type `rounded`', () => {
        render(
            <Card
                title="Card Title"
                imageUrl="http://placekitten.com/g/100/100"
                imageType="rounded"
            >
				Short description about my bot
            </Card>
        );

        const img = screen.queryByTestId('card-url-img');
        expect(img).toHaveClass('db br2 h3 w3 mt2 mt3-ns');
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
                btn={{
                    text: 'Ativar',
                    active: true,
                    bgColor: 'red',
                    textColor: 'white'
                }}
            />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
