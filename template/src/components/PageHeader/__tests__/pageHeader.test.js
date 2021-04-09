import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import PageHeader from '../PageHeader';

describe('Page header component', () => {
    const handleClick = jest.fn();

    const mockRenderOptions = () => <>Hello Element</>;

    it('should render correctly', () => {
        render(
            <PageHeader
                title="Plugins"
                icon="plugin"
                is_informative={true}
                help_text="Tooltip Text Info"
                relatedOptions={mockRenderOptions()}
                is_back_navigation={false}
            />
        );
        expect(
            screen.getByRole('heading', {
                name: /plugins/i
            })
        ).toBeInTheDocument();

        expect(screen.queryByTestId('page-header-icon')).toBeInTheDocument();
        expect(screen.queryByTestId('page-header-tooltip')).toBeInTheDocument();

        expect(screen.getByText(/hello element/i)).toBeInTheDocument();

        expect(
            screen.queryByTestId('page-header-back-icon')
        ).not.toBeInTheDocument();
    });

    it('should handle click event', () => {
        render(
            <PageHeader
                title="Plugins"
                relatedOptions={mockRenderOptions()}
                is_back_navigation={true}
                onBackPressed={handleClick}
            />
        );
        const back_button_node = screen.queryByTestId('page-header-back-icon');
        fireEvent.click(back_button_node);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should matches with snapshot', () => {
        const { container } = render(
            <PageHeader
                title="Plugins"
                icon="plugin"
                is_informative={true}
                help_text="Tooltip Text Info"
                relatedOptions={mockRenderOptions()}
                is_back_navigation={false}
            />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
