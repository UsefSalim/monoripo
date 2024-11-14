import { DoctorCard } from '@/exemple';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from '@/actions';

export default {
    title: 'Exemple/DoctorCard',
    component: DoctorCard,
} as Meta<typeof DoctorCard>;

export const TraceabilityCardDefault = {
    args: {
        doctorName: 'Dr. Ridouane Tansouft',
        children: 'Médecin généraliste',
        action: <Button>Action Button</Button>,
    },
};
