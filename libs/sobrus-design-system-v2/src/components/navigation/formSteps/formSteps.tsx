import React, { CSSProperties, FC, ReactNode } from 'react';
import classNames from 'classnames';
import './formStep.scss';
export interface FormStepsProps {
    /**
     * 	The content of the component.
     */
    children?: ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    className?: string;
    /**
     * Styles applied to the root element.
     */
    style?: CSSProperties;
    // onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

/**
 *
 *
 * FormSteps with multiple steps is used the primary color of project
 *
 * ###Usage
 *
 *```JSX
 *
 * import {FormSteps, FormStep} from "@sobrus-com/sobrus-design-system"
 *
 *  return (
 *      <FormSteps {...args}>
            <FormStep text="Informations principales" number={1} active succes />
            <FormStep text="Régime d'affiliation" number={2} active />
            <FormStep text="Informations médicales" number={3} last />
        </FormSteps>
 *    );
 *   }
 * ```
 *
 *
 */

const FormSteps: FC<FormStepsProps> = ({ children, className, style }) => {
    const classes = classNames('sob-v2-multistep-container', className);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export { FormSteps };
