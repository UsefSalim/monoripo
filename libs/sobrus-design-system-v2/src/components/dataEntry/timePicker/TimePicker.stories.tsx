import React, { useState } from 'react';
import { TimePicker, FormGroup, Label, FormFeedback } from '@/dataEntry';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Data entry/TimePicker',
    component: TimePicker,
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: 'select',
        },
    },
    subcomponents: { FormFeedback, FormGroup, Label },
} as Meta<typeof TimePicker>;

// Default TimePicker Story
export const TimePickerDefault: StoryObj<typeof TimePicker> = {
    render: (args) => {
        const [value, setValue] = useState<string | null>('10:00');
        return (
            <FormGroup>
                <Label htmlFor='exampleText'>Médecin traitant</Label>
                <TimePicker {...args} value={value} onChange={setValue} />
                <FormFeedback>Sweet! that name is available</FormFeedback>
            </FormGroup>
        );
    },
    args: {},
};
