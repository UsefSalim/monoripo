/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import { Input } from '@/dataEntry';
import { InputGlobalProps, Size } from '@/components/types';

import './colorPicker.scss';
export interface ColorPickerProps extends Omit<InputGlobalProps, 'size'> {
    /**
     * The size of the component
     */
    size?: Size;
    /**
     * 	If true, the component is invalid style.
     */
    invalid?: boolean;
    /**
     * 	If true, the component is disabled.
     */
    disabled?: boolean;
}

/**
 * ColorPicker for picking a color
 *
 *
 * the ColorPicker component accepte all InputHTMLAttributes properties
 *
 * accepte ref
 *
 * ###Usage
 *
 *```JSX
 *
 * import {ColorPicker} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
            <ColorPicker />
 *    );
 * }
 * ```
 *
 */
// forwardRef<>(

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
    ({ className, onChange, size = 'md', invalid, disabled, value, id, name, ...props }, ref) => {
        const [color, setColor] = useState(value);

        const classes = classNames('sob-v2-color-picker', size ? `sob-v2-color-picker-${size}` : false, className);

        return (
            <div className='sob-v2-color-picker-wrapper'>
                <input
                    {...props}
                    className={classes}
                    type='color'
                    disabled={disabled}
                    value={color ?? value}
                    onChange={(e: any) => {
                        setColor((e.target as HTMLInputElement).value);
                        onChange?.(e);
                    }}
                    ref={ref}
                ></input>
                <Input
                    type='text'
                    invalid={invalid}
                    size={size}
                    disabled={disabled}
                    value={color ?? value}
                    onChange={(e: any) => {
                        onChange?.(e);
                    }}
                    id={name || id}
                    name={name}
                ></Input>
            </div>
        );
    },
);

export { ColorPicker };
