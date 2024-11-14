import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { DashedButton } from '@/actions';
import { HiOutlinePlus, HiOutlineStar } from 'react-icons/hi';

export default {
    title: 'Actions/DashedButton',
    component: DashedButton,
    argTypes: {
        square: { control: 'boolean' },
        disabled: { control: 'boolean' },
        icon: { control: false },
    },
} as Meta<typeof DashedButton>;

export const Default: StoryObj<typeof DashedButton> = {
    render: (args) => <DashedButton {...args}>Sobrus Dashed Button</DashedButton>,

    args: {
        square: false,
        disabled: false,
        icon: <HiOutlinePlus size={20} color='#4CAACE' />,
    },
};

export const Square: StoryObj<typeof DashedButton> = {
    render: (args) => <DashedButton {...args} icon={<HiOutlinePlus size={20} color='#4CAACE' />} />,

    args: {
        square: true,
        disabled: false,
        icon: <HiOutlineStar size={20} color='#FF0000' />,
    },
};

export const Disabled: StoryObj<typeof DashedButton> = {
    render: (args) => (
        <DashedButton {...args} disabled>
            Disabled Button
        </DashedButton>
    ),

    args: {
        square: false,
        disabled: true,
        icon: <HiOutlineStar size={20} color='#FF0000' />,
    },
};
