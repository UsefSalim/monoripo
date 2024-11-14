import { forwardRef } from 'react';
import classNames from 'classnames';
import { ButtonsGlobalProps, Colors, Size } from '@/components/types';
import './button.scss';
import { Typography } from '@/typography';

export interface ButtonProps extends ButtonsGlobalProps {
    /**
     * The color of the button. It determines the background and text color.
     * Expected values: 'primary', 'secondary', 'tertiary', 'ghost', 'danger-ghost', 'danger-secondary', 'danger-tertiary', 'danger', 'initial' ,'link'
     */
    color?: Colors | 'link';
    /**
     * The size of the button. It determines the padding and font size.
     * Expected values: 'sm' for small, 'md' for medium
     */
    size?: Size;
    /**
     * If true, the button is disabled and cannot be interacted with.
     * Default value: false
     */
    disabled?: boolean;
    /**
     * If true, a loading spinner is shown inside the button, indicating a loading state.
     * Default value: false
     */
    loading?: boolean;
    /**
     * If true, the button expands to the full width of its container.
     * Default value: false
     */
    block?: boolean;
    /**
     * An optional icon element to be displayed to the left of the button text.
     * This prop expects a JSX element, such as an icon component.
     */
    lefticon?: JSX.Element;
    /**
     * An optional icon element to be displayed to the right of the button text.
     * This prop expects a JSX element, such as an icon component.
     */
    righticon?: JSX.Element;

    testId?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & ButtonsGlobalProps>(
    (
        {
            size,
            className,
            color,
            disabled,
            block,
            loading,
            children,
            lefticon,
            righticon,
            type = 'button',
            'aria-label': ariaLabel,
            testId,
            ...props
        },
        ref,
    ) => {
        const classes = classNames(
            'sob-v2-btn',
            color ? `sob-v2-btn-${color}` : 'sob-v2-btn-primary',
            lefticon ? 'sob-v2-btn-icon sob-v2-btn-icon-left' : '',
            righticon ? 'sob-v2-btn-icon sob-v2-btn-icon-right' : '',
            size !== 'md' ? `sob-v2-btn-${size}` : '',
            block ? 'sob-v2-btn-block' : '',
            loading ? 'sob-v2-btn-loading' : '',
            className,
        );

        return (
            <button
                ref={ref}
                data-testid={testId}
                className={classes}
                disabled={loading || disabled}
                type={type}
                aria-busy={loading}
                aria-live={loading ? 'polite' : undefined}
                aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
                aria-pressed={props['aria-pressed']}
                aria-expanded={props['aria-expanded']}
                {...props}
            >
                {lefticon && <div aria-hidden='true'>{lefticon}</div>}
                <Typography type='label' size={color === 'link' ? (size === 'sm' ? 'xs' : 'sm') : 'sm'} as='span'>
                    {children}
                </Typography>
                {righticon && <div aria-hidden='true'>{righticon}</div>}
                {loading && (
                    <div className='btn-loader' aria-hidden='true'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
            </button>
        );
    },
);
Button.displayName = 'Button';
export { Button };
