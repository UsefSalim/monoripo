import React, { useState } from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { SwitchButton } from '@/actions';
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import { PiFlagCheckeredFill } from 'react-icons/pi';

export default {
    title: 'Actions/SwitchButton',
    component: SwitchButton,
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        size: {
            control: 'select',
            options: ['sm', 'md'],
        },
        labelDir: {
            control: 'select',
            options: ['undefined', 'top', 'left', 'right'],
        },
        uncheckedHandleIcon: {
            control: false,
        },
        checkedHandleIcon: {
            control: false,
        },
        boxShadow: {
            control: 'text',
        },
        activeBoxShadow: {
            control: 'text',
        },
        borderRadius: {
            control: 'range',
        },
        className: {
            control: 'text',
        },
        id: {
            control: 'text',
        },
    },
    tags: ['autodocs'],
} as Meta<typeof SwitchButton>;

export const Default: StoryObj<typeof SwitchButton> = {
    render: (args) => {
        return <SwitchButton {...args} />;
    },
    args: {
        checked: false,
        disabled: false,
        boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.16), 0px 0px 4px 0px rgba(0, 0, 0, 0.16)',
        activeBoxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.16), 0px 0px 4px 0px rgba(0, 0, 0, 0.16)',
        uncheckedHandleIcon: <MdOutlineRadioButtonUnchecked />,
        checkedHandleIcon: <PiFlagCheckeredFill />,
        borderRadius: 50,
        label: 'SwitchButton label',
        size: 'md',
        labelDir: 'top',
    },
};

export const Checked: StoryObj<typeof SwitchButton> = {
    render: () => {
        return (
            <>
                <SwitchButton checked />
                <br />
                <SwitchButton />
            </>
        );
    },
};

export const Disabled: StoryObj<typeof SwitchButton> = {
    render: (args) => <SwitchButton {...args} disabled={true} />,

    args: {
        checked: false,
        size: 'md',
        label: 'Disabled Switch',
        labelDir: 'right',
    },
};
export const Shadow: StoryObj<typeof SwitchButton> = {
    render: (args) => (
        <>
            <SwitchButton {...args} checked />
            <br />
            <SwitchButton {...args} />
        </>
    ),

    args: {
        boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.16), 0px 0px 4px 0px rgba(0, 0, 0, 0.16)',
        activeBoxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.16), 0px 0px 4px 0px rgba(0, 0, 0, 0.16)',
    },
};
export const Icons: StoryObj<typeof SwitchButton> = {
    render: (args) => (
        <>
            <SwitchButton {...args} checked />
            <br />
            <SwitchButton {...args} />
        </>
    ),

    args: {
        uncheckedHandleIcon: <MdOutlineRadioButtonUnchecked />,
        checkedHandleIcon: <PiFlagCheckeredFill />,
    },
};
export const Radius: StoryObj<typeof SwitchButton> = {
    render: (args) => (
        <>
            <SwitchButton {...args} borderRadius={1} /> <br />
            <SwitchButton {...args} borderRadius={6} /> <br />
            <SwitchButton {...args} borderRadius={10} />
        </>
    ),

    args: {},
};
