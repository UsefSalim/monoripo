import React, { CSSProperties, FC, ReactNode } from 'react';
import classNames from 'classnames';

import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { ButtonsGlobalProps, DivGlobalProps, SpanGlobalProps } from '@/components/types';

import './tablePagination.scss';

export interface PaginationProps extends SpanGlobalProps {
    /**
     * 	The content of the component.
     */
    children: ReactNode;
    /**
     * if true, the component is outlined
     */
    outline?: boolean;
}

/**
 *
 *
 * table paginations for tables
 *
 * ###Usage
 *
 *```JSX
 *
 * import {TablePreviousPage, TablePage, TableNextPage} from "@sobrus-com/sobrus-design-system"
 *
 *  return (
 *      <div style={{ display: "flex", alignItems: "center" }}>
            <TablePreviousPage></TablePreviousPage>
            <TablePage>3500</TablePage>
            <TableNextPage></TableNextPage>
        </div>
 *    );
 *   }
 * ```
 *
 *
 */

const TablePage = ({ className, outline = false, children, ...props }: PaginationProps) => {
    const classes = classNames('sob-v2-TablePage', outline ? 'sob-v2-TablePage__outline' : false, className);

    return (
        <span className={classes} {...props}>
            {children}
        </span>
    );
};

export interface TablePaginationProps extends DivGlobalProps {
    /** disabled button or not */
    disabled?: boolean;
    /** td col span */
    colSpan?: number;
}

export const TablePagination: FC<TablePaginationProps> = (props) => {
    const { className, children, colSpan = 12 } = props;

    const classes = classNames('sob-v2-table-pagination', className);

    return (
        <tr>
            <td colSpan={colSpan}>
                <div className={classes} {...props}>
                    {children}
                </div>
            </td>
        </tr>
    );
};
export interface TableNextPageProps extends ButtonsGlobalProps {
    /** disabled button or not */
    disabled?: boolean;
    /**
     * if true, the component is outlined
     */
    outline?: boolean;
}

const TableNextPage: FC<TableNextPageProps> = (props) => {
    const { className, outline = false, disabled, style, onClick } = props;

    const classes = classNames(
        'sob-v2-TablePage__btn',
        disabled ? 'sob-v2-TablePage__disabled' : false,
        outline ? 'sob-v2-TablePage__outline' : false,
        className,
    );

    return (
        <button disabled={disabled} className={classes} style={style} onClick={onClick} {...props}>
            <HiChevronRight size={19}></HiChevronRight>
        </button>
    );
};

export interface TablePreviousPageProps extends ButtonsGlobalProps {
    /** disabled button or not */
    disabled?: boolean;
    /**
     * if true, the component is outlined
     */
    outline?: boolean;
}

const TablePreviousPage: FC<TablePreviousPageProps> = (props) => {
    const { className, outline = false, disabled, style, onClick } = props;

    const classes = classNames(
        'sob-v2-TablePage__btn',
        disabled ? 'sob-v2-TablePage__disabled' : false,
        outline ? 'sob-v2-TablePage__outline' : false,
        className,
    );

    return (
        <button disabled={disabled} className={classes} style={style} onClick={onClick} {...props}>
            <HiChevronLeft size={19}></HiChevronLeft>
        </button>
    );
};

export { TablePage, TableNextPage, TablePreviousPage };
