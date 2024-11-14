import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, BreadcrumbActions, BreadcrumbContainer } from '@/navigation';
import { Button } from '@/actions';

export default {
    title: 'Navigation/Breadcrumbs',
    component: Breadcrumb,
} as Meta<typeof Breadcrumb>;

// Breadcrumb with Backward Navigation Story
export const BreadcrumbBackward: StoryObj<typeof Breadcrumb> = {
    render: (args) => (
        <BreadcrumbContainer>
            <Breadcrumb {...args} />
            <BreadcrumbActions>
                <Button>test</Button>
                <Button>test</Button>
                <Button>test</Button>
                <Button>test</Button>
                <Button>test</Button>
            </BreadcrumbActions>
        </BreadcrumbContainer>
    ),
    args: {
        title: 'Test Title',
        subTitle: 'Test SubTitle',
        isBackward: true,
        wrap: false,
    },
};
