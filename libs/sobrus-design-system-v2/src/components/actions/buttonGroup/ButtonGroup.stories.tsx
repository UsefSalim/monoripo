import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { ButtonGroup, Button, IconButton } from '@/actions';
import { HiOutlineFingerPrint } from 'react-icons/hi';
/**
 * The `ButtonGroup` component allows you to group multiple buttons together as immediate children.
 * It provides support for all standard HTML `div` element attributes.
 *
 * This component ensures that buttons in the group are visually and functionally grouped.
 * If the `disabled` prop is passed, all buttons inside the group become disabled automatically.
 *
 * - Supports all standard `HTMLAttributes<HTMLDivElement>` via the `props`.
 *
 * ### Usage:
 *
 * Here’s an example of how to use the `ButtonGroup` component:
 *
 * ```jsx
 * import React, { useState } from 'react';
 * import { ButtonGroup, Button } from "@sobrus-com/sobrus-design-system-v2/actions";
 * import { HiOutlineFingerPrint } from 'react-icons/hi';
 *
 * const Example = () => {
 *   const [current, setCurrent] = useState(1);
 *
 *   return (
 *     <ButtonGroup>
 *       <Button
 *         loading
 *         color={current === 1 ? 'primary' : 'ghost'}
 *         onClick={() => setCurrent(1)}
 *       >
 *         Button 1
 *       </Button>
 *       <Button
 *         lefticon={<HiOutlineFingerPrint />}
 *         color={current === 2 ? 'primary' : 'ghost'}
 *         onClick={() => setCurrent(2)}
 *       >
 *         Button 2
 *       </Button>
 *       <Button
 *         disabled
 *         color={current === 3 ? 'danger' : 'danger-ghost'}
 *         onClick={() => setCurrent(3)}
 *       >
 *         Button 3
 *       </Button>
 *     </ButtonGroup>
 *   );
 * };
 * ```
 *
 * In this example, buttons are grouped together, and the `ButtonGroup` ensures they appear as part of a single unit.
 */
export default {
    title: 'Actions/ButtonGroup',
    component: ButtonGroup,
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md'],
        },
        disabled: {
            control: 'boolean',
        },
    },
    subcomponents: { Button },
    tags: ['autodocs'],
} as Meta<typeof ButtonGroup>;

export const Default: StoryObj<typeof ButtonGroup> = {
    render: (args) => {
        const [current, setCurrent] = useState(1);

        return (
            <ButtonGroup {...args}>
                <Button
                    lefticon={<HiOutlineFingerPrint />}
                    color={current === 1 ? 'primary' : 'ghost'}
                    onClick={() => setCurrent(1)}
                    righticon={<HiOutlineFingerPrint />}
                >
                    Button 1
                </Button>
                <Button
                    lefticon={<HiOutlineFingerPrint />}
                    color={current === 2 ? 'primary' : 'ghost'}
                    onClick={() => setCurrent(2)}
                    righticon={<HiOutlineFingerPrint />}
                >
                    Button 2
                </Button>
                <Button
                    lefticon={<HiOutlineFingerPrint />}
                    color={current === 3 ? 'danger' : 'danger-ghost'}
                    onClick={() => setCurrent(3)}
                    righticon={<HiOutlineFingerPrint />}
                >
                    Button 3
                </Button>
            </ButtonGroup>
        );
    },

    args: {
        size: 'md',
        disabled: false,
    },
};

export const Sizes: StoryObj<typeof ButtonGroup> = {
    render: (args) => {
        const [current, setCurrent] = useState(1);

        return (
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <ButtonGroup size='sm' {...args}>
                    <Button color={current === 1 ? 'primary' : 'ghost'} onClick={() => setCurrent(1)}>
                        Small Button
                    </Button>
                    <Button color={current === 2 ? 'primary' : 'ghost'} onClick={() => setCurrent(2)}>
                        Small Button
                    </Button>
                </ButtonGroup>
                <ButtonGroup {...args}>
                    <Button size='md' color={current === 1 ? 'primary' : 'ghost'} onClick={() => setCurrent(1)}>
                        Small Button
                    </Button>
                    <Button size='md' color={current === 2 ? 'primary' : 'ghost'} onClick={() => setCurrent(2)}>
                        Small Button
                    </Button>
                </ButtonGroup>
            </div>
        );
    },

    args: {
        disabled: false,
    },
};

export const Disabled: StoryObj<typeof ButtonGroup> = {
    render: (args) => (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <ButtonGroup disabled>
                <Button size='sm' color='ghost'>
                    Disabled Button 1
                </Button>
                <Button size='sm' color='primary'>
                    Disabled Button 2
                </Button>
                <Button size='sm' color='danger'>
                    Disabled Button 3
                </Button>
            </ButtonGroup>
            <ButtonGroup size='sm'>
                <Button color='ghost' disabled>
                    Disabled Button 1
                </Button>
                <Button color='primary'>Disabled Button 2</Button>
                <Button color='danger' disabled>
                    Disabled Button 3
                </Button>
            </ButtonGroup>
        </div>
    ),

    args: {
        disabled: true,
    },
};

export const WithIconButton: StoryObj<typeof ButtonGroup> = {
    render: (args) => (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <ButtonGroup>
                <IconButton size='sm' color='secondary'>
                    <HiOutlineFingerPrint />
                </IconButton>
                <IconButton size='sm' color='secondary'>
                    <HiOutlineFingerPrint />
                </IconButton>
                <IconButton size='sm' color='secondary'>
                    <HiOutlineFingerPrint />
                </IconButton>
            </ButtonGroup>
            <ButtonGroup size='sm'>
                <IconButton color='secondary'>
                    <HiOutlineFingerPrint />
                </IconButton>
                <IconButton color='secondary'>
                    <HiOutlineFingerPrint />
                </IconButton>
                <IconButton color='secondary'>
                    <HiOutlineFingerPrint />
                </IconButton>
            </ButtonGroup>
            <ButtonGroup disabled>
                <IconButton size='sm' color='secondary'>
                    <HiOutlineFingerPrint />
                </IconButton>
                <IconButton size='sm' color='secondary'>
                    <HiOutlineFingerPrint />
                </IconButton>
                <IconButton size='sm' color='secondary'>
                    <HiOutlineFingerPrint />
                </IconButton>
            </ButtonGroup>
        </div>
    ),

    args: {
        disabled: true,
    },
};
