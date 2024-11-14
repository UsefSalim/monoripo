import { useState } from 'react';
import { FormGroup, Label, FormFeedback, DatePicker } from '@/dataEntry';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Data entry/Date picker',
    component: DatePicker,
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: 'select',
        },
    },
    subcomponents: { FormFeedback, FormGroup, Label },
} as Meta<typeof DatePicker>;

// Default DatePicker Story
export const Default: StoryObj<typeof DatePicker> = {
    render: (args) => {
        const [startDate, setStartDate] = useState<Date>(new Date());

        return (
            <div style={{ width: '100%' }}>
                <FormGroup>
                    <Label htmlFor='exampleText'>Médecin traitant</Label>
                    <DatePicker {...args} selected={startDate} onChange={(update: any) => setStartDate(update)} />
                    <FormFeedback invalid={args.invalid}>Sweet! that name is available</FormFeedback>
                </FormGroup>
            </div>
        );
    },
    args: {
        size: 'md',
        showYearDropdown: false,
        showMonthDropdown: false,
        useShortMonthInDropdown: false,
        placeholderText: 'Nom du produit ici ..',
        maxDate: new Date(),
        minDate: new Date(2023, 0, 25, 12, 30, 15),
        showTimeSelect: false,
        timeFormat: 'HH:mm',
        timeIntervals: 15,
        selectsStart: false,
        inline: false,
        dateFormat: 'yyyy-MM-dd',
        invalid: false,
        disabled: false,
        closeOnScroll: false,
        todayButton: 'Today',
        name: 'datepicker',
    },
};
