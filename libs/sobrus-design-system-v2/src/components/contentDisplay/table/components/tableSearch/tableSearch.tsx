import classNames from 'classnames';
import { TableRowGlobalProps, TdGlobalProps } from '@/components/types';
import React, { FC, useEffect, useRef } from 'react';
import { IconButton, IconButtonProps } from '@/actions';
import { BsChevronDown } from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';

export interface TableSearchRowProps extends TableRowGlobalProps {
    id: 'simple' | 'advanced';
    advanced?: boolean;
    openAdvanced?: boolean;
    open?: boolean;
}

export const TableSearchRow: FC<TableSearchRowProps> = ({ className, id, children, openAdvanced, open, ...props }) => {
    const classes = classNames(
        id === 'advanced' ? 'sob-v2-table-tr-search-advanced' : 'sob-v2-table-tr-search',
        className,
    );
    if (id === 'advanced' && openAdvanced && open)
        return (
            <tr {...props} id={id} className={classes}>
                {children}
            </tr>
        );
    if (open && id === 'simple') {
        return (
            <tr {...props} id={id} className={classes}>
                {children}
            </tr>
        );
    }
    return <></>;
};
export const TableSearchItem: FC<TdGlobalProps> = ({ className, id, ...props }) => {
    const classes = classNames('sob-v2-table-td-search', className);
    return <td {...props} id={id} className={classes}></td>;
};

export interface AdvencedSearchOpenBtnProps extends IconButtonProps {
    open: boolean;
}

export const AdvencedSearchOpenBtn: FC<AdvencedSearchOpenBtnProps> = ({ className, onClick, open, ...props }) => {
    return (
        <IconButton {...props} onClick={onClick} className={className} color='secondary'>
            <BsChevronDown
                style={{
                    transition: 'all .2s',
                    transform: `rotate(${open ? '180deg' : '0deg'})`,
                }}
                size={16}
            />
        </IconButton>
    );
};

export interface SearchBtnProps extends Omit<IconButtonProps, 'onClick'> {
    onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    searchOnEnter?: boolean;
}

export const SearchBtn: FC<SearchBtnProps> = ({ className, onClick, searchOnEnter = true, ...props }) => {
    useEffect(() => {
        function handlekeydownEvent(event: KeyboardEvent) {
            const { key } = event;
            if (key === 'Enter') {
                event?.preventDefault();
                event?.stopPropagation();
                onClick?.();
            }
        }
        searchOnEnter && document.addEventListener('keyup', handlekeydownEvent);
        return () => {
            document.removeEventListener('keyup', handlekeydownEvent);
        };
    }, [onClick, searchOnEnter]);

    return (
        <IconButton {...props} onClick={(e) => onClick(e)} className={className} color='primary'>
            <HiOutlineSearch size={20} />
        </IconButton>
    );
};
