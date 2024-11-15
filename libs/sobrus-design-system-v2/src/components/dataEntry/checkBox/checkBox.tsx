/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ReactNode, forwardRef, useEffect } from 'react';
import classNames from 'classnames';
import { InputGlobalProps } from '@/components/types';

import './checkbox.scss';
import { Typography } from '@/main';
export interface CheckboxProps extends InputGlobalProps {
    /**
     * 	The label of the component
     */
    label?: ReactNode;
    /**
     * 	If true, the component is checked.
     */
    checked?: boolean;
    /**
     * 	If true, the component hav indereminated style.
     */
    indeterminate?: boolean;
    /**
     * 	If true, the component is disabled.
     */
    disabled?: boolean;
    /**
     * 	If true, the component is invalid style.
     */
    invalid?: boolean;
    /**
     * 	If true, the component is invalid style.
     */
    labelFirst?: boolean;
}

const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, checked, indeterminate, disabled, labelFirst, name, id, ...props }, ref) => {
        const classes = classNames(
            'sob-v2-checkbox-wrapper',
            labelFirst ? 'sob-v2-checkbox-wrapper-labelfirst' : '',
            className,
        );
        useEffect(() => {
            if (indeterminate && !checked) {
                const ele = (document?.querySelector('.sob-v2-checkbox') as HTMLInputElement)!;
                ele.indeterminate = true;
            }
        }, [checked]);

        return (
            <div className={classes}>
                <span className={'sob-v2-checkbox-container bounce'}>
                    <input
                        {...props}
                        className={'sob-v2-checkbox'}
                        type='checkbox'
                        checked={checked}
                        disabled={disabled}
                        ref={ref}
                        id={name || id}
                        name={name}
                    />
                    <svg viewBox='0 0 21 21'>
                        {!indeterminate ? (
                            <polyline points='5 10.75 8.5 14.25 16 6'></polyline>
                        ) : (
                            <polyline points='5,10.75 16,10.75'></polyline>
                        )}
                    </svg>
                </span>
                {label && (
                    <div
                        className={`sob-v2-checkbox-text-container ${
                            disabled ? 'sob-v2-checkbox-text-container-disabled' : ''
                        }`}
                    >
                        <Typography type='label' size='sm' as='label'>
                            {label}
                        </Typography>
                    </div>
                )}
            </div>
        );
    },
);

export { CheckBox };
