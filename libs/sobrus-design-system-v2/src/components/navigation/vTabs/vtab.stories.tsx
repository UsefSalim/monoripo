import { Meta, StoryObj } from '@storybook/react';
import { VTabItem, VTabListContainer, VtabContent, VTabList, VTabPanel, VTabSubItem } from '@/navigation';
import source from '@/assets/Icon.png';
import sourceActive from '@/assets/Iconactive.png';
import { Tag } from '@/contentDisplay';
import { useState } from 'react';
import { Card } from '@/containers';

export default {
    title: 'Navigation/Vtabs',
    component: VTabListContainer,
    argTypes: {
        children: { control: false },
    },
} as Meta<typeof VTabListContainer>;

export const Default: StoryObj<typeof VTabListContainer> = {
    render: (args) => {
        const [value, setValue] = useState<string | number>(2.2);
        return (
            <VTabListContainer {...args} value={value} setValue={setValue}>
                <VTabList>
                    <VTabItem
                        hideTooltip
                        tag={
                            <Tag bgColor='#DCDFE3' textColor='#627282' size='xs'>
                                222
                            </Tag>
                        }
                        tabTitle='Menu item 1 Menu item 1 Menu item 1'
                        src={source}
                        srcActive={sourceActive}
                    >
                        <VTabSubItem hideTooltip tabTitle='subMenu item 1 Menu item 1' active='1.1' />
                        <VTabSubItem hideTooltip tabTitle='subMenu item 2 Menu item 1' active={1.2} />
                    </VTabItem>
                    <VTabItem hideTooltip tabTitle='Menu item 2' src={source} srcActive={sourceActive}>
                        <VTabSubItem hideTooltip tabTitle='subMenu item 1 Menu item 2' active={2.1} />
                        <VTabSubItem
                            hideTooltip
                            tabTitle='subMenu item 2 Menu item 2 subMenu item 2 Menu item 2'
                            active={2.2}
                        />
                    </VTabItem>
                    <VTabItem hideTooltip tabTitle='Menu item 3' active={2} />
                    <VTabItem hideTooltip tabTitle='Menu item 4' active={3} />
                </VTabList>
                <VtabContent>
                    <VTabPanel active={1.1}>
                        <Card>card 1.1</Card>
                    </VTabPanel>
                    <VTabPanel active={1.2}>
                        <Card>card 1.1</Card>
                    </VTabPanel>
                    <VTabPanel active={2.1}>
                        <Card>card 1.1</Card>
                    </VTabPanel>
                    <VTabPanel active={2.2}>
                        <Card>card 1.1</Card>
                    </VTabPanel>
                    <VTabPanel active={2}>
                        <Card>card 1.1</Card>
                    </VTabPanel>
                    <VTabPanel active={3}>
                        <Card>card 1.1</Card>
                    </VTabPanel>
                </VtabContent>
            </VTabListContainer>
        );
    },
    args: {},
};
