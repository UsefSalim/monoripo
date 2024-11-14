import { CircularProgress } from '@/feedbacks';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Feedbacks/CircularProgress',
    component: CircularProgress,
    argTypes: {
        variant: {
            options: ['determinate', 'indeterminate', 'static'],
            control: 'select',
        },
    },
} as Meta<typeof CircularProgress>;

// Default CircularProgress Story
export const TemplateImp: StoryObj<typeof CircularProgress> = {
    render: (args) => <CircularProgress {...args} />,
    args: {
        size: 20,
        loading: true,
        value: 50,
        variant: 'indeterminate',
    },
};
