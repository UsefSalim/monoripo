import { FormGroup, Label, FormFeedback, AsyncSelect } from '@/dataEntry';
import { Meta } from '@storybook/react';

export default {
    title: 'Data entry/Async Select',
    component: AsyncSelect,
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: 'select',
        },
        value: { control: false },
        defaultValue: { control: false },
        ref: { control: false },
    },
    subcomponents: { FormFeedback, FormGroup, Label },
    parameters: {
        docs: {
            description: {
                component:
                    '❌ **Deprecated**: Use `inputselect` with async `props` instead. This component will be removed in a future release.',
            },
        },
    },
} as Meta<typeof AsyncSelect>;
