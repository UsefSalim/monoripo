import classNames from 'classnames';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type NavBarLogoProps<T extends React.ElementType> = {
    as?: T;
    className?: string;
    children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

const NavBarLogo = <T extends ElementType = 'a'>({ children, className, as, ...props }: NavBarLogoProps<T>) => {
    const Tag = as || 'a';
    const classes = classNames('sob-v2-navbar-logo', className);

    return (
        <Tag className={classes} {...props} id='sob-v2-navbar-logo'>
            {children}
        </Tag>
    );
};

export { NavBarLogo };
