import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ColorPicker, FormGroup, Label, FormFeedback } from '@/dataEntry';

export default {
    title: 'Data entry/Colorpicker',
    component: ColorPicker,
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: 'select',
        },
    },
    subcomponents: { FormFeedback, FormGroup, Label },
} as Meta<typeof ColorPicker>;

// Default ColorPicker Story
export const Default: StoryObj<typeof ColorPicker> = {
    render: (args) => {
        const [value, setValue] = useState('');

        return (
            <FormGroup>
                <Label htmlFor='exampleSelect'>Color Picker</Label>
                <ColorPicker {...args} value={value} />
                <FormFeedback display>Sweet! that name is available</FormFeedback>
            </FormGroup>
        );
    },
};
