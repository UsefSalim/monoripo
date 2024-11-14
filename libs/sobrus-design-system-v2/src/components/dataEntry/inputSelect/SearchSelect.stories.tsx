import React, { useState } from 'react';
import { FormGroup, Label, FormFeedback, InputSelect } from '@/dataEntry';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Data entry/Input Select',
    component: InputSelect,
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: 'select',
        },
        onChange: { control: false },
    },
    subcomponents: { FormFeedback, FormGroup, Label },
} as Meta<typeof InputSelect>;

// Default InputSelect Story
export const Default: StoryObj<typeof InputSelect> = {
    render: (args) => {
        const [value, setValue] = useState({ value: 'value11', label: 'label11', tag: 'tag11' });
        const newArray = Array.from({ length: 100 }, (_, i) => ({
            value: `value${i}`,
            label: `label${i}`,
            tag: `tag${i}`,
        }));

        return (
            <div style={{ width: '100%', height: 800 }}>
                <FormGroup>
                    <Label htmlFor='exampleSelect'>Search select</Label>
                    <InputSelect
                        {...args}
                        options={newArray}
                        onChange={(e) => {
                            console.log(e);
                            // e && setValue(e);
                        }}
                        value={value}
                    />
                    <FormFeedback invalid={args.invalid}>Sweet! that name is available</FormFeedback>
                </FormGroup>
            </div>
        );
    },
    args: {
        placeholder: 'test',
        isClearable: true,
        isSearchable: true,
        isMulti: false,
        name: 'selectInput',
    },
};
