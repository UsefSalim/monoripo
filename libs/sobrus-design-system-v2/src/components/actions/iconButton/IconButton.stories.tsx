import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { IconButton } from '@/actions';
import { HiOutlinePlus, HiOutlineStar, HiOutlineArrowRight } from 'react-icons/hi';
/**
 * The `IconButton` component allows users to take actions or make choices using an icon-only button.
 * It supports all standard HTMLButtonElement and ButtonHTMLAttributes props, and inherits props from the `Button` component,
 * excluding the `lefticon` and `righticon` props.
 *
 * ### Usage:
 *
 * Here’s an example of how to use the `IconButton` component:
 *
 * ```jsx
 *
 * import { IconButton } from '@sobrus-com/sobrus-design-system';
 * import { HiOutlinePlus } from 'react-icons/hi';
 *
 * const Example = () => {
 *   return (
 *     <IconButton color="primary" onClick={() => {}}>
 *       <HiOutlinePlus size={24} />
 *     </IconButton>
 *   );
 * };
 * ```
 *
 * In this example, `IconButton` is used with a plus icon to allow users to perform actions through an icon-based button.
 */
export default {
    title: 'Actions/IconButton',
    component: IconButton,
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md'],
        },
        color: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'tertiary',
                'ghost',
                'danger-ghost',
                'danger-secondary',
                'danger-tertiary',
                'danger',
                'initial',
                'link',
            ],
        },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        block: { control: 'boolean' },
    },
    tags: ['autodocs'],
} as Meta<typeof IconButton>;

export const Default: StoryObj<typeof IconButton> = {
    render: (args) => (
        <IconButton {...args}>
            <HiOutlinePlus size={24} />
        </IconButton>
    ),

    args: {
        size: 'md',
        color: 'primary',
        disabled: false,
        loading: false,
        block: false,
    },
};

export const Sizes: StoryObj<typeof IconButton> = {
    render: (args) => (
        <div style={{ display: 'flex', gap: '10px' }}>
            <IconButton {...args} size='sm'>
                <HiOutlinePlus size={20} />
            </IconButton>
            <IconButton {...args} size='md'>
                <HiOutlinePlus size={24} />
            </IconButton>
        </div>
    ),

    args: {
        color: 'primary',
        disabled: false,
        loading: false,
        block: false,
    },
};

export const Colors: StoryObj<typeof IconButton> = {
    render: (args) => (
        <div style={{ display: 'flex', gap: '10px' }}>
            <IconButton {...args} color='primary'>
                <HiOutlinePlus size={24} />
            </IconButton>
            <IconButton {...args} color='secondary'>
                <HiOutlineStar size={24} />
            </IconButton>
            <IconButton {...args} color='tertiary'>
                <HiOutlineArrowRight size={24} />
            </IconButton>
            <IconButton {...args} color='danger'>
                <HiOutlinePlus size={24} />
            </IconButton>
            <IconButton {...args} color='ghost'>
                <HiOutlineStar size={24} />
            </IconButton>
        </div>
    ),

    args: {
        size: 'md',
        disabled: false,
        loading: false,
        block: false,
    },
};

export const Disabled: StoryObj<typeof IconButton> = {
    render: (args) => (
        <IconButton {...args} disabled>
            <HiOutlinePlus size={24} />
        </IconButton>
    ),

    args: {
        size: 'md',
        color: 'primary',
        loading: false,
        block: false,
    },
};

export const Loading: StoryObj<typeof IconButton> = {
    render: (args) => (
        <IconButton {...args} loading>
            <HiOutlinePlus size={24} />
        </IconButton>
    ),

    args: {
        size: 'md',
        color: 'primary',
        disabled: false,
        block: false,
    },
};

export const Block: StoryObj<typeof IconButton> = {
    render: (args) => (
        <div style={{ width: '100%' }}>
            <IconButton {...args} block>
                <HiOutlinePlus size={24} />
            </IconButton>
        </div>
    ),

    args: {
        size: 'md',
        color: 'primary',
        disabled: false,
        loading: false,
    },
};
