import { Meta, StoryObj } from '@storybook/react';
import { TooltipMenu, TooltipMenuItem } from './tooltipMenu';
import { Col, Container, Row } from '@/grid';
import { Button, CustomButton, IconButton } from '@/actions';
import { Avatar, Tag } from '@/contentDisplay';
import { Card } from '@/containers';
import { AiOutlinePushpin } from 'react-icons/ai';
import { BsPlus, BsPrinter } from 'react-icons/bs';
export default {
    title: 'Content display/Tooltip Menu',
    component: TooltipMenu,
    subcomponents: { TooltipMenuItem },
} as Meta<typeof TooltipMenu>;

export const Default: StoryObj<typeof TooltipMenu> = {
    render: (args) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '100px 0' }}>
                <TooltipMenu>
                    <TooltipMenuItem type='add' />
                    <TooltipMenuItem type='edit' />
                    <TooltipMenuItem type='delete' />
                    <TooltipMenuItem type='download' />
                    <TooltipMenuItem type='print' />
                    <TooltipMenuItem type='view' />
                </TooltipMenu>
            </div>
        );
    },
};
export const Sizes: StoryObj<typeof TooltipMenu> = {
    render: (args) => {
        return (
            <Container>
                <Row>
                    <Col>
                        <TooltipMenu position='right top'>
                            <TooltipMenuItem type='add' />
                            <TooltipMenuItem type='edit' />
                            <TooltipMenuItem type='delete' />
                            <TooltipMenuItem type='download' />
                            <TooltipMenuItem type='print' />
                            <TooltipMenuItem type='view' />
                        </TooltipMenu>
                    </Col>
                    <Col>
                        {' '}
                        <TooltipMenu size='sm' position='right top'>
                            <TooltipMenuItem type='add' />
                            <TooltipMenuItem type='edit' />
                            <TooltipMenuItem type='delete' />
                            <TooltipMenuItem type='download' />
                            <TooltipMenuItem type='print' />
                            <TooltipMenuItem type='view' />
                        </TooltipMenu>
                    </Col>
                </Row>
            </Container>
        );
    },
};
export const Trigger: StoryObj<typeof TooltipMenu> = {
    render: (args) => {
        return (
            <Container>
                <Row>
                    <Col>
                        <TooltipMenu
                            trigger={
                                <Tag minWidth={100} bgColor='#F0EFF4' textColor='#5D4BA7'>
                                    Status
                                </Tag>
                            }
                            position='bottom left'
                        >
                            <TooltipMenuItem type='print' />
                            <TooltipMenuItem type='view' />
                        </TooltipMenu>
                    </Col>
                    <Col>
                        <TooltipMenu trigger={<Button color='secondary'>Actions</Button>} position='bottom left'>
                            <TooltipMenuItem type='add' />
                            <TooltipMenuItem type='edit' />
                            <TooltipMenuItem type='delete' />
                            <TooltipMenuItem type='download' />
                            <TooltipMenuItem type='print' />
                            <TooltipMenuItem type='view' />
                        </TooltipMenu>
                    </Col>
                </Row>
            </Container>
        );
    },
};
export const Arrow: StoryObj<typeof TooltipMenu> = {
    render: (args) => {
        return (
            <Container>
                <Row>
                    <Col>
                        <TooltipMenu arrow position='right top'>
                            <TooltipMenuItem type='add' />
                            <TooltipMenuItem type='edit' />
                            <TooltipMenuItem type='delete' />
                            <TooltipMenuItem type='download' />
                            <TooltipMenuItem type='print' />
                            <TooltipMenuItem type='view' />
                        </TooltipMenu>
                    </Col>
                    <Col>
                        <TooltipMenu position='right top'>
                            <TooltipMenuItem type='add' />
                            <TooltipMenuItem type='edit' />
                            <TooltipMenuItem type='delete' />
                            <TooltipMenuItem type='download' />
                            <TooltipMenuItem type='print' />
                            <TooltipMenuItem type='view' />
                        </TooltipMenu>
                    </Col>
                </Row>
            </Container>
        );
    },
};
export const Custom: StoryObj<typeof TooltipMenu> = {
    render: (args) => {
        return (
            <Container>
                <Row>
                    <Col>
                        <TooltipMenu position='bottom left'>
                            <TooltipMenuItem>
                                <Card
                                    cardTitle='title Card'
                                    actionButton={
                                        <Button color='primary' size='sm' lefticon={<BsPlus size={20} />}>
                                            Ghost button
                                        </Button>
                                    }
                                    footerButton={
                                        <>
                                            <Button size='sm'>Save</Button>
                                            <Button size='sm' color='danger'>
                                                Delete
                                            </Button>
                                        </>
                                    }
                                >
                                    <CustomButton
                                        icon={<AiOutlinePushpin size={24} color='#e74c3c' />}
                                        {...{
                                            bgColor: '#f3d7d2',
                                            size: 'sm',
                                            disabled: false,
                                            label: 'Default Button',
                                        }}
                                    />
                                    <CustomButton
                                        icon={<AiOutlinePushpin size={24} color='#e74c3c' />}
                                        {...{
                                            bgColor: '#f3d7d2',
                                            size: 'sm',
                                            disabled: false,
                                            label: 'Default Button',
                                        }}
                                    />
                                </Card>
                            </TooltipMenuItem>
                        </TooltipMenu>
                    </Col>
                    <Col>
                        <TooltipMenu trigger={<Button color='secondary'>Print</Button>} position='bottom right'>
                            <TooltipMenuItem icon={<BsPrinter />} label='Generate Receipt' />
                            <TooltipMenuItem icon={<BsPrinter />} label='Generate PDF' />
                            <TooltipMenuItem icon={<BsPrinter />} label='Download Delivery Note' />
                            <TooltipMenuItem icon={<BsPrinter />} label='Print' />
                        </TooltipMenu>
                    </Col>
                </Row>
            </Container>
        );
    },
};
