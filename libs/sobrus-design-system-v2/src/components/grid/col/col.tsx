import { FC, ElementType } from 'react';
import classNames from 'classnames';
import { isObject } from '@/hooks/utils';
import { TagGlobalProps } from '@/components/types';
import './col.scss';
const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
export type ColumnProps =
    | string
    | boolean
    | number
    | {
          size?: boolean | number | string;
          offset?: string | number;
          order?: string | number;
      };

export interface ColProps extends TagGlobalProps {
    [key: string]: any;
    xs?: ColumnProps;
    sm?: ColumnProps;
    md?: ColumnProps;
    lg?: ColumnProps;
    xl?: ColumnProps;
    xxl?: ColumnProps;
    widths?: ['xs', 'sm', 'md', 'lg', 'xl'];
    as?: ElementType;
}

const getColumnSizeClass = (isXs: boolean, colWidth: string, colSize: number | string | boolean) => {
    if (colSize === true || colSize === '') {
        return isXs ? 'sob-v2-col' : `sob-v2-col-${colWidth}`;
    }
    if (colSize === 'auto') {
        return isXs ? 'sob-v2-col-auto' : `sob-v2-col-${colWidth}-auto`;
    }

    return isXs ? `sob-v2-col-${colSize}` : `sob-v2-col-${colWidth}-${colSize}`;
};

const getColumnClasses = (attributes: any, widths = colWidths) => {
    const modifiedAttributes = attributes;
    const colClasses: string[] = [];

    widths.forEach((colWidth, i) => {
        if (colWidth in modifiedAttributes) {
            const columnProp = modifiedAttributes[colWidth];

            delete modifiedAttributes[colWidth];

            if (!columnProp && columnProp !== '') {
                return;
            }

            const isXs = !i;

            if (isObject(columnProp)) {
                const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
                const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

                colClasses.push(
                    classNames({
                        [colClass]: columnProp.size || columnProp.size === '',
                        [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
                        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0,
                    }),
                );
            } else {
                const colClass = getColumnSizeClass(isXs, colWidth, columnProp);
                colClasses.push(colClass);
            }
        }
    });

    return {
        colClasses,
        modifiedAttributes,
    };
};

export const Col: FC<ColProps> = ({ className, widths = colWidths, as: Tag = 'div', ...attributes }) => {
    const { modifiedAttributes, colClasses } = getColumnClasses(attributes, widths);

    if (!colClasses.length) {
        colClasses.push('sob-v2-col');
    }

    const classes = classNames(className, colClasses);

    return <Tag {...modifiedAttributes} className={classes} />;
};
