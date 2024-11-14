import { StatisticalCard } from '@/exemple';
import { Meta } from '@storybook/react';
import primaryImg from '@/assets/drugs.png';
export default {
    title: 'Exemple/StatisticalCard',
    component: StatisticalCard,
    argTypes: {
        icon: { control: false },
        src: { control: false },
    },
} as Meta<typeof StatisticalCard>;

export const StatisticalCardDefault = {
    args: {
        number: 150,
        title: '150',
        description: 'Médicaments et produits de Para référencés.',
        descriptionColor: '#000000',
        numberColor: '#000000',
        bgColor: 'rgba(170, 240, 233, 0.563)',
        style: {},
        className: '',
        src: primaryImg,
    },
};
