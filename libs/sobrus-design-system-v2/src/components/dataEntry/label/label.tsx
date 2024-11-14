import React, { FC } from 'react';
import classNames from 'classnames';
import { LabelGlobalProps } from '@/components/types';
import './label.scss';
export type LabelProps = LabelGlobalProps;

const Label: FC<LabelProps> = (props) => {
    const { className, children, ...attributes } = props;

    const classes = classNames('sob-v2-label', className);

    return (
        <label className={classes} {...attributes}>
            {children}
        </label>
    );
};

export { Label };
