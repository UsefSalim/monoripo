import React, { useState } from 'react';
import {
    NewTableAdvencedSearchBtn,
    NewTableClearSearchBtn,
    NewTableSearchBtn,
    SearchBtn,
    Table,
    TableContainer,
    TableHeader,
    TableHeaderActions,
    TableHeaderTitle,
    TableRefreshBtn,
    TableSearchBtn,
    TableSearchItem,
    TableSearchRow,
    TdActions,
    Th,
    TooltipMenu,
    TooltipMenuItem,
    AnimatedTr,
    Avatar,
    TableLoader,
} from '@/contentDisplay';
import { CheckBox, DatePicker, Input, InputSelect } from '@/dataEntry';
import { Tooltip } from '@/feedbacks';
import { TablePage, TableNextPage, TablePreviousPage } from '@/navigation';
import { StoryObj, Meta } from '@storybook/react';
import { IconButton } from '@/actions';
import { FiEdit3 } from 'react-icons/fi';
import { data } from './data';
import { displaystatus } from '@/functions';
import { AiOutlineEye } from 'react-icons/ai';
import { TablePagination } from '@/navigation';

export default {
    title: 'Content display/Table',
    component: Table,
    subcomponents: {
        Table,
        TableContainer,
        TableHeader,
        TableHeaderActions,
        TableHeaderTitle,
        TableRefreshBtn,
        TableSearchBtn,
        TableSearchItem,
        TableSearchRow,
        TdActions,
        Th,
        CheckBox,
        DatePicker,
        Input,
        InputSelect,
        Tooltip,
        TablePage,
        TableNextPage,
        TablePreviousPage,
        IconButton,
        Avatar,
        SearchBtn,
    },
} as Meta<typeof Table>;

// Default Table Story
export const Default: StoryObj<typeof Table> = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        const [openAdvanced, setOpenAdvanced] = useState(false);

        return (
            <TableContainer>
                <TableHeader>
                    <TableHeaderTitle>Liste des ordonnances</TableHeaderTitle>
                    <TableHeaderActions>
                        <NewTableAdvencedSearchBtn open={open} onClick={() => setOpenAdvanced(!openAdvanced)} />
                        <NewTableClearSearchBtn tag='2' active />
                        <NewTableSearchBtn
                            label={open ? 'Close Search' : 'Search'}
                            open={open}
                            onClick={() => setOpen(!open)}
                        />
                    </TableHeaderActions>
                </TableHeader>

                <Table {...args}>
                    <thead>
                        <tr>
                            <Th hideOrder style={{ width: 70 }}>
                                id
                            </Th>

                            <Th isActive order='down'>
                                First Name
                            </Th>
                            <Th>Last Name</Th>
                        </tr>

                        <TableSearchRow id='advanced' openAdvanced={openAdvanced} open={open}>
                            <TableSearchItem />
                            <TableSearchItem>
                                <InputSelect />
                            </TableSearchItem>
                            <TableSearchItem>
                                <InputSelect />
                            </TableSearchItem>
                        </TableSearchRow>
                        <TableSearchRow id='simple' open={open}>
                            <TableSearchItem />
                            <TableSearchItem />
                            <TableSearchItem>
                                <Input />
                            </TableSearchItem>

                            <TableSearchItem>
                                <SearchBtn onClick={() => console.log('Search triggered')} />
                            </TableSearchItem>
                        </TableSearchRow>
                    </thead>

                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item?.id}>
                                <th scope='row'>{item?.id}</th>

                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>

                                <TdActions></TdActions>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <TablePagination>
                            <TablePreviousPage />
                            <TablePage>1{/* <CircularProgress /> */}</TablePage>
                            <TableNextPage />
                        </TablePagination>
                    </tfoot>
                </Table>
            </TableContainer>
        );
    },
    args: {
        size: 'md',
    },
};

