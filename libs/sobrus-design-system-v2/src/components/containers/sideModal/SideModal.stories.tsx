import React, { useState } from 'react';
import { SideModal, SideModalHeader, SideModalBody } from './sideModal';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Button } from '@/actions';
import icon from '@/assets/event_icon.png';
export default {
    title: 'Containers/SideModal',
    component: SideModal,
    subcomponents: { SideModalBody, SideModalHeader },
    argTypes: {
        size: {
            options: ['md', 'lg'],
            control: 'select',
        },
        setOpen: { control: false },
        open: { control: false },
    },
} as Meta<typeof SideModal>;

export const Default: StoryObj<typeof SideModal> = {
    render: (args) => {
        const [modalOpen, setModelOpen] = useState(false);
        const [size, setSize] = useState<'md' | 'lg' | undefined>('md');
        return (
            <div style={{ display: 'flex', gap: 12 }}>
                <Button
                    color='primary'
                    onClick={() => {
                        setSize('md');
                        setModelOpen(true);
                    }}
                >
                    open md
                </Button>
                <Button
                    color='primary'
                    onClick={() => {
                        setSize('lg');
                        setModelOpen(true);
                    }}
                >
                    open Lg
                </Button>

                <SideModal setOpen={() => setModelOpen(false)} open={modalOpen} size={size ?? args?.size}>
                    <SideModalHeader
                        setOpen={setModelOpen}
                        bgIcon='#66CFC3'
                        icon={<img src={icon} />}
                        title='Modal title'
                    />
                    <SideModalBody>
                        <div>
                            <p>Empty Content</p>
                            <p>Empty Content</p>
                            <p>Empty Content</p>
                            <p>Empty Content</p>
                        </div>
                    </SideModalBody>
                </SideModal>
            </div>
        );
    },
    args: {},
};
