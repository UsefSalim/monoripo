import classNames from 'classnames';
import { InputGlobalProps } from '@/components/types';
import React, { ReactNode, forwardRef, useEffect } from 'react';

import './radioButton.scss';
export interface RadioBtnProps extends InputGlobalProps {
    /**
     * add label text
     */
    text?: ReactNode;
}

/**
 * Radio buttons
 *
 * ###Usage
 *
 *```JSX
 *
 * import {RadioButton, FormGroup, Label} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *      <FormGroup>
            <Label>Radio Group</Label>
            <RadioButton {...args} />
            <RadioButton {...args} />
            <RadioButton {...args} />
        </FormGroup>
 *    );
 * }
 * ```
 *
 */

// eslint-disable-next-line react/display-name
const RadioButton = forwardRef<HTMLInputElement, RadioBtnProps>(
    ({ color = '#161616', text, className, style, id, name, ...props }, ref) => {
        useEffect(() => {
            document.documentElement.style.setProperty('--radioColor', color);
        }, []);
        const classes = classNames(className, 'sob-v2-radioBtn-container');

        return (
            <label className={classes} style={style}>
                <input {...props} type='radio' ref={ref} id={name || id} name={name} />
                <span>{text}</span>
            </label>
        );
    },
);

export { RadioButton };
