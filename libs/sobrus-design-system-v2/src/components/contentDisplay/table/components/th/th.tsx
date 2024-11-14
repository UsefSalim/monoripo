import React, { FC } from 'react';
import classNames from 'classnames';
import { ThGlobalProps } from '@/components/types';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import './th.scss';
export interface ThProps extends ThGlobalProps {
    /** if true hid ordring column  */
    hideOrder?: true;
    /** if up down nedded if ordring is true   */
    order?: 'up' | 'down';
    /** if true the element active is ordred  */
    isActive?: boolean;
}

export const Th: FC<ThProps> = ({ children, className, isActive, order, hideOrder, ...props }) => {
    const classes = classNames(
        'sob-v2-table-th',
        isActive ? 'sob-v2-table-th-active' : '',
        hideOrder ? 'sob-v2-table-th-hideOrder' : '',
        className,
    );

    return (
        <th {...props} className={classes}>
            <div className='sob-v2-table-th-content'>
                <span> {children}</span>
                {!hideOrder ? (
                    <span className={'sob-v2-table-order-container'}>
                        {order !== 'down' ? <AiOutlineCaretUp size={8} /> : <></>}
                        {order !== 'up' ? <AiOutlineCaretDown size={8} /> : <></>}
                    </span>
                ) : (
                    <></>
                )}
            </div>
        </th>
    );
};
