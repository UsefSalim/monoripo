import { CardBody, Card as CardComponent, CardItem, CardSubTitle, CardTitle } from './card';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { BsPlus } from 'react-icons/bs';
import { Button, IconButton } from '@/actions';
import { Row, Col, Container } from '@/grid';
import { ItemLoader } from '@/contentDisplay';

import './card.scss';

export default {
    title: 'Containers/Card',
    component: CardComponent,
    subcomponents: { CardItem, CardBody, CardTitle },
    argTypes: {
        footerButton: { control: false },
        IconButton: { control: false },
        actionButton: { control: false },
        shadow: {
            options: ['sm', 'md', 'lg'],
            control: 'select',
        },
    },
} as Meta<typeof CardComponent>;

export const Default: StoryObj<typeof CardComponent> = {
    render: (args) => (
        <CardComponent {...args}>
            {' '}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid doloribus, numquam quisquam sapiente
            laborum illum omnis iusto. Odio nihil corrupti aut velit dolore vitae veniam quisquam pariatur iure,
            consequatur, ipsum amet cupiditate culpa veritatis excepturi at sequi, quaerat reprehenderit hic temporibus
            nulla ducimus. Esse deleniti voluptates molestiae itaque quisquam, laboriosam debitis omnis dolorem dolore
            asperiores fuga quo amet soluta, nemo perspiciatis quos! Dolores quo culpa amet iusto illum perferendis,
            dolorum temporibus inventore eaque? Repellat porro nisi in inventore! Cum quam inventore molestias omnis
            facere quas consequuntur, quidem quia cumque possimus. Quisquam, cum. Voluptatibus, quod modi accusantium
            minus recusandae perferendis quidem.{' '}
        </CardComponent>
    ),

    args: {
        cardTitle: 'Title',
    },
};

// ----------------------//

export const HeaderIcon: StoryObj<typeof CardComponent> = {
    render: (args) => (
        <Container>
            <Row>
                <Col>
                    <CardComponent
                        IconButton={
                            <IconButton color='initial'>
                                <BsPlus size={20} />
                            </IconButton>
                        }
                        {...args}
                    >
                        Body
                    </CardComponent>
                </Col>
                <Col>
                    <CardComponent
                        IconButton={
                            <IconButton size='sm' color='initial'>
                                <BsPlus size={20} />
                            </IconButton>
                        }
                        {...args}
                    >
                        Body
                    </CardComponent>
                </Col>
            </Row>
        </Container>
    ),
    args: {
        cardTitle: 'Shortcuts',
    },
};

// ----------------------//

export const Action: StoryObj<typeof CardComponent> = {
    render: (args) => (
        <Container>
            <Row>
                <Col>
                    <CardComponent
                        actionButton={
                            <Button color='primary' size='sm' lefticon={<BsPlus size={20} />}>
                                Ghost button
                            </Button>
                        }
                        {...args}
                    >
                        Body
                    </CardComponent>
                </Col>
                <Col>
                    <CardComponent
                        actionButton={
                            <Button color='danger' lefticon={<BsPlus size={20} />}>
                                Ghost button
                            </Button>
                        }
                        {...args}
                    >
                        Body
                    </CardComponent>
                </Col>
            </Row>
        </Container>
    ),

    args: {
        cardTitle: 'Suggestions en attente de validation ',
    },
};

// ----------------------//
export const ViewCardBody: StoryObj<typeof CardComponent> = {
    render: (args) => (
        <CardComponent {...args}>
            <CardBody label='Informations générales'>
                <Container>
                    <Row>
                        <Col>
                            <CardItem label={'Subsection'} loading>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'} loading>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'} loading>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardItem label={'Subsection'} loading>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'} loading>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'} loading>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
            <CardBody label='Informations générales'>
                <Container>
                    <Row>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
        </CardComponent>
    ),
    args: {
        cardTitle: 'Suggestions en attente de validation',
    },
};

export const CardItems: StoryObj<typeof CardComponent> = {
    render: (args) => (
        <CardComponent {...args}>
            <CardSubTitle>SubTitle 1 </CardSubTitle>
            <CardItem label={'Subsection'}>
                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
            </CardItem>
            <CardItem label={'Subsection'}>
                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
            </CardItem>
            <CardSubTitle>SubTitle 1 </CardSubTitle>
            <CardItem label={'Subsection'}>
                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
            </CardItem>
        </CardComponent>
    ),
    args: {
        cardTitle: 'Suggestions en attente de validation',
    },
};
export const CardActionsFooter: StoryObj<typeof CardComponent> = {
    render: (args) => (
        <CardComponent {...args}>
            <CardBody label='Informations générales'>
                <Container>
                    <Row>
                        <Col>
                            <CardItem label={'Subsection'}>
                                <ItemLoader />
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                <ItemLoader />
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                <ItemLoader />
                            </CardItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardItem label={'Subsection'}>
                                <ItemLoader />
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                <ItemLoader />
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                <ItemLoader />
                            </CardItem>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
            <CardBody label='Informations générales'>
                <Container>
                    <Row>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                        <Col>
                            <CardItem label={'Subsection'}>
                                Cette attestation est délivrée à l’intéressée pour servir et valoir ce que de droit.
                            </CardItem>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
        </CardComponent>
    ),
    args: {
        cardTitle: 'Suggestions en attente de validation',
        footerButton: (
            <>
                <Button>Save</Button>
                <Button color='danger'>Delete</Button>
            </>
        ),
    },
};
