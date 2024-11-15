import { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import { ButtonsGlobalProps } from '@/components/types';
import { Typography } from '@/typography';

import './dashedButton.scss';
import { HiOutlinePlus } from 'react-icons/hi';

export interface DashedButtonProps extends ButtonsGlobalProps {
    /**
     * (optional, ReactNode) The icon to display inside the button. Defaults to a plus icon.
     */
    icon?: ReactNode;
    /**
     * (optional, boolean) If true, the button has a square shape, and the label will be hidden.
     */
    square?: boolean;
    /**
     * (optional, boolean) If true, the button is disabled and non-interactive.
     */
    disabled?: boolean;
}

const DashedButton = forwardRef<HTMLButtonElement, DashedButtonProps>(
    ({ className, icon = <HiOutlinePlus size={20} color='#4CAACE' />, children, square, ...props }, ref) => {
        const classes = classNames('sob-v2-btn', 'dashed-btn', square ? 'dashed-btn-square' : false, className);

        return (
            <button ref={ref} className={classes} {...props}>
                {!square && (
                    <Typography type='label' size='md'>
                        {children}
                    </Typography>
                )}
            </button>
        );
    },
);
DashedButton.displayName = 'DashedButton';
export { DashedButton };
