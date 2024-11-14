import React, { CSSProperties, ReactNode, forwardRef, useMemo } from 'react';
import classNames from 'classnames';
import { DivGlobalProps, Size } from '@/components/types';

export interface CompositeInput extends DivGlobalProps {
    disabled?: boolean;
    size?: Size;
}
/**
 *
 * <strong>A flexible CompositeInput. <br />
 * Use any Input type (InputSelect AsyncSelect....), wrap each input with a and add the desired width,<br />
 * Use any width to achieve the requirements</strong>
 *
 * ##Usage
 *
 *```JSX
 *
 * import {FormGroup,Label,CompositeInput,FormFeedback} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *      <FormGroup>
                <Label for="exampleSelect">Search select</Label>
                <CompositeInput>
                    <div style={{ width: '75%' }}>
                      <Input placeholder='text' name='composite' type='text' />
                    </div>
                    <div style={{ width: '25%' }}>
                      <InputSelect
                          // value={value}
                          // onChange={(e) => setValue(e)}
                          options={[
                              { value: 'hours', label: 'Heures' },
                              { value: 'days', label: 'Jours' },
                              { value: 'months', label: 'Mois' },
                              { value: 'years', label: 'Années' },
                          ]}
                      />
                    </div>
                </CompositeInput>
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
        </FormGroup>
 *    );
 *   }
 * ```
 *
 *
 *
 *
 *
 */

const CompositeInput = forwardRef<HTMLDivElement, CompositeInput>(
    ({ className, children, disabled, size, ...props }, ref) => {
        const classes = classNames('sob-v2-compositeInput-container', className);
        const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

        const childrenWithoutWidthCount = useMemo(() => {
            return childrenArray.reduce((count: number, child) => {
                if (React.isValidElement(child) && (child.props.width === undefined || child.props.width === null)) {
                    return count + 1;
                }
                return count;
            }, 0);
        }, [childrenArray]);

        return (
            <div className={classes} ref={ref} {...props}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        let childWidth = child.props.width;
                        if (childWidth === undefined) {
                            childWidth = 100 / childrenWithoutWidthCount + '%';
                        }
                        // console.log({ childWidth }); // Remove or comment out for production
                        return React.cloneElement(child as React.ReactElement<any>, {
                            childWidth: childWidth,
                            disabled: disabled,
                            size: size,
                            style: { ...child.props.style },
                        });
                    }
                    return child;
                })}
            </div>
        );
    },
);

type CompositeElementProps = React.HTMLAttributes<HTMLDivElement> & {
    width?: string | number;
    childWidth?: string | number;
    length?: number;
    disabled?: boolean;
    tag?: boolean;
    size?: Size;
};

const CompositeElement = forwardRef<HTMLDivElement, CompositeElementProps>(
    ({ className, width, style, children, childWidth, disabled, size, tag, ...props }, ref) => {
        const classes = classNames(
            'sob-v2-compositeInput-item',
            disabled ? 'sob-v2-compositeInput-item-disabled' : '',
            tag ? 'sob-v2-compositeInput-item-tag' : '',
            size ? `sob-v2-compositeInput-item-${size}` : '',
            className,
        );
        return (
            <div className={classes} ref={ref} style={{ ...style, width: width || childWidth }} {...props}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as React.ReactElement<any>, {
                            disabled: disabled,
                            size: size,
                            style: { ...child.props.style },
                        });
                    }
                    return child;
                })}
            </div>
        );
    },
);

export { CompositeInput, CompositeElement };
