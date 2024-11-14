import React, { useState, useEffect, forwardRef, cloneElement, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { DivGlobalProps } from '@/components/types';
export interface ZoomProps extends DivGlobalProps {
    /**
     * Controls whether the children should be shown with the zoom animation.
     */
    in: boolean;
    /**
     * Duration of the zoom animation in milliseconds.
     */
    timeout?: number;
    /**
     * The content to be rendered inside the zoom transition.
     */
    children: ReactNode;
    /**
     *!! add description
     */
    defaultRender?: boolean;
}

/**
 * Zoom Animation Component
 *
 * The `Zoom` component provides a smooth zoom-in and zoom-out animation for its children elements.
 * It is useful for scaling elements in or out, creating a visually engaging transition for content visibility changes.
 *
 * The component accepts a `boolean` prop (`in`) to control the visibility and scaling of its children.
 * The `timeout` prop controls the duration of the animation, with a default value of 300 milliseconds.
 *
 * When `in` is set to `true`, the children zoom in. When `in` is `false`, the content zooms out and unmounts after the animation.
 *
 * The component now also accepts a `ref`, allowing the parent component to reference the underlying DOM node for
 * further manipulation if needed.
 *
 * ### Props:
 * - `in`: (boolean) Controls whether the children should be scaled in or out with a zoom animation.
 * - `timeout`: (number) Optional. Specifies the duration of the zoom animation in milliseconds. Defaults to 300ms.
 * - `children`: (React.ReactNode) The content to be rendered within the zoom animation.
 * - `ref`: (React.Ref) A forwarded ref to the underlying div element.
 *
 * ### Usage
 *
 * ```JSX
 * import React, { useRef } from 'react';
 * import { Zoom } from "@sobrus-com/sobrus-design-system";
 *
 * const Example = () => {
 *    const zoomRef = useRef(null);
 *
 *    return (
 *      <Zoom ref={zoomRef} in={true} timeout={500}>
 *        <Card title="title">
 *          <CardItem
 *            title="Subsection"
 *            value="Lorem ipsum dolor sit amet consectetur adipisicing elit.
 *                    Dolor voluptas cum amet dolorem nihil! Ratione excepturi consequatur dolor,
 *                    ex sunt soluta officiis libero laudantium porro natus nemo tempore explicabo.
 *                    Illo id distinctio atque libero delectus suscipit quaerat reiciendis natus voluptatibus"
 *          />
 *        </Card>
 *      </Zoom>
 *    );
 * };
 * ```
 *
 * This example shows how to wrap content inside the `Zoom` component to add a zoom-in and zoom-out transition,
 * and also how to use a `ref` to reference the component if needed.
 */
const Zoom = forwardRef<HTMLElement, ZoomProps>(
    ({ in: inProp = true, timeout = 300, children, className, defaultRender = true, style, ...props }, ref) => {
        const [show, setShow] = useState(false);
        const [render, setRender] = useState(false);

        useEffect(() => {
            if (inProp) {
                setRender(true); // Start rendering the component when 'in' is true
                const timer = setTimeout(() => setShow(true), 20); // Give time for the DOM to paint before animating
                return () => clearTimeout(timer);
            } else {
                if (defaultRender) {
                    setShow(false);
                    const timer = setTimeout(() => setRender(false), timeout); // Unmount after animation
                    return () => clearTimeout(timer);
                } else {
                    setShow(false);
                    setRender(false);
                }
            }
        }, [inProp, timeout, defaultRender]);

        if (!React.isValidElement(children)) {
            // If children is not a valid React element, render nothing
            return null;
        }

        // Clone the first child and pass the necessary props and styles to it
        const child = cloneElement(children as ReactElement, {
            className: classNames('zoom', className, children.props.className),
            style: {
                transform: show ? 'scale(1)' : 'scale(0.5)',
                opacity: show ? 1 : 0,
                transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
                ...style, // Apply additional styles passed as props (e.g., transitionDelay)
                ...children.props.style, // Merge child's original styles
            },
            ref,
            ...props,
        });

        return render ? child : null;
    },
);
Zoom.displayName = 'Zoom';
export { Zoom };
