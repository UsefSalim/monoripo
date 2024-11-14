import { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import { ButtonsGlobalProps } from '@/components/types';

import './dashedButton.scss';

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

/**
 * The `DashedButton` component is a customizable button that allows users to take actions and make choices.
 * It supports all standard HTMLButtonElement and ButtonHTMLAttributes props.
 * The button can display an icon, and it has an optional square shape.
 *
 * ### Props:
 *
 * - `icon`: (optional, ReactNode) The icon to display inside the button. Defaults to a plus icon.
 * - `square`: (optional, boolean) If true, the button has a square shape, and the label will be hidden.
 * - `disabled`: (optional, boolean) If true, the button is disabled and non-interactive.
 * - Supports all other standard `HTMLButtonElement` and `HTMLAttributes` props.
 *
 * ### Usage:
 *
 * Here's a basic example of how to use the `DashedButton` component:
 *
 * ```jsx
 *
 * import { DashedButton } from '@sobrus-com/sobrus-design-system';
 *
 * const Example = () => {
 *   return (
 *     <div>
 *       <DashedButton>Sobrus Dashed Button</DashedButton>
 *       <DashedButton square icon={<HiOutlinePlus size={20} color="#4CAACE" />} />
 *     </div>
 *   );
 * };
 * ```
 *
 * In this example, `DashedButton` is used with and without the square prop, showing both the default and square versions.
 */
const DashedButton = forwardRef<HTMLButtonElement, DashedButtonProps>(
    ({ className, icon, children, square, ...props }, ref) => {
        const classes = classNames('sob-v2-btn', 'dashed-btn', square ? 'dashed-btn-square' : false, className);

        return (
            <button ref={ref} className={classes} {...props}>
                {!square && <span>{children}</span>}
            </button>
        );
    },
);
DashedButton.displayName = 'DashedButton';
export { DashedButton };
