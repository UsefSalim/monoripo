import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { HiOutlineRefresh, HiOutlineSearch } from 'react-icons/hi';
import { DivGlobalProps, GlobalProps, HeadingsGlobalProps } from '@/components/types';
import { Button, IconButton, type IconButtonProps } from '@/actions';
import { Tag } from '@/contentDisplay';
import advanced from '@/assets/advanced.svg';
import close from '@/assets/close.svg';
import refresh from '@/assets/refresh.svg';

import './tableHeader.scss';
// --------------------------------- TableHeader -----------------//

export const TableHeader: FC<DivGlobalProps> = ({ className, children, ...props }) => {
    const classes = classNames('sob-v2-table-header', className);
    return (
        <div {...props} className={classes}>
            {children}
        </div>
    );
};

// --------------------------------- TableHeader -----------------//
// --------------------------------- TableHeaderTitle -----------------//
export interface TableHeaderTitleProps extends HeadingsGlobalProps {
    /**
     * change the html Tag  HTMLHeadingElement accept all props as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export const TableHeaderTitle: FC<TableHeaderTitleProps> = ({ className, children, as: Tag = 'h2', ...props }) => {
    const classes = classNames('sob-v2-table-header-title', className);

    return (
        <Tag {...props} className={classes}>
            {children}
        </Tag>
    );
};

// --------------------------------- TableHeaderTitle -----------------//
// --------------------------------- TableHeaderActions -----------------//

export const TableHeaderActions: FC<GlobalProps & HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    const classes = classNames('sob-v2-table-header-actions', className);

    return (
        <div {...props} className={classes}>
            {children}
        </div>
    );
};
// --------------------------------- TableHeaderActions -----------------//
// --------------------------------- TableRefreshBtn -----------------//

export const TableRefreshBtn: FC<IconButtonProps> = ({ className, ...props }) => {
    const classes = classNames('sob-v2-tableHeader-btn', className);

    return (
        <IconButton color='tertiary' {...props} className={classes}>
            <HiOutlineRefresh size={20}></HiOutlineRefresh>
        </IconButton>
    );
};

export interface NewTableAdvencedSearchBtnProps extends IconButtonProps {
    label?: ReactNode;
    open?: boolean;
}
export const NewTableAdvencedSearchBtn: FC<NewTableAdvencedSearchBtnProps> = ({
    className,
    label = 'Advanced search',
    onClick,
    open,
    ...props
}) => {
    const classes = classNames(
        'sob-v2-newtableHeadermore-btn',
        open ? 'sob-v2-newtableHeader-btn-open' : '',
        className,
    );

    return (
        <Button
            color='secondary'
            onClick={(e) => open && onClick?.(e)}
            lefticon={open ? <img src={advanced} alt='' /> : undefined}
            className={classes}
            {...props}
        >
            {open ? label : ''}
        </Button>
    );
};

// --------------------------------- TableRefreshBtn -----------------//
export type TableSearchBtnProps = IconButtonProps;

export const TableSearchBtn: FC<TableSearchBtnProps> = ({ className, ...attributes }) => {
    const classes = classNames('sob-v2-tableHeader-btn', 'sob-v2-tableHeader-btn-search', className);
    return (
        <IconButton color='tertiary' {...attributes} className={classes}>
            <HiOutlineSearch size={20}></HiOutlineSearch>
        </IconButton>
    );
};

// --------------------------------- NewTableAdvencedSearchBtn -----------------//
export interface NewTableSearchBtnProps extends IconButtonProps {
    label?: ReactNode;
    open?: boolean;
}
export const NewTableSearchBtn: FC<NewTableSearchBtnProps> = ({ className, label = 'Search', open, ...attributes }) => {
    const classes = classNames(
        'sob-v2-newtableHeader-btn',
        'sob-v2-newtableHeader-btn-search',
        open ? 'sob-v2-newtableHeader-btn-active' : '',
        className,
    );
    return (
        <Button
            color='secondary'
            {...attributes}
            lefticon={open ? <img src={close} alt='' /> : <HiOutlineSearch size={20}></HiOutlineSearch>}
            className={classes}
        >
            {label}
        </Button>
    );
};

export interface NewTableClearSearchBtnProps extends IconButtonProps {
    label?: ReactNode;
    tag?: ReactNode;
    active?: boolean;
}
export const NewTableClearSearchBtn: FC<NewTableClearSearchBtnProps> = ({
    className,
    label = 'Refresh',
    tag,
    active,
    ...attributes
}) => {
    const classes = classNames(
        'sob-v2-newtableHeader-btn',
        'sob-v2-newtableHeader-btn-search',
        active ? 'sob-v2-newtableHeader-btn-active' : '',
        className,
    );
    return (
        <Button color='secondary' {...attributes} lefticon={<img src={refresh} alt='' />} className={classes}>
            <span>{label}</span>
            {tag ? (
                <Tag style={{ marginLeft: 4 }} bgColor='#C5353E' size='xs' textColor='#FFF'>
                    {tag}
                </Tag>
            ) : (
                <></>
            )}
        </Button>
    );
};
