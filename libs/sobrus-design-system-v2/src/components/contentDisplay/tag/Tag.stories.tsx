import { Tag } from '@/contentDisplay';
import { StoryObj, Meta } from '@storybook/react';
import { BiTimeFive } from 'react-icons/bi';

export default {
    title: 'Content display/Tag',
    component: Tag,
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md'],
            control: 'select',
        },
        onClick: { control: false },
        children: { control: false },
        bgColor: { control: 'color' },
        textColor: { control: 'color' },
    },
    tags: ['autodocs'],
} as Meta<typeof Tag>;

// Default Tag Story
export const Default: StoryObj<typeof Tag> = {
    render: (args) => <Tag {...args}>Statut</Tag>,
    args: {
        minWidth: 90,
        textColor: '#fff',
        bgColor: '#2B4660',
    },
};

// Tag with Icons Story
export const Icons: StoryObj<typeof Tag> = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                backgroundColor: '#fff',
                alignItems: 'flex-start',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '24px',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}
            >
                <Tag size='xs' bgColor='#DCDFE3' textColor='#627282' lefticon={<BiTimeFive />}>
                    Statut
                </Tag>
                <Tag size='xs' textColor='#55ACED' bgColor='#EBF5FD' righticon={<BiTimeFive />}>
                    Statut
                </Tag>
                <Tag
                    size='xs'
                    textColor='#55ACED'
                    bgColor='#EBF5FD'
                    righticon={<BiTimeFive />}
                    lefticon={<BiTimeFive />}
                >
                    Statut
                </Tag>
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: '24px',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}
            >
                <Tag size='sm' bgColor='#DCDFE3' textColor='#627282' lefticon={<BiTimeFive />}>
                    Statut
                </Tag>
                <Tag size='sm' textColor='#55ACED' bgColor='#EBF5FD' righticon={<BiTimeFive />}>
                    Statut
                </Tag>
                <Tag
                    size='sm'
                    textColor='#55ACED'
                    bgColor='#EBF5FD'
                    righticon={<BiTimeFive />}
                    lefticon={<BiTimeFive />}
                >
                    Statut
                </Tag>
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: '24px',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}
            >
                <Tag size='md' bgColor='#DCDFE3' textColor='#627282' lefticon={<BiTimeFive />}>
                    Statut
                </Tag>
                <Tag size='md' textColor='#55ACED' bgColor='#EBF5FD' righticon={<BiTimeFive />}>
                    Statut
                </Tag>
                <Tag
                    size='md'
                    textColor='#55ACED'
                    bgColor='#EBF5FD'
                    righticon={<BiTimeFive />}
                    lefticon={<BiTimeFive />}
                >
                    Statut
                </Tag>
            </div>
        </div>
    ),
};

// Tag with Different Sizes Story
export const Sizes: StoryObj<typeof Tag> = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, backgroundColor: '#fff', padding: 30 }}>
            <Tag size='xs' bgColor='#2B4660' textColor='#fff' lefticon={<BiTimeFive />} righticon={<BiTimeFive />}>
                Statut
            </Tag>
            <Tag size='sm' textColor='#fff' bgColor='#2B4660' lefticon={<BiTimeFive />} righticon={<BiTimeFive />}>
                Statut
            </Tag>
            <Tag size='md' textColor='#fff' bgColor='#2B4660' lefticon={<BiTimeFive />} righticon={<BiTimeFive />}>
                Statut
            </Tag>
        </div>
    ),
};
