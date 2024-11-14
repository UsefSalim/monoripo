import React, { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import { DivGlobalProps, HeadingsGlobalProps } from '@/components/types';
import { ItemLoader } from '@/contentDisplay';

export interface CardProps extends DivGlobalProps {
    /**
     * The main title of the card.
     * It can be any ReactNode such as a string, component, or element.
     */
    cardTitle?: ReactNode;
    /**
     * Optional icon to display next to the title.
     * This prop accepts any ReactNode such as an icon component.
     */
    IconButton?: ReactNode;
    /**
     * Optional button or element to be displayed on the right side of the card header.
     * This prop can be used for adding action buttons or additional options.
     */
    actionButton?: ReactNode;
    /**
     * Optional footer section containing buttons or elements for footer actions.
     */
    footerButton?: ReactNode;
    /**
     * If true, the card will have a visible border around it.
     * Default value: false
     */
    border?: boolean;
    /**
     * Determines the shadow size for the card.
     * Expected values: 'sm' for small, 'md' for medium, 'lg' for large.
     * Default value: 'sm'
     */
    shadow?: 'sm' | 'md' | 'lg';
}

/**
 * Card components are used to display content in a structured container.
 *
 * The `Card` component supports a variety of props for customization, including optional icons, actions, shadows, borders, and footer elements.
 * It also accepts a `ref` for accessing the underlying `div` element, making it suitable for flexible layouts and interactions.
 *
 * ### Props:
 *
 * - `cardTitle`: (optional) The title of the card, typically displayed at the top.
 *   - Expected values: any valid ReactNode (string, element, component, etc.)
 *
 * - `IconButton`: (optional) A JSX element (e.g., an icon component) displayed next to the card title.
 *
 * - `actionButton`: (optional) A JSX element (e.g., a button component) displayed on the right side of the card header for actions.
 *
 * - `footerButton`: (optional) A JSX element (e.g., buttons) displayed at the bottom of the card, often used for footer actions.
 *
 * - `border`: (optional) Adds a border around the card.
 *   - Expected values: boolean (true for enabling a border)
 *   - Default: false
 *
 * - `shadow`: (optional) Defines the shadow intensity for the card.
 *   - Expected values: 'sm' for small, 'md' for medium, 'lg' for large shadows
 *   - Default: 'sm'
 *
 * - `ref`: (optional) A forwarded ref for accessing the underlying `div` element.
 *
 * - Supports all other default div properties through `DivHTMLAttributes<HTMLDivElement>`.
 *
 * ### Usage:
 *
 * Here is an example of how to use the `Card` component:
 *
 * ```jsx
 *
 * import { Card, CardItem } from '@sobrus-com/sobrus-design-system-v2';
 *
 * const Example = () => (
 *    <Card cardTitle="Sample Card" border shadow="md">
 *        <CardItem label="Label" value="Content goes here." />
 *        <CardItem label="Label" value="More content here." />
 *    </Card>
 * );
 * ```
 *
 * In this example, the `Card` component is used to create a structured container with a title, content, and border.
 * You can also customize the card with other props like icons, action buttons, and footer actions.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            children,
            className,
            cardTitle,
            IconButton,
            actionButton,
            footerButton,
            style,
            border = false,
            shadow = 'sm',
            ...props
        },
        ref,
    ) => {
        const classes = classNames(
            'sob-v2-card',
            border && 'sob-v2-card-border',
            shadow && `sob-v2-card-shadow-${shadow}`,
            className,
        );

        return (
            <div ref={ref} className={classes} style={style} {...props}>
                {(cardTitle || IconButton || actionButton) && (
                    <div className='sob-v2-card-header-container'>
                        <div className='sob-v2-card-title-container'>
                            {IconButton && <div className='sob-v2-card-icon-container'>{IconButton}</div>}
                            {cardTitle && <h2 className='sob-v2-card-title'>{cardTitle}</h2>}
                        </div>
                        {actionButton && <div className='sob-v2-card-action'>{actionButton}</div>}
                    </div>
                )}

                {children && <div className='sob-v2-card-content'>{children}</div>}

                {footerButton && <div className='sob-v2-card-footer-container'>{footerButton}</div>}
            </div>
        );
    },
);

Card.displayName = 'Card';

/**
 * CardTitle component used to render a title within the card.
 *
 * Accepts all heading props and additional className for styling.
 */
export const CardTitle = forwardRef<HTMLHeadingElement, HeadingsGlobalProps>(
    ({ children, className, ...props }, ref) => {
        const classes = classNames('sob-v2-card-title sob-v2-card-title-outheader', className);

        return (
            <h4 ref={ref} className={classes} {...props}>
                {children}
            </h4>
        );
    },
);

CardTitle.displayName = 'CardTitle';

/**
 * CardSubTitle component used to render a subtitle within the card.
 *
 * Accepts all heading props and additional className for styling.
 */
export const CardSubTitle = forwardRef<HTMLHeadingElement, HeadingsGlobalProps>(
    ({ children, className, ...props }, ref) => {
        const classes = classNames('sob-v2-card-subtitle', className);

        return (
            <h6 ref={ref} className={classes} {...props}>
                {children}
            </h6>
        );
    },
);

CardSubTitle.displayName = 'CardSubTitle';

export interface CardItemProps extends DivGlobalProps {
    label?: ReactNode;
    loading?: boolean;
}

/**
 * CardItem component for rendering individual items inside the card.
 *
 * Accepts a `label` prop for the title of the item and renders content within the card.
 */
export const CardItem = forwardRef<HTMLDivElement, CardItemProps>(
    ({ className, label, loading, children, ...props }, ref) => {
        const classes = classNames('sob-v2-card-item', className);

        return (
            <div ref={ref} className={classes} {...props}>
                {label ? <h4 className='sob-v2-card-item-title'>{label}</h4> : null}
                <div className='sob-v2-card-item-value'>{loading ? <ItemLoader width={100} /> : children}</div>
            </div>
        );
    },
);

CardItem.displayName = 'CardItem';

/**
 * CardBody component for rendering the main content area of the card.
 *
 * Accepts an optional `label` and renders content within the body of the card.
 */

export interface CardBodyProps extends DivGlobalProps {
    label?: ReactNode;
}
export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
    ({ className, label, style, children, ...props }, ref) => {
        const classes = classNames('sob-v2-card-body', className);

        return (
            <div ref={ref} className={classes} style={style} {...props}>
                {label ? <div className='sob-v2-card-body-label'>{label}</div> : null}
                {children}
            </div>
        );
    },
);

CardBody.displayName = 'CardBody';
