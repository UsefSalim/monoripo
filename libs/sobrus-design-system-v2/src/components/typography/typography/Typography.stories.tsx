import type { Meta, StoryObj } from '@storybook/react';
import { TextColors, Typography } from '@/typography';
/**
 * Typography component for rendering styled text elements with customizable HTML tags, type, and size.
 *
 * ### Usage:
 *
 * ```tsx
 * import { Typography } from '@sobrus-com/sobrus-design-system-v2';
 *
 * const Example = () => (
 *   <Typography type="heading" size="lg">
 *     This is a heading
 *   </Typography>
 * );
 * ```
 *
 * In this example, the `Typography` component renders a large heading text. The component
 * supports different types (`p`, `label`, `heading`) and sizes (e.g., `xs`, `sm`, `md`, etc.).
 */
export default {
    title: 'Typography/Typography',
    component: Typography,
    argTypes: {
        as: {
            control: 'text',
        },
        size: {
            control: 'select',
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
        },
        type: {
            control: 'select',
            options: ['p', 'label', 'heading'],
        },
        options: [
            'default',
            'primary',
            'secondary',
            'tertiary',
            'primary-inverse',
            'secondary-inverse',
            'tertiary-inverse',
            'info',
            'success',
            'warning',
            'danger',
            'link',
            'link-disabled',
        ],
    },
    tags: ['autodocs'],
} as Meta<typeof Typography>;

export const Default: StoryObj<typeof Typography> = {
    render: (args) => <Typography {...args}>Typography</Typography>,
    args: {
        as: 'p',
        type: 'p',
        className: '',
    },
};

export const ParagraphSizes: StoryObj<typeof Typography> = {
    render: (args) => (
        <>
            <Typography {...args} type='p' size='xxs'>
                Paragraph - XX Small
            </Typography>
            <Typography {...args} type='p' size='xs'>
                Paragraph - X Small
            </Typography>
            <Typography {...args} type='p' size='sm'>
                Paragraph - Small
            </Typography>
            <Typography {...args} type='p' size='md'>
                Paragraph - Medium
            </Typography>
            <Typography {...args} type='p' size='lg'>
                Paragraph - Large
            </Typography>
        </>
    ),
    args: {
        as: 'p',
        type: 'p',
    },
};

export const LabelSizes: StoryObj<typeof Typography> = {
    render: (args) => (
        <>
            <Typography {...args} type='label' size='xxs'>
                Label - XX Small
            </Typography>
            <Typography {...args} type='label' size='xs'>
                Label - X Small
            </Typography>
            <Typography {...args} type='label' size='sm'>
                Label - Small
            </Typography>
            <Typography {...args} type='label' size='md'>
                Label - Medium
            </Typography>
            <Typography {...args} type='label' size='lg'>
                Label - Large
            </Typography>
        </>
    ),
    args: {
        as: 'p',
        type: 'label',
    },
};

export const HeadingSizes: StoryObj<typeof Typography> = {
    render: (args) => (
        <>
            <Typography {...args} type='heading' size='xxs'>
                Heading - XX Small
            </Typography>
            <Typography {...args} type='heading' size='xs'>
                Heading - X Small
            </Typography>
            <Typography {...args} type='heading' size='sm'>
                Heading - Small
            </Typography>
            <Typography {...args} type='heading' size='md'>
                Heading - Medium
            </Typography>
            <Typography {...args} type='heading' size='lg'>
                Heading - Large
            </Typography>
            <Typography {...args} type='heading' size='xl'>
                Heading - X Large
            </Typography>
        </>
    ),
    args: {
        as: 'h1',
        type: 'heading',
    },
};

/**
 *
 *  you can use custom colors ad a classname respect desig system tokens
 * or use color props from design system
 */

export const Colors: StoryObj<typeof Typography> = {
    render: (args) => (
        <div>
            <Typography {...args} type='heading' size='lg'>
                Custom Colors :
            </Typography>
            <Typography {...args} type='p' size='md' className='info-900'>
                - text info 900
            </Typography>
            <Typography {...args} type='p' size='md' className='gray-400'>
                - text gray 400
            </Typography>
            <Typography {...args} type='p' size='md' className='primary-200'>
                - text primary 200
            </Typography>
            <Typography {...args} type='p' size='md' className='success-600'>
                - text success 600
            </Typography>
            <Typography {...args} type='p' size='md' className='warning-700'>
                - text warning 700
            </Typography>
            <Typography {...args} type='p' size='md' className='error-500'>
                - text error 500
            </Typography>
            <br />
            <br />
            <br />
            <Typography {...args} type='heading' size='lg'>
                text default colors :
            </Typography>
            {[
                'default',
                'primary',
                'secondary',
                'tertiary',
                'primary-inverse',
                'secondary-inverse',
                'tertiary-inverse',
                'info',
                'success',
                'warning',
                'danger',
                'link',
                'link-disabled',
            ].map((color) => (
                <Typography type='p' size='md' color={color as TextColors} key={color}>
                    - text {color}
                </Typography>
            ))}
        </div>
    ),
    args: {
        as: 'h1',
        type: 'heading',
    },
};