export const Loading: StoryObj<typeof Table> = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        const [openAdvanced, setOpenAdvanced] = useState(false);
        return (
            <TableContainer>
                <TableHeader>
                    <TableHeaderTitle>Liste des ordonnances</TableHeaderTitle>
                    <TableHeaderActions>
                        <NewTableAdvencedSearchBtn open={open} onClick={() => setOpenAdvanced(!openAdvanced)} />
                        <NewTableClearSearchBtn tag='2' active />
                        <NewTableSearchBtn
                            label={open ? 'Close Search' : 'Search'}
                            open={open}
                            onClick={() => setOpen(!open)}
                        />
                    </TableHeaderActions>
                </TableHeader>

                <Table {...args}>
                    <thead>
                        <tr>
                            <Th hideOrder style={{ width: 70 }}>
                                id
                            </Th>

                            <Th isActive order='down'>
                                First Name
                            </Th>
                            <Th>Last Name</Th>
                        </tr>

                        <TableSearchRow id='advanced' openAdvanced={openAdvanced} open={open}>
                            <TableSearchItem />
                            <TableSearchItem>
                                <InputSelect />
                            </TableSearchItem>
                            <TableSearchItem>
                                <InputSelect />
                            </TableSearchItem>
                        </TableSearchRow>
                        <TableSearchRow id='simple' open={open}>
                            <TableSearchItem />
                            <TableSearchItem />
                            <TableSearchItem>
                                <Input />
                            </TableSearchItem>

                            <TableSearchItem>
                                <SearchBtn onClick={() => console.log('Search triggered')} />
                            </TableSearchItem>
                        </TableSearchRow>
                    </thead>
                    <TableLoader
                        columns={[{ type: 'dot' }, { type: 'medium' }, { type: 'large' }]}
                        loading={true}
                        numberOfRows={10}
                    />
                    <tfoot>
                        <TablePagination>
                            <TablePreviousPage />
                            <TablePage>1</TablePage>
                            <TableNextPage />
                        </TablePagination>
                    </tfoot>
                </Table>
            </TableContainer>
        );
    },
    args: {
        size: 'md',
    },
};
export const WithActions: StoryObj<typeof Table> = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        const [openAdvanced, setOpenAdvanced] = useState(false);

        return (
            <TableContainer>
                <TableHeader>
                    <TableHeaderTitle>Liste des ordonnances</TableHeaderTitle>
                    <TableHeaderActions>
                        <NewTableAdvencedSearchBtn open={open} onClick={() => setOpenAdvanced(!openAdvanced)} />
                        <NewTableClearSearchBtn tag='2' active />
                        <NewTableSearchBtn
                            label={open ? 'Close Search' : 'Search'}
                            open={open}
                            onClick={() => setOpen(!open)}
                        />
                    </TableHeaderActions>
                </TableHeader>

                <Table {...args}>
                    <thead>
                        <tr>
                            <Th hideOrder style={{ width: 70 }}>
                                id
                            </Th>

                            <Th isActive order='down'>
                                First Name
                            </Th>
                            <Th>Last Name</Th>
                        </tr>

                        <TableSearchRow id='advanced' openAdvanced={openAdvanced} open={open}>
                            <TableSearchItem />
                            <TableSearchItem>
                                <InputSelect />
                            </TableSearchItem>
                            <TableSearchItem>
                                <InputSelect />
                            </TableSearchItem>
                        </TableSearchRow>
                        <TableSearchRow id='simple' open={open}>
                            <TableSearchItem />
                            <TableSearchItem />
                            <TableSearchItem>
                                <Input />
                            </TableSearchItem>

                            <TableSearchItem>
                                <SearchBtn onClick={() => console.log('Search triggered')} />
                            </TableSearchItem>
                        </TableSearchRow>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item?.id}>
                                <th scope='row'>{item?.id}</th>

                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>

                                <TdActions>
                                    <IconButton id='tva' color='secondary'>
                                        <AiOutlineEye />
                                    </IconButton>
                                    <IconButton id='edit' color='secondary'>
                                        <FiEdit3 />
                                    </IconButton>
                                </TdActions>
                            </tr>
                        ))}
                    </tbody>

                    <Tooltip anchorSelect={'edit'} content={<p>Edit</p>} />
                    <Tooltip anchorSelect={'tva'} content={<p>This product is affected by the change in TAX</p>} />
                    <tfoot>
                        <TablePagination>
                            <TablePreviousPage />
                            <TablePage>1</TablePage>
                            <TableNextPage />
                        </TablePagination>
                    </tfoot>
                </Table>
            </TableContainer>
        );
    },
    args: {
        size: 'md',
    },
};
export const WithTooltipMenu: StoryObj<typeof Table> = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        const [openAdvanced, setOpenAdvanced] = useState(false);

        return (
            <TableContainer>
                <TableHeader>
                    <TableHeaderTitle>Liste des ordonnances</TableHeaderTitle>
                    <TableHeaderActions>
                        <NewTableAdvencedSearchBtn open={open} onClick={() => setOpenAdvanced(!openAdvanced)} />
                        <NewTableClearSearchBtn tag='2' active />
                        <NewTableSearchBtn
                            label={open ? 'Close Search' : 'Search'}
                            open={open}
                            onClick={() => setOpen(!open)}
                        />
                    </TableHeaderActions>
                </TableHeader>

                <Table {...args}>
                    <thead>
                        <tr>
                            <Th hideOrder style={{ width: 70 }}>
                                id
                            </Th>

                            <Th isActive order='down'>
                                First Name
                            </Th>
                            <Th>Last Name</Th>
                            <Th>Status</Th>
                        </tr>

                        <TableSearchRow id='advanced' openAdvanced={openAdvanced} open={open}>
                            <TableSearchItem />
                            <TableSearchItem>
                                <InputSelect />
                            </TableSearchItem>
                            <TableSearchItem>
                                <InputSelect />
                            </TableSearchItem>
                            <TableSearchItem />
                        </TableSearchRow>
                        <TableSearchRow id='simple' open={open}>
                            <TableSearchItem />
                            <TableSearchItem />
                            <TableSearchItem>
                                <Input />
                            </TableSearchItem>

                            <TableSearchItem>
                                <SearchBtn onClick={() => console.log('Search triggered')} />
                            </TableSearchItem>
                            <TableSearchItem />
                        </TableSearchRow>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item?.id}>
                                <th scope='row'>{item?.id}</th>

                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{displaystatus(item.status)}</td>
                                <TdActions>
                                    <TooltipMenu size='sm'>
                                        <TooltipMenuItem type='add' />
                                        <TooltipMenuItem type='edit' />
                                        <TooltipMenuItem type='delete' />
                                        <TooltipMenuItem type='download' />
                                        <TooltipMenuItem type='print' />
                                        <TooltipMenuItem type='view' />
                                    </TooltipMenu>
                                </TdActions>
                            </tr>
                        ))}
                    </tbody>

                    <Tooltip anchorSelect={'edit'} content={<p>Edit</p>} />
                    <Tooltip anchorSelect={'tva'} content={<p>This product is affected by the change in TAX</p>} />
                    <tfoot>
                        <TablePagination>
                            <TablePreviousPage />
                            <TablePage>1</TablePage>
                            <TableNextPage />
                        </TablePagination>
                    </tfoot>
                </Table>
            </TableContainer>
        );
    },
    args: {
        size: 'md',
    },
};
export const Annimated: StoryObj<typeof Table> = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        const [openAdvanced, setOpenAdvanced] = useState(false);

        return (
            <TableContainer>
                <TableHeader>
                    <TableHeaderTitle>Liste des ordonnances</TableHeaderTitle>
                    <TableHeaderActions>
                        <NewTableAdvencedSearchBtn open={open} onClick={() => setOpenAdvanced(!openAdvanced)} />
                        <NewTableClearSearchBtn tag='2' active />
                        <NewTableSearchBtn
                            label={open ? 'Close Search' : 'Search'}
                            open={open}
                            onClick={() => setOpen(!open)}
                        />
                    </TableHeaderActions>
                </TableHeader>

                <Table {...args}>
                    <thead>
                        <tr>
                            <Th hideOrder style={{ width: 70 }}>
                                id
                            </Th>

                            <Th isActive order='down'>
                                First Name
                            </Th>
                            <Th>Last Name</Th>
                            <Th>Status</Th>
                        </tr>

                        <TableSearchRow id='advanced' openAdvanced={openAdvanced} open={open}>
                            <TableSearchItem />
                            <TableSearchItem>
                                <InputSelect />
                            </TableSearchItem>
                            <TableSearchItem>
                                <InputSelect />
                            </TableSearchItem>
                            <TableSearchItem />
                        </TableSearchRow>
                        <TableSearchRow id='simple' open={open}>
                            <TableSearchItem />
                            <TableSearchItem />
                            <TableSearchItem>
                                <Input />
                            </TableSearchItem>

                            <TableSearchItem>
                                <SearchBtn onClick={() => console.log('Search triggered')} />
                            </TableSearchItem>
                            <TableSearchItem />
                        </TableSearchRow>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <AnimatedTr index={index} key={item?.id}>
                                <th scope='row'>{item?.id}</th>

                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{displaystatus(item.status)}</td>
                                <TdActions>
                                    <TooltipMenu size='sm'>
                                        <TooltipMenuItem type='add' />
                                        <TooltipMenuItem type='edit' />
                                        <TooltipMenuItem type='delete' />
                                        <TooltipMenuItem type='download' />
                                        <TooltipMenuItem type='print' />
                                        <TooltipMenuItem type='view' />
                                    </TooltipMenu>
                                </TdActions>
                            </AnimatedTr>
                        ))}
                    </tbody>

                    <Tooltip anchorSelect={'edit'} content={<p>Edit</p>} />
                    <Tooltip anchorSelect={'tva'} content={<p>This product is affected by the change in TAX</p>} />
                    <tfoot>
                        <TablePagination>
                            <TablePreviousPage />
                            <TablePage>1</TablePage>
                            <TableNextPage />
                        </TablePagination>
                    </tfoot>
                </Table>
            </TableContainer>
        );
    },
    args: {
        size: 'md',
    },
};
