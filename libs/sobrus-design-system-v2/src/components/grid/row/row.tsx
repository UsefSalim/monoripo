import React, { ElementType, FC } from 'react';
import classNames from 'classnames';
import { TagGlobalProps } from '@/components/types';
import './row.scss';
const rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl'];

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface RowProps extends Omit<TagGlobalProps, 'form'> {
    [key: string]: any;
    /**
     *
     */
    as?: ElementType;
    noGutters?: boolean;
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
    xxl?: number | string;
    widths?: string[];
}

export const Row: FC<RowProps> = ({ className, noGutters, as: Tag = 'div', widths = rowColWidths, ...attributes }) => {
    const colClasses: string[] = [];

    widths?.forEach((colWidth, i) => {
        const colSize = attributes[colWidth];

        delete attributes[colWidth];

        if (!colSize) {
            return;
        }

        const isXs = !i;
        colClasses.push(isXs ? `sob-v2-row-cols-${colSize}` : `sob-v2-row-cols-${colWidth}-${colSize}`);
    });

    const classes = classNames(className, noGutters ? 'gx-0' : null, 'sob-v2-row', colClasses);

    return <Tag {...attributes} className={classes} />;
};
