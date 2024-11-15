import { Children, cloneElement, forwardRef, isValidElement, ReactElement, useMemo } from 'react';
import classNames from 'classnames';
import { DivGlobalProps, Size } from '@/components/types';
import './compositeInput.scss';
export interface CompositeInput extends DivGlobalProps {
    disabled?: boolean;
    size?: Size;
}

const CompositeInput = forwardRef<HTMLDivElement, CompositeInput>(
    ({ className, children, disabled, size, ...props }, ref) => {
        const classes = classNames('sob-v2-compositeInput-container', className);
        const childrenArray = useMemo(() => Children.toArray(children), [children]);

        const childrenWithoutWidthCount = useMemo(() => {
            return childrenArray.reduce((count: number, child) => {
                if (isValidElement(child) && (child.props.width === undefined || child.props.width === null)) {
                    return count + 1;
                }
                return count;
            }, 0);
        }, [childrenArray]);

        return (
            <div className={classes} ref={ref} {...props}>
                {Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        let childWidth = child.props.width;
                        if (childWidth === undefined) {
                            childWidth = 100 / childrenWithoutWidthCount + '%';
                        }
                        // console.log({ childWidth }); // Remove or comment out for production
                        return cloneElement(child as ReactElement<any>, {
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
                {Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement<any>, {
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
