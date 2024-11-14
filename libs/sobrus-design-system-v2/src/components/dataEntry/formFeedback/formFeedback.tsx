import React, { FC } from 'react';
import classNames from 'classnames';
import { DivGlobalProps } from '@/components/types';

import './formFeedback.scss';
export interface FormFeedbackProps extends DivGlobalProps {
    /**
     * 	If true, the component is invalid style.
     */
    invalid?: boolean;
    /**
     * 	If true, the component is displayed.
     */
    display?: boolean;
    /**
     * 	If true, the component is disabled.
     */
    disabled?: boolean;
}

const FormFeedback: FC<FormFeedbackProps> = ({ className, invalid, disabled, style, display, children, ...props }) => {
    const classes = classNames(
        'sob-v2-feedback',
        disabled ? 'sob-v2-feedback-disabled' : false,
        invalid ? 'sob-v2-feedback-invalid' : false,
        className,
    );
    return (
        <div {...props} style={display || invalid ? { display: 'block', ...style } : style} className={classes}>
            {children}
        </div>
    );
};

export { FormFeedback };
