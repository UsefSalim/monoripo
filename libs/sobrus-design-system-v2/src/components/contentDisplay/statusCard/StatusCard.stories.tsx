import { Meta, StoryObj } from '@storybook/react';
import { StatusCard } from './statusCard';
import { LuXCircle } from 'react-icons/lu';

export default {
    title: 'Content display/Status Card',
    component: StatusCard,
    argTypes: {
        status: {
            control: { type: 'object' },
        },
        statusHistory: {
            control: { type: 'object' },
        },
    },
} as Meta<typeof StatusCard>;

// Default StatusCard Story
export const Default: StoryObj<typeof StatusCard> = {
    render: (args) => (
        <div style={{ width: '100%', height: 300 }}>
            <StatusCard {...args} />
        </div>
    ),
    args: {
        status: {
            title: 'En cours',
            label: '20 juin 2023',
            icon: <LuXCircle color={'red'} />,
            color: 'red',
        },
    },
};
export const Loading: StoryObj<typeof StatusCard> = {
    render: (args) => (
        <div style={{ width: '100%', height: 300 }}>
            <StatusCard {...args} />
        </div>
    ),
    args: {
        status: {
            title: 'En cours',
            label: '20 juin 2023',
            icon: <LuXCircle color={'red'} />,
            color: 'red',
            loading: true,
        },
    },
};

// StatusCard with History
export const StatusCardHistory: StoryObj<typeof StatusCard> = {
    render: (args) => (
        <div style={{ width: '100%', height: 300 }}>
            <StatusCard {...args} />
        </div>
    ),
    args: {
        status: {
            title: 'En cours',
            label: '20 juin 2023',
            icon: <LuXCircle color={'red'} />,
            color: 'red',
        },
        statusHistory: [
            {
                title: 'En cours',
                label: (
                    <div>
                        <p>Sobrus Sobrus</p>
                        <p>20 juin 202 </p>
                    </div>
                ),
                icon: <LuXCircle color={'red'} />,
                color: 'red',
            },
            {
                title: 'En cours',
                label: (
                    <div>
                        <p>Sobrus Sobrus</p>
                        <p>20 juin 202 </p>
                    </div>
                ),
                icon: <LuXCircle color={'red'} />,
                color: 'red',
            },
        ],
    },
};
export const StatusCardHistoryLoading: StoryObj<typeof StatusCard> = {
    render: (args) => (
        <div style={{ width: '100%', height: 300 }}>
            <StatusCard {...args} />
        </div>
    ),
    args: {
        status: {
            title: 'En cours',
            label: '20 juin 2023',
            icon: <LuXCircle color={'red'} />,
            color: 'red',
            loading: true,
        },
        statusHistory: [
            {
                title: 'En cours',
                label: (
                    <div>
                        <p>Sobrus Sobrus</p>
                        <p>20 juin 202 </p>
                    </div>
                ),
                icon: <LuXCircle color={'red'} />,
                color: 'red',
                loading: true,
            },
            {
                title: 'En cours',
                label: (
                    <div>
                        <p>Sobrus Sobrus</p>
                        <p>20 juin 202 </p>
                    </div>
                ),
                icon: <LuXCircle color={'red'} />,
                color: 'red',
                loading: true,
            },
        ],
    },
};
