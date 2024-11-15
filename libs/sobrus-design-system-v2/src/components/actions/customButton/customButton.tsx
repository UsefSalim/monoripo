import { forwardRef } from 'react';
import classNames from 'classnames';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IconButton } from '@/actions';

import './customButton.scss';

import { ReactNode } from 'react';
import { DivGlobalProps, Size } from '@/components/types';
import { Typography } from '@/typography';

export interface CustomButtonProps extends DivGlobalProps {
    /**
     * The background color of the button’s icon container.
     */
    bgColor: string;
    /**
     * (optional, Size) Defines the size of the button (sm or md). Defaults to `'md'`.
     */
    size?: Size;
    /**
     * (optional, boolean) If true, the button is disabled and cannot be interacted with.
     */
    disabled?: boolean;
    /**
     * (ReactNode) The text label that is displayed inside the button.
     */
    label: ReactNode;
    /**
     * (optional, JSX.Element) The icon to display inside the button's icon container.
     */
    icon?: JSX.Element;
    /**
     *  (optional, ReactNode) Additional description content, typically displayed next to an arrow icon.
     */
    actionDescripton?: ReactNode;
}

const CustomButton = forwardRef<HTMLDivElement, CustomButtonProps>(
    ({ className, icon, label, size = 'md', bgColor, disabled, actionDescripton, onClick, ...props }, ref) => {
        const buttonClasses = classNames(
            'sob-v2-btn-custom',
            `sob-v2-btn-custom-${size}`,
            disabled ? 'sob-v2-btn-custom-disabled' : '',
            className,
        );
        const contaiinerClasses = classNames(
            'sob-v2-btn-custom-container',
            `sob-v2-btn-custom-container-${size}`,
            disabled ? 'sob-v2-btn-custom-disabled' : '',
            className,
        );
        const textClasses = classNames('sob-v2-btn-custom-text');
        const arrowClasses = classNames(
            'sob-v2-btn-custom-arrow-container',
            disabled ? 'sob-v2-btn-custom-arrow-container-disabled' : '',
        );

        return (
            <div ref={ref} className={contaiinerClasses} onClick={onClick} {...props}>
                <div className={buttonClasses}>
                    <div className='sob-v2-btn-custom-body'>
                        <IconButton
                            size={size}
                            color='initial'
                            className='sob-v2-btn-custom-icon-container'
                            style={{ backgroundColor: bgColor }}
                            disabled={disabled}
                        >
                            {icon}
                        </IconButton>
                        <Typography
                            size='sm'
                            type='label'
                            color={disabled ? 'link-disabled' : undefined}
                            className={textClasses}
                        >
                            {label}
                        </Typography>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                    <span>{actionDescripton}</span>
                    <IconButton disabled={disabled} size='sm' color='initial' className={arrowClasses}>
                        <AiOutlineArrowRight color='#02829F' size={size === 'sm' ? 15 : 18}></AiOutlineArrowRight>
                    </IconButton>
                </div>
            </div>
        );
    },
);
CustomButton.displayName = 'CustomButton';
export { CustomButton };
