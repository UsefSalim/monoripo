import React, { FC } from 'react';
import classNames from 'classnames';
import { DivGlobalProps } from '@/components/types';

export type FormGroupProps = DivGlobalProps;

import './formGroup.scss';
const FormGroup: FC<FormGroupProps> = ({ className, children, ...props }) => {
    const classes = classNames('sob-v2-form-group', className);

    return (
        <div {...props} className={classes}>
            {children}
        </div>
    );
};

export { FormGroup };
