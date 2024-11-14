import { useEffect, useRef, ReactNode, cloneElement, isValidElement, Children, ReactElement } from 'react';
import classNames from 'classnames';
import './buttonGroup.scss';
import { DivGlobalProps, Size } from '@/components/types';

export interface ButtonGroupProps extends DivGlobalProps {
    /**
     * Defines the size of the button group. It accepts values like `'sm'` (small) or `'md'` (medium).
     */
    size?: Size;
    /**
     * (optional) If true, all buttons in the group are disabled.
     */
    disabled?: boolean;
    /**
     * Children elements, expected to be buttons or button-like components.
     */
    children: ReactNode;
}

export const ButtonGroup = ({ className, size, children, disabled, ...props }: ButtonGroupProps) => {
    const classes = classNames('sob-v2-btn-group', className);
    const groupButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (groupButtonRef.current && disabled) {
            const buttonChildren = groupButtonRef.current.children;
            for (let i = 0; i < buttonChildren.length; i++) {
                (buttonChildren[i] as HTMLButtonElement).disabled = true;
            }
        }
    }, [disabled]);

    const renderChildrenWithProps = () =>
        Children.map(children, (child) =>
            isValidElement(child)
                ? cloneElement(child as ReactElement<{ size?: Size; disabled?: boolean }>, { size, disabled })
                : child,
        );

    return (
        <div ref={groupButtonRef} {...props} className={classes}>
            {renderChildrenWithProps()}
        </div>
    );
};
