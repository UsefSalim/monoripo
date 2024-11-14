import { SpinnerLoading } from '@/feedbacks';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Feedbacks/Spinner',
    component: SpinnerLoading,
} as Meta<typeof SpinnerLoading>;

// Default SpinnerLoading Story
export const Spinner: StoryObj<typeof SpinnerLoading> = {
    render: (args) => <SpinnerLoading {...args} />,
    args: {
        title: 'Veuillez patienter SVP …',
        color: '#4caace',
        size: 22,
        className: '',
        style: {},
    },
};
