import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Example from '../Example';
import Header from '../components/Header';

describe('Example page', () => {
    const history = createMemoryHistory();

    it('should render stored data page example', () => {
        history.push('/example', { type: 'storedData' });

        const { container } = render(
            <Router history={history}>
                <Example />
            </Router>
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render swr page example', () => {
        history.push('/example');

        const { container } = render(
            <Router history={history}>
                <Example />
            </Router>
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render header', () => {
        history.push('/example');
        const title = 'back';
        const onRefresh = jest.fn();
        const onClick = jest.fn();

        render(
            <Header
                title={title}
                canRefresh
                onRefresh={onRefresh}
                onClick={onClick}
            />
        );

        const refreshButton = screen.getByTestId('refresh-button');
        userEvent.click(refreshButton);
        expect(onRefresh).toHaveBeenCalled();
        expect(onRefresh).toHaveBeenCalledTimes(1);

        const backButton = screen.getByTestId('page-header-back-icon');
        userEvent.click(backButton);
        expect(onClick).toHaveBeenCalled();
        expect(onClick).toHaveBeenCalledTimes(1);

        expect(
            screen.getByRole('heading', {
                name: /back/i
            })
        ).toBeInTheDocument();
    });
});
