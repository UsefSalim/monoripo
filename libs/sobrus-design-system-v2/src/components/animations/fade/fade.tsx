import React, { useState, useEffect, forwardRef, cloneElement, ReactElement } from 'react';
import classNames from 'classnames';
import { DivGlobalProps } from '@/components/types';

export interface FadeProps extends DivGlobalProps {
    /**
     * Controls whether the children should be shown with the fade animation.
     */
    in?: boolean;
    /**
     * Duration of the fade animation in milliseconds.
     */
    timeout?: number;
    /**
     * The content to be rendered inside the fade transition.
     */
    children: React.ReactNode;
    /**
     *!! add description
     */
    defaultRender?: boolean;
}

/**
 * Fade Animation Component
 *
 * The `Fade` component is designed to provide a smooth fade-in and fade-out animation for its children elements.
 * It is particularly useful when you need to display or hide content gradually rather than abruptly, making transitions
 * more appealing and user-friendly.
 *
 * The component accepts a `boolean` prop (`in`) to control the visibility of its children and applies a customizable
 * transition duration through the `timeout` prop, which defaults to 300 milliseconds. It uses CSS classes to handle
 * the animation phases.
 *
 * The fade effect starts when `in` is set to `true`, causing the component to fade in. When `in` is set to `false`,
 * the content fades out and unmounts after the transition completes.
 *
 * The component now also accepts a `ref`, allowing the parent component to reference the underlying DOM node for
 * further manipulation if needed.
 *
 * ### Props:
 * - `in`: (boolean) Controls whether the children should be shown or hidden with a fade animation.
 * - `timeout`: (number) Optional. Specifies the duration of the fade animation in milliseconds. Defaults to 300ms.
 * - `children`: (React.ReactNode) The content to be rendered within the fade animation.
 * - `ref`: (React.Ref) A forwarded ref to the underlying div element.
 *
 * ### Usage
 *
 * ```JSX
 * import React, { useRef } from 'react';
 * import { Fade } from "@sobrus-com/sobrus-design-system";
 *
 * const Example = () => {
 *    const fadeRef = useRef(null);
 *
 *    return (
 *      <Fade ref={fadeRef} in={true} timeout={500}>
 *        <Card title="title">
 *          <CardItem
 *            title="Subsection"
 *            value="Lorem ipsum dolor sit amet consectetur adipisicing elit.
 *                    Dolor voluptas cum amet dolorem nihil! Ratione excepturi consequatur dolor,
 *                    ex sunt soluta officiis libero laudantium porro natus nemo tempore explicabo.
 *                    Illo id distinctio atque libero delectus suscipit quaerat reiciendis natus voluptatibus"
 *          />
 *        </Card>
 *      </Fade>
 *    );
 * };
 * ```
 *
 * This example demonstrates how to wrap content inside the `Fade` component, giving it a fade-in and fade-out transition,
 * and also how to use a `ref` to reference the component if needed.
 */

const Fade = forwardRef<HTMLElement, FadeProps>(
    ({ in: inProp = true, timeout = 300, children, className, defaultRender = true, style, ...props }, ref) => {
        const [show, setShow] = useState(false);
        const [render, setRender] = useState(false);
        const classes = classNames('fade', { show }, className);

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

        // Clone the first child and pass the props, className, and ref to it
        const child = cloneElement(children as ReactElement, {
            className: classNames(classes, children.props.className),
            style: {
                transition: show ? `opacity ${timeout}ms ease-out` : `opacity ${timeout}ms ease-in`,
                opacity: !show ? 0 : 1,
                ...style,
                ...children.props.style,
            },
            ref,
            ...props,
        });

        return render ? child : null;
    },
);
Fade.displayName = 'Fade';

export { Fade };
