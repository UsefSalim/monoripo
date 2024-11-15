import React, { forwardRef } from 'react';

import classNames from 'classnames';
import { Size, TableGlobalProps } from '@/components/types';
import './table.scss';
/**
 *
 *
 * ###Usage
 *
 *```JSX
 *
 * import {TableHeader,
        Table,
        TableSearch,
        TableSearchRow,
        TableSearchItem,
        TableHeaderTitle,
        TableHeaderActions,
        TableRefreshBtn,
        TableSearchBtn,
        Th,
        TooltipMenu,
        TooltipMenuElement,
    } from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *      <Card>
                <TableHeader>
                    <TableHeaderTitle>Liste des ordonnances</TableHeaderTitle>
                    <TableHeaderActions>
                        <TableRefreshBtn onClick={refrechHandler}></TableRefreshBtn>
                        <TableSearchBtn open={open} onClick={() => setOpen(!open)}></TableSearchBtn>
                    </TableHeaderActions>
                </TableHeader>
                <TableSearch
                    onClickAdvancedSearchBtn={() => setOpenAdvancedSearch(!openAdvancedSearch)}
                    openAdvancedSearch={openAdvancedSearch}
                    onSearch={() => {

                    }}
                >
                    <TableSearchRow id='simple'>
                        <TableSearchItem>
                            <Input size='sm' id='exampleEmail' placeholder='Nom du produit ici ..' />
                        </TableSearchItem>
                        <TableSearchItem>
                            <Input size='sm' id='exampleEmail' placeholder='Nom du produit ici ..' />
                        </TableSearchItem>
                        <TableSearchItem>
                            <Input size='sm' id='exampleEmail' placeholder='Nom du produit ici ..' />
                        </TableSearchItem>
                        <TableSearchItem>
                            <Input size='sm' id='exampleEmail' placeholder='Nom du produit ici ..' />
                        </TableSearchItem>
                    </TableSearchRow>
                    <TableSearchRow id='advanced'>
                        <TableSearchItem>
                            <Input size='sm' id='exampleEmail' placeholder='Nom du produit ici ..' />
                        </TableSearchItem>
                        <TableSearchItem>
                            <Input size='sm' id='exampleEmail' placeholder='Nom du produit ici ..' />
                        </TableSearchItem>
                        <TableSearchItem>
                            <Input size='sm' id='exampleEmail' placeholder='Nom du produit ici ..' />
                        </TableSearchItem>
                        <TableSearchItem>
                            <Input size='sm' id='exampleEmail' placeholder='Nom du produit ici ..' />
                        </TableSearchItem>
                    </TableSearchRow>
                </TableSearch>

                <Table {...args}>
                    <thead>
                        <tr>
                            <Th hideOrder>#</Th>
                            <Th isActive order='down'>
                                First Name
                            </Th>
                            <Th hideOrder>Last Name</Th>
                            <Th hideOrder>statut</Th>
                            <Th hideOrder>Actions</Th>
                        </tr>
                    </thead>
                    <TableLoader loading={loading} columns={columns} />
                    <tbody>
                        {!loading &&
                            d?.map((item, index) => (
                                <AnimatedTr index={index} key={item?.id}>
                                    <th scope='row'>{item?.id}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{displaystatus(item.status)}</td>
                                    <td>
                                        {' '}
                                        <TooltipMenu>
                                            <TooltipMenuElement type='edit' />
                                            <TooltipMenuElement type='delete' />
                                            <TooltipMenuElement type='download' />
                                            <TooltipMenuElement type='print' />
                                            <TooltipMenuElement type='view' />
                                        </TooltipMenu>
                                    </td>
                                </AnimatedTr>
                            ))}
                        {d.length > 0 && (
                            <tr>
                                <td colSpan={6}>
                                    <div className='sob-v2-table-pagination'>
                                        <TablePreviousPage></TablePreviousPage>
                                        <TablePage>3500</TablePage>
                                        <TableNextPage></TableNextPage>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <EmptyData isVisible={d?.length === 0 && !loading}></EmptyData>
            </Card>
 *    );
 *   }
 * ```
 *
 */

export interface TableProps extends TableGlobalProps {
    size?: Size;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(({ className, size, ...attributes }, ref) => {
    const classes = classNames('sob-v2-table', size ? `sob-v2-table-${size}` : '', className);

    const table = (
        <div className='table__container'>
            <table {...attributes} ref={ref} className={classes} />
        </div>
    );

    return table;
});
export * from './components/animatedTr/animatedTr';
export * from './components/emptyData/emptyData';
export * from './components/tableBody/tableBody';
export * from './components/tableHeader/tableHeader';
export * from './components/tableLoader/tableLoader';
export * from './components/tableSearch/tableSearch';
export * from './components/th/th';
export * from './components/tooltipMenu/tooltipMenu';
