import { Fade } from '@/animations';
import { Meta, StoryObj } from '@storybook/react';
import { Card, CardItem } from '@/containers';

export default {
    title: 'Annimations/Fade',
    component: Fade,
    argTypes: {
        children: { control: false },
    },
} as Meta<typeof Fade>;

export const Default: StoryObj<typeof Fade> = {
    render: (args) => (
        <Fade {...args}>
            <Card cardTitle='title'>
                <CardItem label={'Subsection'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas cum amet dolorem nihil!
                    Ratione excepturi consequatur dolor, ex sunt soluta officiis libero laudantium porro natus nemo
                    tempore explicabo. Illo id distinctio atque libero delectus suscipit quaerat reiciendis natus
                    voluptatibus
                </CardItem>
            </Card>
        </Fade>
    ),
    args: {
        in: true,
        timeout: 1000,
    },
};
