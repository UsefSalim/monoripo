import { Meta, StoryObj } from '@storybook/react';
import { CheckBox, FormGroup, FormFeedback } from '@/dataEntry';
/**
 *
 * ###Usage
 *
 *
 * the checkbox component accepte all InputHTMLAttributes properties
 *
 *```JSX
 *
 * import {CheckBox} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *           <CheckBox
 *                id="checkbox"
 *              name="checkbox"
 *        />
 *    );
 * }
 * ```
 *
 */
export default {
    title: 'Data entry/Checkbox',
    component: CheckBox,
    subcomponents: { FormFeedback, FormGroup },
} as Meta<typeof CheckBox>;

// Default CheckBox Story
export const Default: StoryObj<typeof CheckBox> = {
    render: (args) => (
        <FormGroup>
            <CheckBox {...args} />
            <FormFeedback invalid={args.invalid}>Sweet! that name is available</FormFeedback>
        </FormGroup>
    ),
    args: {
        checked: false,
        invalid: false,
        indeterminate: false,
        disabled: false,
        label: 'label',
        className: '',
        style: {},
        name: 'checkbox',
    },
};
