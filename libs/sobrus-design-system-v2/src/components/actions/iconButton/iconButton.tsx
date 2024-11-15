import { forwardRef } from 'react';
import classNames from 'classnames';
import './../button/button.scss';
import './iconButton.scss';
import { ButtonsGlobalProps, Colors, Size } from '@/components/types';

export interface IconButtonProps extends ButtonsGlobalProps {
    /**
     * The color of the button. It determines the background and text color.
     * Expected values: 'primary', 'secondary', 'tertiary', 'ghost', 'danger-ghost', 'danger-secondary', 'danger-tertiary', 'danger', 'initial' ,'link'
     */
    color?: Colors;
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

    testId?: string;
}
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            size,
            className,
            color,
            disabled,
            block,
            loading,
            children,
            type = 'button',
            'aria-label': ariaLabel,
            testId,
            ...props
        },
        ref,
    ) => {
        const classes = classNames(
            'sob-v2-btn',
            'sob-v2-icon-btn',
            color ? `sob-v2-btn-${color}` : 'sob-v2-btn-primary',
            size !== 'md' ? `sob-v2-btn-${size}` : '',
            size !== 'md' ? `sob-v2-icon-btn-${size}` : '',
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
                {children}
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
IconButton.displayName = 'IconButton';
export { IconButton };
