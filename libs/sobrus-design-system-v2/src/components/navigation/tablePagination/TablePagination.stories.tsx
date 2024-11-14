import { Meta, StoryObj } from '@storybook/react';
import { TablePage, TableNextPage, TablePreviousPage } from '@/navigation';

export default {
    title: 'Navigation/Pagination',
    component: TablePage,
    subcomponents: { TableNextPage, TablePreviousPage },
} as Meta<typeof TablePage>;

// Default Pagination Story
export const Default: StoryObj<typeof TablePage> = {
    render: (args) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TablePreviousPage />
            <TablePage {...args}>3500</TablePage>
            <TableNextPage />
        </div>
    ),
    args: {
        className: '',
    },
};

// Outline Pagination Story
export const Outline: StoryObj<typeof TablePage> = {
    render: (args) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TablePreviousPage outline />
            <TablePage {...args}>3500</TablePage>
            <TableNextPage outline />
        </div>
    ),
    args: {
        outline: true,
    },
};

// Disabled Pagination Story
export const Disabled: StoryObj<typeof TablePage> = {
    render: (args) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TablePreviousPage disabled />
            <TablePage {...args}>3500</TablePage>
            <TableNextPage disabled />
        </div>
    ),
    args: {
        outline: true,
    },
};
