import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Home from '../Home';

describe('Home page', () => {
    const history = createMemoryHistory();
    const mocked_open = jest.fn();
    const original_open = window.open;

    beforeAll(() => {
        delete window.open;
        window.open = mocked_open;
    });

    afterAll(() => {
        // Restore original
        window.open = original_open;
    });

    it('should navigate to exemple page one', () => {
        render(
            <Router history={history}>
                <Home />
            </Router>
        );

        const exempleOneLink = screen.getByTestId('exemple-one');
        expect(exempleOneLink).toBeInTheDocument();

        userEvent.click(exempleOneLink);
        expect(history.location.pathname).toBe('/example');
        expect(history.location.state.type).toBe('stored_data');
    });

    it('should navigate to exemple page two', () => {
        render(
            <Router history={history}>
                <Home />
            </Router>
        );

        const exempleTwoLink = screen.getByTestId('exemple-two');
        expect(exempleTwoLink).toBeInTheDocument();

        userEvent.click(exempleTwoLink);
        expect(history.location.pathname).toBe('/example');
        expect(history.location.state.type).toBe('swr_call');
    });

    it('should navigate to repository', () => {
        render(
            <Router history={history}>
                <Home />
            </Router>
        );

        const repositoryButton = screen.getByTestId('repository-link');
        expect(repositoryButton).toBeInTheDocument();

        userEvent.click(repositoryButton);
        expect(mocked_open).toHaveBeenCalled();
        expect(mocked_open).toHaveBeenCalledTimes(1);
        expect(mocked_open).toHaveBeenCalledWith(
            'https://github.com/axeldouglas/cra-template-blip-plugin',
            '_blank'
        );
    });

    it('should matches with snapshot', () => {
        const { container } = render(<Home />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
