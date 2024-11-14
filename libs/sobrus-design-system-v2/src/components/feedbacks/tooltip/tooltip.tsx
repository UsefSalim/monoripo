import React, { FC, ReactNode } from 'react';
import { ChildrenType, PlacesType, Tooltip as ReactTooltip } from 'react-tooltip';
import { GlobalProps } from '@/components/types';
import classNames from 'classnames';

import './tooltip.scss';
export interface TooltipProps extends GlobalProps {
    /**
     * Position relative to the anchor element where the tooltip will be rendered (if possible)
     */
    place?: PlacesType;
    /**
     * 	Content to de displayed in tooltip (html prop is priorized over content)
     */
    content?: ReactNode;
    /**
     * 	customContent to de displayed in tooltip (html prop is priorized over content) if the style of content is not compatible
     */
    customContent?: ReactNode;
    /**
     * id must be de same  data-tooltip-id passed in parent element
     */
    anchorSelect?: string;
    clickable?: boolean;
    id?: string;
    render?: ((render: { content: string | null; activeAnchor: HTMLElement | null }) => ChildrenType) | undefined;
    delayHide?: number;
}

/**
  * Support button with dropdown in single line of code.
 *
 * ###Usage
 *
 *```JSX
 *
 * import { Tooltip } from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
        <div>
            <p data-tooltip-id="my-element">Tooltip</p>
            <Tooltip
                id="my-element"
                content={<p>The doctor cancelled the appointments with <br />
                    this patient because he didn’t show up
                </p>}
            />
        </div>
 *    );
*   }
 * ```
 *
 */

export const Tooltip: FC<TooltipProps> = ({
    content,
    anchorSelect,
    place = 'top',
    customContent,
    className,
    children,
    ...props
}) => {
    const tooltipClassName = classNames('sob-v2-tooltip', className);
    return (
        <>
            {children && React.cloneElement(children as React.ReactElement<any>, { id: anchorSelect })}
            <ReactTooltip
                {...props}
                place={place}
                className={tooltipClassName}
                anchorSelect={anchorSelect && '#' + anchorSelect}
            >
                {customContent ?? <div className='sob-v2-tooltip-container'>{content}</div>}
            </ReactTooltip>
        </>
    );
};

export * from 'react-tooltip';
export { Tooltip as ReactTooltip } from 'react-tooltip';
