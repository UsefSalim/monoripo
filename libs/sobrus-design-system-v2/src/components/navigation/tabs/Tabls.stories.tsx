/* eslint-disable @typescript-eslint/ban-types */
import { Meta, StoryObj } from '@storybook/react';
import React, { SyntheticEvent, useState } from 'react';
import { TabsContainer, AppBar, Tabs, Tab, TabPanel } from './tabs';
import { Card } from '@/containers';
import { HiOutlineFingerPrint } from 'react-icons/hi';
import { Tag } from '@/contentDisplay';

export default {
    title: 'Navigation/Tabs',
    component: TabsContainer,
    argTypes: {
        defaultColor: {
            control: 'boolean',
        },
    },
    subcomponents: { AppBar, Tabs, Tab, TabPanel },
} as Meta<typeof TabsContainer>;

export const Default: StoryObj<typeof TabsContainer> = {
    render: (args) => {
        const [value, setValue] = useState<string>('2');

        const handleChange = (event: SyntheticEvent, newValue: string) => {
            setValue(newValue);
        };

        return (
            <TabsContainer {...args}>
                <AppBar>
                    <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
                        <Tab label='Lorem ipsum dolor sit amet consectetur adipisicing elit.' index={'0'} />
                        <Tab label='Item Two mim' index={'1'} />
                        <Tab label='Item Three mim' index={'2'} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={'0'}>
                    Item One mim
                </TabPanel>
                <TabPanel value={value} index={'1'}>
                    Item Two mim
                </TabPanel>
                <TabPanel value={value} index={'2'}>
                    Item Three mim
                </TabPanel>
            </TabsContainer>
        );
    },
    args: {
        defaultColor: false,
    },
};
export const Icons: StoryObj<typeof TabsContainer> = {
    render: (args) => {
        const [value, setValue] = useState<string>('0');

        const handleChange = (event: SyntheticEvent, newValue: string) => {
            setValue(newValue);
        };

        return (
            // <Card>
            <TabsContainer {...args}>
                <AppBar>
                    <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
                        <Tab
                            icon={<HiOutlineFingerPrint />}
                            label='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                            index={'0'}
                        />
                        <Tab label='Item Two mim' index={'1'} icon={<HiOutlineFingerPrint />} />
                        <Tab label='Item Three mim' index={'2'} icon={<HiOutlineFingerPrint />} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={'0'}>
                    {' '}
                    Item One mim
                </TabPanel>
                <TabPanel value={value} index={'1'}>
                    Item Two mim
                </TabPanel>
                <TabPanel value={value} index={'2'}>
                    Item Three mim
                </TabPanel>
            </TabsContainer>
            // </Card>
        );
    },
    args: {
        defaultColor: false,
    },
};
export const LargeContent: StoryObj<typeof TabsContainer> = {
    render: (args) => {
        const [value, setValue] = useState<string>('1');

        const handleChange = (event: SyntheticEvent, newValue: string) => {
            setValue(newValue);
        };

        return (
            // <Card>
            <TabsContainer {...args}>
                <AppBar>
                    <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
                        <Tab
                            tooltip
                            maxWidth
                            tag={
                                <Tag size='xs' bgColor='#000' textColor='#fff'>
                                    120
                                </Tag>
                            }
                            label='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                            index={'0'}
                        />
                        <Tab label='Item Two mim' index={'1'} />
                        <Tab label='Item Three mim' index={'2'} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={'0'}>
                    {' '}
                    Item One mim
                </TabPanel>
                <TabPanel value={value} index={'1'}>
                    Item Two mim
                </TabPanel>
                <TabPanel value={value} index={'2'}>
                    Item Three mim
                </TabPanel>
            </TabsContainer>
            // </Card>
        );
    },
    args: {
        defaultColor: false,
    },
};
export const InCard: StoryObj<typeof TabsContainer> = {
    render: (args) => {
        const [value, setValue] = useState<string>('1');

        const handleChange = (event: SyntheticEvent, newValue: string) => {
            setValue(newValue);
        };

        return (
            <Card>
                <TabsContainer {...args}>
                    <AppBar>
                        <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
                            <Tab label='Lorem ipsum dolor.' index={'0'} />
                            <Tab label='Item Two mim' index={'1'} />
                            <Tab label='Item Three mim' index={'2'} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={'0'}>
                        {' '}
                        Item One mim
                    </TabPanel>
                    <TabPanel value={value} index={'1'}>
                        Item Two mim
                    </TabPanel>
                    <TabPanel value={value} index={'2'}>
                        Item Three mim
                    </TabPanel>
                </TabsContainer>
            </Card>
        );
    },
    args: {
        defaultColor: false,
    },
};
export const Color: StoryObj<typeof TabsContainer> = {
    render: (args) => {
        const [value, setValue] = useState<string>('0');

        const handleChange = (event: SyntheticEvent, newValue: string) => {
            setValue(newValue);
        };

        return (
            <TabsContainer {...args}>
                <AppBar>
                    <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
                        <Tab label='Lorem ipsum dolor.' index={'0'} />
                        <Tab label='Item Two mim' index={'1'} />
                        <Tab label='Item Three mim' index={'2'} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={'0'}>
                    {' '}
                    Item One mim
                </TabPanel>
                <TabPanel value={value} index={'1'}>
                    Item Two mim
                </TabPanel>
                <TabPanel value={value} index={'2'}>
                    Item Three mim
                </TabPanel>
            </TabsContainer>
        );
    },
    args: {
        defaultColor: true,
    },
};
