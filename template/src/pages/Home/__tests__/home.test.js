import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home page', () => {
    it('should renders default page', () => {
        render(<Home />);

        expect(
            screen.getByRole('heading', {
                name: /plugins template/i
            })
        ).toBeInTheDocument();
        expect(screen.getByText(/visit the repository/i)).toBeInTheDocument();
    });

    it('should matches with snapshot', () => {
        const { container } = render(<Home />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
