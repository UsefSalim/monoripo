import { TraceabilityCard } from './traceabilityCard';
import { Meta, StoryObj } from '@storybook/react';
import { HiOutlineCalendar } from 'react-icons/hi';
import { Col, Container, Row } from '@/grid';
export default {
    title: 'Containers/TraceabilityCard',
    component: TraceabilityCard,
    argTypes: {
        HeaderTitle: {
            control: 'text',
        },
        gender: {
            options: ['male', 'female'],
            control: 'select',
        },
        HeaderIcon: { control: false },
        data: { control: false },
        creation: { control: false },
        loading: { control: 'boolean' },
    },
} as Meta<typeof TraceabilityCard>;

export const Default: StoryObj<typeof TraceabilityCard> = {
    render: (args) => <TraceabilityCard {...args}></TraceabilityCard>,
    args: {
        gender: 'male',
        data: [
            {
                icon: <HiOutlineCalendar size={16} color='#BE3610'></HiOutlineCalendar>,
                title: 'Créée le :',
                value: <p>2022-11-11 11:11:11 par user</p>,
            },
            {
                icon: <HiOutlineCalendar size={16} color='#BE3610'></HiOutlineCalendar>,
                title: 'Mise à jour le :',
                value: <p>2022-11-11 11:11:11 par user</p>,
            },
        ],
    },
};
export const Gender: StoryObj<typeof TraceabilityCard> = {
    render: (args) => (
        <Container>
            <Row>
                <Col>
                    <TraceabilityCard {...args} gender='male'></TraceabilityCard>
                </Col>
                <Col>
                    <TraceabilityCard {...args} gender='female'></TraceabilityCard>
                </Col>
            </Row>
        </Container>
    ),
    args: {
        HeaderTitle: 'Informations de traçabilité',
        creation: {
            createdAt: '2022-11-11 11:11:11 ',
            updatedAt: '2022-11-11 11:11:11 ',
            createdBy: 'User',
            updatedBy: 'User',
        },
        loading: false,
    },
};
export const CustomData: StoryObj<typeof TraceabilityCard> = {
    render: (args) => (
        <Container>
            <Row>
                <Col>
                    <TraceabilityCard {...args} gender='male'></TraceabilityCard>
                </Col>
            </Row>
        </Container>
    ),
    args: {
        HeaderTitle: 'Informations de traçabilité',
        data: [
            {
                icon: <HiOutlineCalendar size={16} color='#BE3610'></HiOutlineCalendar>,
                title: 'Custom tracability',
                value: <p>2022-11-11 11:11:11 par user</p>,
            },
        ],
    },
};
export const Loading: StoryObj<typeof TraceabilityCard> = {
    render: (args) => (
        <Container>
            <Row>
                <Col>
                    <TraceabilityCard {...args} gender='male'></TraceabilityCard>
                </Col>
            </Row>
        </Container>
    ),
    args: {
        HeaderTitle: 'Informations de traçabilité',
        data: [
            {
                icon: <HiOutlineCalendar size={16} color='#BE3610'></HiOutlineCalendar>,
                title: 'Custom tracability',
                value: <p>2022-11-11 11:11:11 par user</p>,
            },
            {
                icon: <HiOutlineCalendar size={16} color='#BE3610'></HiOutlineCalendar>,
                title: 'Custom tracability',
                value: <p>2022-11-11 11:11:11 par user</p>,
            },
        ],
        loading: true,
    },
};
