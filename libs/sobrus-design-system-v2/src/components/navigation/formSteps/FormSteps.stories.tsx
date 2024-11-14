import { Meta, StoryObj } from '@storybook/react';
import { FormStep, FormSteps } from '@/navigation';

export default {
    title: 'Navigation/Wizard',
    component: FormSteps,
    subcomponents: { FormStep },
} as Meta<typeof FormSteps>;

// Multi-Step Form Story
export const MultiFormSteps: StoryObj<typeof FormSteps> = {
    render: (args) => (
        <div style={{ width: '100%' }}>
            <FormSteps {...args}>
                <FormStep text='Informations principales' number={1} active succes />
                <FormStep text="Régime d'affiliation" number={2} active />
                <FormStep text='Informations médicales' number={3} last />
            </FormSteps>
        </div>
    ),
    args: {},
};
