import { Col, Container, Row } from '@/grid';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Grid/Grid',
    component: Container,
    subcomponents: { Row, Col, Container },
} as Meta<typeof Container>;

// Default Grid Layout Story
export const GridLayout: StoryObj<typeof Container> = {
    render: () => (
        <Container>
            <Row>
                <Col className='bg'>.col</Col>
            </Row>
            <Row>
                <Col className='bg'>.col</Col>
                <Col className='bg'>.col</Col>
                <Col className='bg'>.col</Col>
                <Col className='bg'>.col</Col>
            </Row>
            <Row>
                <Col className='bg' xs='3'>
                    .col-3
                </Col>
                <Col className='bg' xs='auto'>
                    .col-auto - variable width content
                </Col>
                <Col className='bg' xs='3'>
                    .col-3
                </Col>
            </Row>
            <Row>
                <Col className='bg' xs='6'>
                    .col-6
                </Col>
                <Col className='bg' xs='6'>
                    .col-6
                </Col>
            </Row>
            <Row>
                <Col className='bg' sm='4' xs='6'>
                    .col-6 .col-sm-4
                </Col>
                <Col className='bg' sm='4' xs='6'>
                    .col-6 .col-sm-4
                </Col>
                <Col className='bg' sm='4'>
                    .col-sm-4
                </Col>
            </Row>
            <Row>
                <Col
                    className='bg'
                    sm={{
                        offset: 1,
                        order: 2,
                        size: 6,
                    }}
                >
                    .col-sm-6 .order-sm-2 .offset-sm-1
                </Col>
            </Row>
            <Row>
                <Col
                    className='bg'
                    md={{
                        offset: 3,
                        size: 6,
                    }}
                    sm='12'
                >
                    .col-sm-12 .col-md-6 .offset-md-3
                </Col>
            </Row>
            <Row>
                <Col
                    className='bg'
                    sm={{
                        offset: 1,
                        size: 'auto',
                    }}
                >
                    .col-sm-auto .offset-sm-1
                </Col>
                <Col
                    className='bg'
                    sm={{
                        offset: 1,
                        size: 'auto',
                    }}
                >
                    .col-sm-auto .offset-sm-1
                </Col>
            </Row>
        </Container>
    ),
    args: {},
};

// Grid Row and Columns Story
export const GridRowCols: StoryObj<typeof Container> = {
    render: () => (
        <Container>
            <h6>xs=“2“</h6>
            <Row xs='2'>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
            </Row>
            <h6>xs=“3“</h6>
            <Row xs='3'>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
            </Row>
            <h6>xs=“4“</h6>
            <Row xs='4'>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
            </Row>
            <h6>xs=“4“</h6>
            <Row xs='4'>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
                <Col className='bg' xs='6'>
                    xs=“6“
                </Col>
                <Col className='bg'>Column</Col>
            </Row>
            <h6>xs=“1“ sm=“2“ md=“4“</h6>
            <Row md='4' sm='2' xs='1'>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
                <Col className='bg'>Column</Col>
            </Row>
        </Container>
    ),
    args: {},
};
