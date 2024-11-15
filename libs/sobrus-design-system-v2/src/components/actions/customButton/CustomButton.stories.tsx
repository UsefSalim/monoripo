import { StoryObj, Meta } from '@storybook/react';
import { CustomButton } from '@/actions';
import { AiOutlinePushpin } from 'react-icons/ai';
import { Card } from '@/containers';
import { Col, Container, Row } from '@/grid';
import { Tag } from '@/contentDisplay';
/**
 * The `CustomButton` component is a versatile button that combines an icon, label, and action description into a single UI element.
 * It supports all standard HTMLButtonElement and ButtonHTMLAttributes props, making it customizable and easy to use in forms and interactive components.
 * ### Usage:
 *
 * Here's a basic example of how to use the `CustomButton` component:
 *
 * ```jsx
 *
 * import { CustomButton } from '@sobrus-com/sobrus-design-system-v2';
 * import { AiOutlinePushpin, AiOutlineStar, AiOutlineSend, AiOutlineEye } from 'react-icons/ai';
 *
 * const Example = () => {
 *   return (
 *     <div>
 *       <CustomButton label="Create Order" bgColor="#fff8eb" icon={<AiOutlinePushpin size={24} color="#eaa309" />} />
 *       <CustomButton label="Star Item" bgColor="rgba(85,172,237,.08)" icon={<AiOutlineStar size={24} color="#9DC9F3" />} />
 *       <CustomButton label="Send Email" bgColor="#f0fcfd" icon={<AiOutlineSend size={24} color="#08829F" />} />
 *       <CustomButton label="View" disabled icon={<AiOutlineEye size={24} />} />
 *     </div>
 *   );
 * };
 * ```
 *
 * In this example, `CustomButton` is used with different icons and colors to create various actionable buttons.
 */

export default {
    title: 'Actions/CustomButton',
    component: CustomButton,
    argTypes: {
        bgColor: { control: 'color' },
        size: {
            control: 'select',
            options: ['sm', 'md'],
        },
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        icon: { control: false },
        actionDescripton: { control: 'text' },
    },
} as Meta<typeof CustomButton>;

export const Default: StoryObj<typeof CustomButton> = {
    render: (args) => (
        <Container>
            <Row>
                <Col>
                    {' '}
                    <Card>
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#e74c3c' />} />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#e74c3c' />} />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#e74c3c' />} />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#e74c3c' />} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#e74c3c' />} />
                    </Card>
                </Col>
            </Row>
        </Container>
    ),

    args: {
        bgColor: '#f3d7d2',
        size: 'md',
        disabled: false,
        label: 'Default Button',
    },
};

export const Sizes: StoryObj<typeof CustomButton> = {
    render: (args) => (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} size='sm' />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} size='sm' />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} size='sm' />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} size='sm' />
                    </Card>
                </Col>
            </Row>
        </Container>
    ),

    args: {
        bgColor: '#d8e9f8',
        size: 'md',
        disabled: false,
        label: 'Default Button',
    },
};

export const Disabled: StoryObj<typeof CustomButton> = {
    render: (args) => (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} />
                        <CustomButton disabled {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} />
                        <CustomButton disabled {...args} icon={<AiOutlinePushpin size={24} color='#55aced' />} />
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    ),

    args: {
        bgColor: '#d8e9f8',
        color: '#55aced',
        size: 'md',
        label: 'Default Button',
    },
};

export const WithActionDescription: StoryObj<typeof CustomButton> = {
    render: (args) => (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#1bbaac' />} />
                        <CustomButton disabled {...args} icon={<AiOutlinePushpin size={24} color='#1bbaac' />} />
                        <CustomButton {...args} icon={<AiOutlinePushpin size={24} color='#1bbaac' />} />
                        <CustomButton disabled {...args} icon={<AiOutlinePushpin size={24} color='#1bbaac' />} />
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    ),

    args: {
        bgColor: '#d4efec',
        size: 'md',
        disabled: false,
        label: 'Default Button',
        actionDescripton: (
            <Tag size='xs' bgColor='#d4efec' color='#1bbaac'>
                12
            </Tag>
        ),
    },
};
