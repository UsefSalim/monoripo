import { Tooltip } from './tooltip';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/actions';

export default {
    title: 'Feedbacks/Tooltip',
    component: Tooltip,
    argTypes: {
        place: {
            options: [
                'top',
                'top-start',
                'top-end',
                'right',
                'right-start',
                'right-end',
                'bottom',
                'bottom-start',
                'bottom-end',
                'left',
                'left-start',
                'left-end',
            ],
            control: 'select',
        },
    },
} as Meta<typeof Tooltip>;

// Default Tooltip Story
export const TooltipDefault: StoryObj<typeof Tooltip> = {
    render: (args) => (
        <div style={{ height: 300, display: 'flex', alignItems: 'center' }}>
            <Tooltip
                anchorSelect='my-tooltip'
                content={
                    <p>
                        The doctor cancelled the appointments with <br />
                        this patient because he didn’t show up
                    </p>
                }
                place={args.place}
            >
                <Button style={{ marginLeft: 50 }} color='tertiary'>
                    Tooltip
                </Button>
            </Tooltip>
        </div>
    ),
    args: {
        place: 'top',
    },
};
