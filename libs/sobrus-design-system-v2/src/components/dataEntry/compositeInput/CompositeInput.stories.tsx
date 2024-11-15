import { useState } from 'react';
import {
    FormGroup,
    Label,
    FormFeedback,
    CompositeElement,
    CompositeInput,
    InputSelect,
    Input,
    DatePicker,
} from '@/dataEntry';

import { Meta, StoryObj } from '@storybook/react';

import { Button, IconButton } from '@/actions';
/**
 *
 *A flexible CompositeInput
* Use any Input type (InputSelect AsyncSelect....), wrap each input with a and add the desired width
* Use any width to achieve the requirements
*
* ##Usage
*
*```JSX
*
* import {FormGroup,Label,CompositeInput,FormFeedback} from "@sobrus-com/sobrus-design-system"
* const Example = (props) => {
*    return (
*      <FormGroup>
*              <Label for="exampleSelect">Search select</Label>
*              <CompositeInput>
*                  <div style={{ width: '75%' }}>
*                    <Input placeholder='text' name='composite' type='text' />
*                   </div>
*                   <div style={{ width: '25%' }}>
*                     <InputSelect
*                        // value={value}
*                         // onChange={(e) => setValue(e)}
*                        options={[
*                            { value: 'hours', label: 'Heures' },
*                            { value: 'days', label: 'Jours' },
*                            { value: 'months', label: 'Mois' },
*                            { value: 'years', label: 'Années' },
*                       ]}
*                    />
*                  </div>
*              </CompositeInput>
*              <FormFeedback valid>Sweet! that name is available</FormFeedback>
*      </FormGroup>
*    );
*   }
* ```

*/
export default {
    title: 'Data entry/Composite Input',
    component: CompositeInput,
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: 'select',
        },
        onChange: { control: false },
    },
    subcomponents: { CompositeElement },
} as Meta<typeof CompositeInput>;

export const Default: StoryObj<typeof CompositeInput> = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <div>
                <FormGroup>
                    <Label htmlFor='exampleSelect'>Search select</Label>
                    <CompositeInput disabled size='sm' {...args}>
                        <CompositeElement width='10%' tag>
                            test tag skafdh fksdhf ksadfg
                        </CompositeElement>
                        <CompositeElement>
                            <InputSelect
                                value={value}
                                onChange={(e) => e?.value && setValue(e?.value)}
                                options={[
                                    { value: 'hours', label: 'Heures' },
                                    { value: 'days', label: 'Jours' },
                                    { value: 'months', label: 'Mois' },
                                    { value: 'years', label: 'Années' },
                                ]}
                            />
                        </CompositeElement>
                        <CompositeElement>
                            <InputSelect
                                value={value}
                                onChange={(e) => e?.value && setValue(e?.value)}
                                options={[
                                    { value: 'hours', label: 'Heures' },
                                    { value: 'days', label: 'Jours' },
                                    { value: 'months', label: 'Mois' },
                                    { value: 'years', label: 'Années' },
                                ]}
                            />
                        </CompositeElement>
                    </CompositeInput>
                    <FormFeedback>Sweet! that name is available</FormFeedback>
                </FormGroup>
            </div>
        );
    },
};

// Error CompositeInput Story
export const Error: StoryObj<typeof CompositeInput> = {
    render: () => (
        <FormGroup>
            <Label htmlFor='exampleSelect'>Search select</Label>
            <CompositeInput>
                <CompositeElement width='100px' tag>
                    https://
                </CompositeElement>
                <CompositeElement width={'100%'}>
                    <Input placeholder='text' name='composite' type='text' />
                </CompositeElement>
            </CompositeInput>
            <FormFeedback invalid>Sweet! that name is available</FormFeedback>
        </FormGroup>
    ),
};

// Disabled CompositeInput Story
export const Disabled: StoryObj<typeof CompositeInput> = {
    render: () => (
        <FormGroup>
            <Label htmlFor='exampleSelect'>Search select</Label>
            <CompositeInput>
                <CompositeElement width={'100%'}>
                    <Input placeholder='text' name='composite' type='text' disabled />
                </CompositeElement>
                <CompositeElement disabled width='100px' tag>
                    Qté Max
                </CompositeElement>
            </CompositeInput>
            <FormFeedback>Sweet! that name is available</FormFeedback>
        </FormGroup>
    ),
};

// 50/50 CompositeInput Story
export const D5050: StoryObj<typeof CompositeInput> = {
    render: () => (
        <FormGroup>
            <Label htmlFor='exampleSelect'>Search select</Label>
            <CompositeInput>
                <CompositeElement width={'100%'}>
                    <Input placeholder='text' name='composite' type='text' invalid />
                </CompositeElement>
                <CompositeElement tag width='100px'>
                    Qté Max
                </CompositeElement>
            </CompositeInput>
            <FormFeedback invalid>Sweet! that name is available</FormFeedback>
        </FormGroup>
    ),
};

// 25/75 CompositeInput Story
export const D2575: StoryObj<typeof CompositeInput> = {
    render: () => (
        <FormGroup>
            <Label htmlFor='exampleSelect'>Search select</Label>
            <CompositeInput>
                <CompositeElement tag width='100px'>
                    prefix
                </CompositeElement>
                <CompositeElement width='100%'>
                    <InputSelect
                        size='sm'
                        menuPosition='fixed'
                        options={[
                            { value: 'hours', label: 'Heures' },
                            { value: 'days', label: 'Jours' },
                            { value: 'months', label: 'Mois' },
                            { value: 'years', label: 'Années' },
                        ]}
                    />
                </CompositeElement>
                <CompositeElement tag width='100px'>
                    suffix
                </CompositeElement>
            </CompositeInput>
            <FormFeedback>Sweet! that name is available</FormFeedback>
        </FormGroup>
    ),
};
export const Test: StoryObj<typeof CompositeInput> = {
    render: () => (
        <FormGroup>
            <Label htmlFor='exampleSelect'>Search select</Label>
            <CompositeInput>
                <CompositeElement width={'auto'}>
                    <Button>test</Button>
                </CompositeElement>
                <CompositeElement width='100%'>
                    <InputSelect
                        size='sm'
                        menuPosition='fixed'
                        options={[
                            { value: 'hours', label: 'Heures' },
                            { value: 'days', label: 'Jours' },
                            { value: 'months', label: 'Mois' },
                            { value: 'years', label: 'Années' },
                        ]}
                    />
                </CompositeElement>
                <CompositeElement tag width='100px'>
                    suffix
                </CompositeElement>
                <CompositeElement width={'auto'}>
                    <IconButton>
                        <svg
                            className='search__inout__icon'
                            fill='none'
                            height='20'
                            viewBox='0 0 20 20'
                            width='20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z'
                                stroke='#8597AA'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='1.5'
                            />
                        </svg>
                    </IconButton>
                </CompositeElement>
            </CompositeInput>
            <FormFeedback>Sweet! that name is available</FormFeedback>
        </FormGroup>
    ),
};
