import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import EmptyResult from '../EmptyResult';

describe('Empty result page', () => {
    it('should render correctly', () => {
        render(
            <EmptyResult title="Nenhum plugin encontrado">
                Favor buscar novamente
            </EmptyResult>
        );

        expect(
            screen.getByRole('heading', {
                name: /nenhum plugin encontrado/i
            })
        ).toBeInTheDocument();
        expect(screen.getByText(/favor buscar novamente/i)).toBeInTheDocument();
    });

    it('should matches with snapshot', () => {
        const { container } = render(
            <EmptyResult
                title="Nenhum plugin encontrado"
                description="Favor buscar novamente"
            />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
