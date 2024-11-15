import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { DashedButton } from '@/actions';
import { HiOutlinePlus, HiOutlineStar } from 'react-icons/hi';

/**
 * The `DashedButton` component is a customizable button that allows users to take actions and make choices.
 * It supports all standard HTMLButtonElement and ButtonHTMLAttributes props.
 * The button can display an icon, and it has an optional square shape.
 *
 * ### Usage:
 *
 * Here's a basic example of how to use the `DashedButton` component:
 *
 * ```jsx
 *
 * import { DashedButton } from '@sobrus-com/sobrus-design-system';
 *
 * const Example = () => {
 *   return (
 *     <div>
 *       <DashedButton>Sobrus Dashed Button</DashedButton>
 *       <DashedButton square icon={<HiOutlinePlus size={20} color="#4CAACE" />} />
 *     </div>
 *   );
 * };
 * ```
 *
 * In this example, `DashedButton` is used with and without the square prop, showing both the default and square versions.
 */
export default {
    title: 'Actions/DashedButton',
    component: DashedButton,
    argTypes: {
        square: { control: 'boolean' },
        disabled: { control: 'boolean' },
        icon: { control: false },
    },
} as Meta<typeof DashedButton>;

export const Default: StoryObj<typeof DashedButton> = {
    render: (args) => <DashedButton {...args}>Sobrus Dashed Button</DashedButton>,

    args: {
        square: false,
        disabled: false,
        icon: <HiOutlinePlus size={20} color='#4CAACE' />,
    },
};

export const Square: StoryObj<typeof DashedButton> = {
    render: (args) => <DashedButton {...args} icon={<HiOutlinePlus size={20} color='#4CAACE' />} />,

    args: {
        square: true,
        disabled: false,
        icon: <HiOutlineStar size={20} color='#FF0000' />,
    },
};

export const Disabled: StoryObj<typeof DashedButton> = {
    render: (args) => (
        <DashedButton {...args} disabled>
            Disabled Button
        </DashedButton>
    ),

    args: {
        square: false,
        disabled: true,
        icon: <HiOutlineStar size={20} color='#FF0000' />,
    },
};
