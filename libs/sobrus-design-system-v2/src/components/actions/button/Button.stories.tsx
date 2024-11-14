import { StoryObj, Meta } from '@storybook/react';
import { Button } from '@/actions';
import { HiOutlineFingerPrint } from 'react-icons/hi';
/**
 * Buttons allow users to take actions and make choices within the interface.
 *
 * This component supports all standard HTMLButtonElement and ButtonHTMLAttributes properties,
 * allowing for extensive customization and integration within forms and interactive elements.
 *
 * The component also accepts a `ref` for accessing the underlying button DOM element.
 *
 * - `ref`: (optional) A forwarded ref for accessing the underlying button element.
 *
 * - Supports all other default button props through `ButtonHTMLAttributes<HTMLButtonElement>`.
 *
 * ### Usage:
 *
 * Here is a simple example of how to use the Button component:
 *
 * ```jsx
 *
 * import { Button } from '@sobrus-com/sobrus-design-system-v2/button';
 *
 * const Example = () => {
 *   return <Button color="primary">Button</Button>;
 * };
 * ```
 *
 * In this example, the `Button` component is used to render a primary button. You can also customize
 * the button with other props, such as icons, loading states, and block-level buttons.
 */
export default {
    title: 'Actions/Button',
    component: Button,
    argTypes: {
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
        size: {
            control: 'select',
            options: ['sm', 'md'],
        },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        block: { control: 'boolean' },
        lefticon: { control: false },
        righticon: { control: false },
    },
    tags: ['autodocs'],
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
    render: (args) => <Button {...args}>Button</Button>,

    args: {
        color: 'primary',
        size: 'md',
        disabled: false,
        loading: false,
        block: false,
    },
};

export const Colors: StoryObj<typeof Button> = {
    render: (args) => (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Button {...args} color='primary'>
                Primary
            </Button>
            <Button {...args} color='secondary'>
                Secondary
            </Button>
            <Button {...args} color='tertiary'>
                Tertiary
            </Button>
            <Button {...args} color='ghost'>
                Ghost
            </Button>
            <Button {...args} color='danger'>
                Danger
            </Button>
            <Button {...args} color='link'>
                Link
            </Button>
        </div>
    ),

    args: {
        size: 'md',
        disabled: false,
        loading: false,
        block: false,
    },
};

export const Sizes: StoryObj<typeof Button> = {
    render: (args) => (
        <div style={{ display: 'flex', gap: '10px' }}>
            <Button {...args} size='sm'>
                Small Button
            </Button>
            <Button {...args} size='md'>
                Medium Button
            </Button>
        </div>
    ),

    args: {
        color: 'primary',
        disabled: false,
        loading: false,
        block: false,
    },
};

export const Loading: StoryObj<typeof Button> = {
    render: (args) => (
        <Button {...args} loading={true}>
            Loading Button
        </Button>
    ),

    args: {
        color: 'primary',
        size: 'md',
        disabled: false,
        block: false,
    },
};

export const Disabled: StoryObj<typeof Button> = {
    render: (args) => (
        <Button {...args} disabled={true}>
            Disabled Button
        </Button>
    ),

    args: {
        color: 'primary',
        size: 'md',
        loading: false,
        block: false,
    },
};

export const Block: StoryObj<typeof Button> = {
    render: (args) => (
        <div style={{ width: '100%' }}>
            <Button {...args} block={true}>
                Block Button
            </Button>
        </div>
    ),

    args: {
        color: 'primary',
        size: 'md',
        disabled: false,
        loading: false,
    },
};

export const WithIcons: StoryObj<typeof Button> = {
    render: (args) => (
        <div style={{ display: 'flex', gap: '10px' }}>
            <Button {...args} lefticon={<HiOutlineFingerPrint />}>
                Left Icon
            </Button>
            <Button {...args} righticon={<HiOutlineFingerPrint />}>
                Right Icon
            </Button>
            <Button {...args} lefticon={<HiOutlineFingerPrint />} righticon={<HiOutlineFingerPrint />}>
                Both
            </Button>
        </div>
    ),

    args: {
        color: 'primary',
        size: 'md',
        disabled: false,
        loading: false,
        block: false,
    },
};
