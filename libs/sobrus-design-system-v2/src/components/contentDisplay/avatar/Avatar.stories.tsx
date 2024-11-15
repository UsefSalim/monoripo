import { Avatar } from './avatar';
import { StoryObj, Meta } from '@storybook/react';
import image from '@/assets/empty.png';

export default {
    title: 'Content display/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            control: 'select',
        },
    },
} as Meta<typeof Avatar>;

// Default Avatar Story
export const AvatarDefault: StoryObj<typeof Avatar> = {
    render: (args) => <Avatar {...args}>Statut</Avatar>,
    args: {
        image,
        className: '',
        style: {},
    },
};
