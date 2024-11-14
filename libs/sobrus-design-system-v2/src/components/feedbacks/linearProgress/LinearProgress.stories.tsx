import { LinearProgress } from '@/feedbacks';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Feedbacks/ProgressBar',
    component: LinearProgress,
    argTypes: {
        variant: {
            options: ['determinate', 'indeterminate'],
            control: 'select',
        },
    },
} as Meta<typeof LinearProgress>;

// Indeterminate LinearProgress Story
export const TemplatIndeterminate: StoryObj<typeof LinearProgress> = {
    render: (args) => <LinearProgress variant='indeterminate' value={30} {...args} />,
    args: {
        // Optional default styles or color
        // style: { background: 'red', borderRadius: '16px', height: 30 },
        // color: 'yellow',
    },
};
