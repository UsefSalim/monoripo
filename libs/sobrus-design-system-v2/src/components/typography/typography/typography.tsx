import classNames from 'classnames';
import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';
import './typography.scss';

type TypographyVariants =
    | { type: 'p'; size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' }
    | { type: 'label'; size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' }
    | { type: 'heading'; size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' };

type TypographyProps<T extends ElementType> = TypographyBaseProps<T> & TypographyVariants;

const mapTypes = {
    p: 'font-paragraph',
    label: 'font-label',
    heading: 'font-heading',
};
const mapSizes = {
    xxs: 'xx-small',
    xs: 'x-small',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xl: 'x-large',
};

export type TextColors =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primary-inverse'
    | 'secondary-inverse'
    | 'tertiary-inverse'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'link'
    | 'link-disabled';
export type TypographyBaseProps<T extends ElementType> = {
    /**
     * The HTML element or custom component to render as the root element.
     * Default is `'div'`.
     */
    as?: T;
    /**
     * Additional class names for custom styling.
     */
    className?: string;
    /**
     * The content to display inside the typography component.
     */
    children: ReactNode;
    /**
     * The color options for text elements, defining their semantic meaning and associated color values.
     */
    color?: TextColors;
    /**
     * !! add documentation
     */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & ComponentPropsWithoutRef<T>;

const Typography = <T extends ElementType = 'div'>({
    className,
    as,
    size = 'md',
    type = 'p',
    color,
    children,
    ...props
}: TypographyProps<T>) => {
    const Tag = as || 'div';

    const classes = classNames(`${mapTypes[type]}-${mapSizes[size]}`, color, className);
    return (
        <Tag className={classes} {...props} data-size={`${mapTypes[type]}/${mapSizes[size]}`}>
            {children}
        </Tag>
    );
};

export { Typography };
