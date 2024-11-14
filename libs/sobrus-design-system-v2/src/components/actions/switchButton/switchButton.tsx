import React, { ChangeEvent, forwardRef, useState } from 'react';
import { ReactNode } from 'react';
import { Size } from '@/components/types';
import { Typography } from '@/typography';
import './switchButton.scss';
export interface SwitchButtonProps {
    /**
     * The current checked state of the switch.
     */
    checked?: boolean;
    /**
     * A function to handle changes to the switch's state.
     * It passes the new checked state, event, and the switch's id.
     */
    onChange?: (checked: boolean) => void;
    /**
     * If true, the switch is disabled and cannot be interacted with.
     * Default value: false
     */
    disabled?: boolean;
    /**
     * An optional icon element to be displayed on the unchecked handle.
     */
    uncheckedHandleIcon?: JSX.Element;
    /**
     * An optional icon element to be displayed on the checked handle.
     */
    checkedHandleIcon?: JSX.Element;
    /**
     * The box shadow style for the switch.
     */
    boxShadow?: string;
    /**
     * The active box shadow style when the switch is checked.
     */
    activeBoxShadow?: string;
    /**
     * Border radius of the switch, applied to both handle and slider.
     * Default value: 50 (fully rounded)
     */
    borderRadius?: number;
    /**
     * Custom class name for additional styling.
     */
    className?: string;
    /**
     * ID of the switch.
     */
    id?: string;
    /**
     * An optional label to be displayed with the switch.
     */
    label?: ReactNode;
    /**
     * The size of the switch. Determines its height, width, and handle diameter.
     * Expected values: 'sm' for small, 'md' for medium
     */
    size?: Size;
    /**
     * The label's position relative to the switch. Possible values are 'top', 'left', or 'right'.
     * Default value: 'top'
     */
    labelDir?: 'top' | 'left' | 'right';
}

const SwitchButton = forwardRef<HTMLInputElement, SwitchButtonProps>(
    (
        {
            checked,
            onChange,
            disabled = false,
            label,
            uncheckedHandleIcon,
            checkedHandleIcon,
            boxShadow,
            activeBoxShadow,
            borderRadius = '50',
            className,
            size = 'sm',
            id,
            labelDir = 'top',
            ...props
        },
        ref,
    ) => {
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            if (!disabled) {
                onChange?.(event.target.checked);
                setCurrentChecked(event.target.checked);
            }
        };
        const handleClick = () => {
            if (!disabled) {
                onChange?.(!checked);
                setCurrentChecked(!checked);
            }
        };
        const height = size === 'md' ? 30 : 20;
        const width = size === 'md' ? 60 : 35;
        const handleDiameter = size === 'md' ? 26 : 16;
        const [currentChecked, setCurrentChecked] = useState(checked);
        return (
            <div className={`sob-v2-switch-button ${className} ${disabled ? 'disabled' : ''}`}>
                {labelDir === 'top' && (
                    <Typography type='label' as='label' size='sm'>
                        {label}
                    </Typography>
                )}
                <input
                    ref={ref}
                    type='checkbox'
                    checked={currentChecked}
                    onChange={handleChange}
                    disabled={disabled}
                    className='sob-v2-switch-checkbox'
                    id={id}
                    {...props}
                />
                <div
                    className='sob-v2-switch-slider-container'
                    onClick={handleClick}
                    role='button'
                    tabIndex={0}
                    aria-pressed={checked}
                >
                    {labelDir === 'left' && (
                        <Typography type='label' as='label' size='sm'>
                            {label}
                        </Typography>
                    )}
                    <span
                        className='sob-v2-switch-slider'
                        style={{
                            backgroundColor: checked ? 'var(--sob-color-background-default)' : '#AFBBC7',
                            width: `${width}px`,
                            height: `${height}px`,
                            borderRadius: `${borderRadius || height / 2}px`,
                            boxShadow: checked ? activeBoxShadow : boxShadow,
                        }}
                    >
                        <span
                            className='sob-v2-switch-handle'
                            style={{
                                backgroundColor: '#fff',
                                width: `${handleDiameter}px`,
                                height: `${handleDiameter}px`,
                                borderRadius: `${borderRadius || height / 2}px`,
                                transform: checked ? `translateX(${size === 'md' ? 32 : 17}px)` : 'translateX(2px)',
                            }}
                        >
                            {checked ? checkedHandleIcon : uncheckedHandleIcon}
                        </span>
                    </span>
                    {labelDir === 'right' && (
                        <Typography type='label' as='label' size='sm'>
                            {label}
                        </Typography>
                    )}
                </div>
            </div>
        );
    },
);
SwitchButton.displayName = 'SwitchButton';
export { SwitchButton };
