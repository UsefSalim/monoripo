import classNames from 'classnames';
import { LiGlobalProps, UlGlobalProps } from '@/components/types';
import React, { ReactNode, useRef } from 'react';
import { Tag } from '@/contentDisplay';

interface NavBarItems extends UlGlobalProps {
    plus?: ReactNode;
}

const NavBarItems = ({ children, className, plus = 'Plus', ...props }: NavBarItems) => {
    const classes = classNames('sob-v2-navbar-items', className);
    const popupRef = useRef<HTMLDivElement | null>(null);
    const populateTooltipContent = () => {
        const tooltipList = document.getElementById('sob-v2-navbar-plusTag-tooltip-list');
        if (popupRef.current && tooltipList && tooltipList.children.length > 0) {
            popupRef.current.style.visibility = 'visible';
        }
    };
    return (
        <>
            <ul id='sob-v2-navbar-items-ref' className={classes} {...props}>
                {children}
            </ul>
            <div
                onMouseEnter={() => {
                    populateTooltipContent();
                }}
                onMouseLeave={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        if (popupRef.current) {
                            popupRef.current.style.visibility = 'hidden';
                        }
                    }
                }}
            >
                <Tag
                    size='xs'
                    bgColor='var(--sob-v2-color-palette-secondary)'
                    textColor='var(--sob-v2-color-palette-primary)'
                    id='sob-v2-navbar-plusTag-ref'
                    className='sob-v2-navbar-plusTag'
                >
                    {plus}
                </Tag>
                <div id='sob-v2-navbar-plusTag-tooltip' ref={popupRef} className='sob-v2-navbar-plusTag-children'>
                    <ul className='sob-v2-navbar-plusTag-list' id='sob-v2-navbar-plusTag-tooltip-list'></ul>
                </div>
            </div>
        </>
    );
};
const NavBarItem = ({ children, className, ...props }: LiGlobalProps) => {
    const classes = classNames('sob-v2-navbar-item', className);
    return (
        <li className={classes} {...props}>
            {children}
        </li>
    );
};

// ///
type NavBarItemLinkProps<T extends React.ElementType> = {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
} & React.ComponentPropsWithoutRef<T>;

const NavBarItemLink = <T extends React.ElementType = 'a'>({
    className,
    as,
    children,
    onClick,
    ...props
}: NavBarItemLinkProps<T>) => {
    const Tag = as || 'a';
    const classes = classNames('sob-v2-navbar-itemLink', className);

    const handleClick: React.MouseEventHandler = (event) => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <div onClick={handleClick} className='sob-v2-navbar-subitemLink-container' role='link'>
            <Tag className={classes} {...props}>
                {children}
            </Tag>
        </div>
    );
};
// /
const NavBarSubItems = ({ children, className, ...props }: UlGlobalProps) => {
    const classes = classNames('sob-v2-navbar-subitems', className);
    return (
        <ul className={classes} {...props}>
            {children}
        </ul>
    );
};
// ////
const NavBarSubitem = ({ children, className, ...props }: LiGlobalProps) => {
    const classes = classNames('sob-v2-navbar-subitem', className);
    return (
        <li className={classes} {...props}>
            {children}
        </li>
    );
};

// ////
type NavBarSubitemLinkProps<T extends React.ElementType> = {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
} & React.ComponentPropsWithoutRef<T>;

const NavBarSubitemLink = <T extends React.ElementType = 'a'>({
    className,
    as,
    children,
    onClick,
    ...props
}: NavBarSubitemLinkProps<T>) => {
    const Tag = as || 'a';
    const classes = classNames('sob-v2-navbar-subitemLink', className);

    const handleClick: React.MouseEventHandler = (event) => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <div className='sob-v2-navbar-subitemLink-container' onClick={handleClick} role='link'>
            <Tag className={classes} {...props}>
                {children}
            </Tag>
        </div>
    );
};

export { NavBarItems, NavBarItemLink, NavBarItem, NavBarSubItems, NavBarSubitem, NavBarSubitemLink };
