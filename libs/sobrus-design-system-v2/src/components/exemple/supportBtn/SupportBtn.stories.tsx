import { SupportBtn } from './supportBtn';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Exemple/SupportBtn',
    component: SupportBtn,
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: 'select',
        },
    },
} as Meta<typeof SupportBtn>;

// Default SupportBtn Story
export const SupportBtndefault: StoryObj<typeof SupportBtn> = {
    render: (args) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: 500 }}>
            <SupportBtn {...args} />
        </div>
    ),
    args: {
        phoneNumber: '05 30 500 500',
        supplierRef: '595',
        clientRef: 'ma-3948-35523-rr',
        email: 'supportTest@sobrus.com',
        workHours: [
            { label: 'Du lundi au Vendredi', morning: '09:00 à 13:00', afternoon: '14:00 à 18:00' },
            { label: 'Le Samedi', morning: '09:00 à 13:00' },
        ],
        size: 'md',
    },
};
