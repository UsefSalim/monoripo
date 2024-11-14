import { forwardRef } from 'react';
import classNames from 'classnames';
import { Button } from '@/actions';
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
    ({ className, size, children, type, ...props }, ref) => {
        const classes = classNames('sob-v2-icon-btn', size ? `sob-v2-icon-btn-${size}` : '', className);

        return (
            <Button ref={ref} type={type} className={classes} {...props}>
                {children}
            </Button>
        );
    },
);
IconButton.displayName = 'IconButton';
export { IconButton };
