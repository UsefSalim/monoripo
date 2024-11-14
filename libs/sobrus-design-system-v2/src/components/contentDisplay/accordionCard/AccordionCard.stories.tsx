import { AccordionCard } from './accordionCard';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Button } from '@/actions';
import { BsPlus } from 'react-icons/bs';
/**
 * An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface
 *
 *
 * ###Usage
 *
 *```JSX
 *
 * import { AccordionCard } from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *      <AccordionCard
            headerTitle="Accordions card"
            onClickOpenBtn={() => {}}
            rightExtraComponent={<Button color="secondary" lefticon={<BsPlus size={18} />}>Ajouter</Button>}
            tagNum={20}
        >
            <p>
                Accordions card desc
            </p>
        </AccordionCard>
 *    );
 * }
 * ```
 *
 */

//
export default {
    title: 'Content display/AccordionCard',
    component: AccordionCard,
    argTypes: {
        size: {
            options: ['', 'sm', 'md', 'lg'],
            control: 'select',
        },
        rightExtraComponent: { control: false },
        children: { control: false },
    },
} as Meta<typeof AccordionCard>;

// Default Accordion
export const Accordion: StoryObj<typeof AccordionCard> = {
    render: (args) => (
        <AccordionCard {...args}>
            <p>Accordions card desc</p>
        </AccordionCard>
    ),
    args: {
        headerTitle: 'Accordions card',
        tag: '2 Antécédents',
        style: {},
        className: '',
    },
};

// Accordion with Tag Number
export const AccordionTagNumber: StoryObj<typeof AccordionCard> = {
    render: (args) => (
        <AccordionCard {...args}>
            <p>Accordions card desc</p>
        </AccordionCard>
    ),
    args: {
        headerTitle: 'Accordions card',
        tag: '2 Antécédents',
    },
};

// Accordion with Action Button
export const AccordionwithAction: StoryObj<typeof AccordionCard> = {
    render: (args) => (
        <AccordionCard {...args}>
            <p>Accordions card desc</p>
        </AccordionCard>
    ),
    args: {
        headerTitle: 'Accordions card',
        rightExtraComponent: (
            <Button onClick={(e) => e?.stopPropagation()} size='sm' color='secondary' lefticon={<BsPlus size={18} />}>
                Ajouter
            </Button>
        ),
        tag: '2 Antécédents',
    },
};

// Accordion with Big Content and Icon
export const AccordionBigContentbigicons: StoryObj<typeof AccordionCard> = {
    render: (args) => (
        <AccordionCard {...args}>
            {[...Array(40)].map((_, key) => (
                <p key={key}>Accordions card desc</p>
            ))}
        </AccordionCard>
    ),
    args: {
        headerTitle: 'Accordions card',
        rightExtraComponent: (
            <Button onClick={(e) => e?.stopPropagation()} color='secondary' size='md' righticon={<BsPlus size={18} />}>
                Ajouter
            </Button>
        ),
        tag: '2 Antécédents',
        size: 'md',
    },
};
