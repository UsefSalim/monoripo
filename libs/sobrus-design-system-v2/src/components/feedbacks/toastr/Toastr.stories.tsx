import { Toast, notify } from './toastr';
import { Button } from '@/actions';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Feedbacks/Toast',
    component: Toast,
    argTypes: {
        type: {
            options: ['danger', 'success', 'info', 'warning', 'default'],
            control: 'select',
        },
    },
} as Meta<typeof Toast>;

// Default Toast Story
export const Alert: StoryObj<typeof Toast> = {
    render: (args) => (
        <div style={{ width: '100%', backgroundColor: '#F8F8F8', padding: 30 }}>
            <Toast {...args} />
            <div style={{ display: 'flex', gap: 12 }}>
                <Button onClick={() => notify({ type: 'info', msg: 'Info message here' })} color='primary'>
                    Info
                </Button>
                <Button onClick={() => notify({ type: 'danger', msg: 'Danger message here' })} color='primary'>
                    Danger
                </Button>
                <Button
                    onClick={() => notify({ type: 'warning', msg: 'Warning message goes here with extra text' })}
                    color='primary'
                >
                    Warning
                </Button>
                <Button onClick={() => notify({ type: 'success', msg: 'Success message here' })} color='primary'>
                    Success
                </Button>
            </div>
        </div>
    ),
    args: {},
};
