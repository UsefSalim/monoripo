import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Card, CardItem } from '@/containers';
import { Zoom } from '@/animations';

export default {
    title: 'Annimations/Zoom',
    component: Zoom,
    argTypes: {
        children: { control: false },
    },
} as Meta<typeof Zoom>;

export const Default: StoryObj<typeof Zoom> = {
    render: (args) => (
        <Zoom {...args}>
            <Card cardTitle='title'>
                <CardItem label={'Subsection'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas cum amet dolorem nihil!
                    Ratione excepturi consequatur dolor, ex sunt soluta officiis libero laudantium porro natus nemo
                    tempore explicabo. Illo id distinctio atque libero delectus suscipit quaerat reiciendis natus
                    voluptatibus
                </CardItem>
            </Card>
        </Zoom>
    ),
    args: {
        in: true,
        timeout: 1000,
    },
};
