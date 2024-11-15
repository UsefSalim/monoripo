import { FormGroup, Label, FormFeedback, Input } from '@/dataEntry';

import { Meta, StoryObj } from '@storybook/react';
/**
 * Input and textarea
 *
 * ###Usage
 *
 *```JSX
 *
 * import {FormGroup , Label, Input, FormFeedback} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *         <FormGroup>
 *           <Label for="exampleText">Médecin traitant</Label>
 *             <Input id="test" name="test" type="text" />
 *             <FormFeedback invalid={true}>Sweet! that name is available</FormFeedback>
 *           </FormGroup>
 *    );
 * }
 * ```
 *
 */
export default {
    title: 'Data entry/Input',
    component: Input,
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: 'select',
        },
        type: {
            options: ['text', 'number', 'password', 'email', 'hidden', 'tel', 'textarea'],
            control: 'select',
        },
    },
    subcomponents: { FormFeedback, FormGroup, Label },
} as Meta<typeof Input>;

// Default Input Story
export const Default: StoryObj<typeof Input> = {
    render: (args) => (
        <div style={{ width: '100%' }}>
            <FormGroup>
                <Label htmlFor='exampleText'>Médecin traitant</Label>
                <Input {...args} />
                <FormFeedback invalid={args.invalid}>Sweet! that name is available</FormFeedback>
            </FormGroup>
        </div>
    ),
    args: {
        invalid: false,
        type: 'text',
        placeholder: 'Nom du produit ici ..',
        maxChar: 20,
        disabled: false,
        counter: false,
    },
};
