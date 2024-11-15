import classNames from 'classnames';
import { DivGlobalProps, TdGlobalProps } from '@/components/types';
import { FC } from 'react';
import { Card } from '@/containers';
import './tableBody.scss';
export type TdActionsProps = TdGlobalProps;

export const TdActions: FC<TdActionsProps> = ({ children, ...props }) => {
    return (
        <td {...props}>
            <span className='sob-v2-table-body-actions'>{children} </span>
        </td>
    );
};
export const TableContainer: FC<DivGlobalProps> = ({ children, className, ...props }) => {
    const classes = classNames('sob-v2-table-container', className);
    return (
        <Card className={classes} {...props}>
            {children}
        </Card>
    );
};
