import { Meta, StoryObj } from '@storybook/react';
import { FormGroup, Label, RadioButton, FormFeedback } from '@/dataEntry';

export default {
    title: 'Data entry/Radio button',
    component: RadioButton,
    subcomponents: { FormGroup, Label },
} as Meta<typeof RadioButton>;

// Default RadioButton Story
export const Default: StoryObj<typeof RadioButton> = {
    render: (args) => (
        <div style={{ width: '100%' }}>
            <FormGroup>
                <Label>Radio Group</Label>
                <RadioButton text='radio 1' {...args} />
                <RadioButton text='radio 2' {...args} />
                <FormFeedback invalid={true}>Sweet! that name is available</FormFeedback>
            </FormGroup>
        </div>
    ),
    args: {
        name: 'text',
    },
};
