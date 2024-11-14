/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { CSSProperties, ComponentType, FC, ReactElement, ReactNode, useRef } from 'react';
import classNames from 'classnames';

export interface communProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    textTranslate?: { [key: string]: ReactNode };
}

export type megaNavBarItemsProps = communProps;
/**
 * @deprecated Use `NavBar` instead. This component will be removed in a future release.
 */
export const MegaNavBarItems: FC<megaNavBarItemsProps> = ({ children, className, style, onClick, textTranslate }) => {
    const refWrapper = useRef<HTMLDivElement>(null);
    const refContainer = useRef<HTMLDivElement>(null);

    const handleHover = () => {
        if (refContainer.current) {
            refContainer.current.style.width = 'fit-content';
            const containerElement = refContainer.current;

            if (containerElement) {
                let totalRealWidth = 0;
                const containerElementBoundingRect = containerElement?.getBoundingClientRect();
                let lowestLeft = containerElementBoundingRect?.x;
                let highestRight = containerElementBoundingRect?.width;

                for (let i = 0; i < containerElement.children.length; i++) {
                    const child = containerElement.children[i] as HTMLElement;
                    const width = child?.getBoundingClientRect()?.width;
                    const x = child?.getBoundingClientRect()?.x;

                    if (x && x < lowestLeft) {
                        lowestLeft = x;
                    }
                    if (x && width && x + width > highestRight) {
                        highestRight = x + width;
                    }
                }

                totalRealWidth = (highestRight || 0) - (lowestLeft || 0) + 45;
                const remWidth = totalRealWidth / 16;
                containerElement.style.width = `${remWidth}rem`;
            }

            if (refWrapper.current && refWrapper.current.getBoundingClientRect().width > 900) {
                const wrapperStyle = refWrapper.current.style;
                wrapperStyle.position = 'fixed';
                wrapperStyle.top = '5.625rem';
                wrapperStyle.right = '0';
                wrapperStyle.left = '0';
                wrapperStyle.maxWidth = '95%';
            }
        }
    };

    const handleUnHover = () => {
        if (refContainer.current) {
            refContainer.current.style.width = 'fit-content';
        }
    };

    const classes = classNames('sob-v2-megaNavBar-items', className);
    return (
        <ul className={classes} id='refMegaNav' style={style} onClick={onClick}>
            {children}
            <li
                className='sob-v2-megaNavBar-item-plus'
                onMouseEnter={handleHover}
                onBlurCapture={handleUnHover}
                id='megaNav-more'
            >
                <a className='sob-v2-megaNavBar-plus'>
                    <span>{textTranslate && textTranslate.more ? textTranslate.more : 'Plus'}</span>
                </a>
                <div className='sob-v2-megaNavBar-plus-hoverKeeper' />
                <div className='sob-v2-megaNavBar-plus-triangle' />
                <div className='sob-v2-megaNavBar-plus-menu' id='refMegaNavWrapper' ref={refWrapper}>
                    <div
                        className='sob-v2-megaNavBar-plus-menu__items'
                        id='refMegaNavContainer'
                        ref={refContainer}
                    ></div>
                    <div className='padding-clone' />
                </div>
            </li>
        </ul>
    );
};

export type megaNavBarItemProps = communProps;
/**
 * @deprecated Use `NavBar` instead. This component will be removed in a future release.
 */
export const MegaNavBarItem: FC<megaNavBarItemProps> = ({ children, className, style, onClick }) => {
    const classes = classNames('sob-v2-megaNavBar-item', className);

    return (
        <li className={classes} style={style} onClick={onClick}>
            {children}
        </li>
    );
};

export interface megaNavBarItemLinkProps extends communProps {
    title?: string;
    Tag?: any;
    [x: string]: any;
}
/**
 * @deprecated Use `NavBar` instead. This component will be removed in a future release.
 */
export const MegaNavBarItemLink: FC<megaNavBarItemLinkProps> = ({ children, title, Tag = 'a', ...props }) => {
    return (
        <Tag {...props}>
            <div title={title}>
                <span>{children}</span>
            </div>
        </Tag>
    );
};

export type megaNavBarItemSubMenuProps = communProps;
/**
 * @deprecated Use `NavBar` instead. This component will be removed in a future release.
 */
export const MegaNavBarItemSubMenu: FC<megaNavBarItemSubMenuProps> = ({ children, className, style, onClick }) => {
    const classes = classNames('sob-v2-megaNavBar-subMenu', className);

    return (
        <ul className={classes} style={style} onClick={onClick}>
            {children}
        </ul>
    );
};

export type MegaNavBarItemSubMenuItemProps = communProps;
/**
 * @deprecated Use `NavBar` instead. This component will be removed in a future release.
 */
export const MegaNavBarItemSubMenuItem: FC<MegaNavBarItemSubMenuItemProps> = ({ children, style, onClick }) => {
    return (
        <li style={style} onClick={onClick}>
            {children}
        </li>
    );
};

export interface MegaNavBarItemSubMenuItemLinkProps extends communProps {
    title?: string;
    Tag?: any;
    [x: string]: any;
}
/**
 * @deprecated Use `NavBar` instead. This component will be removed in a future release.
 */
export const MegaNavBarItemSubMenuItemLink: FC<MegaNavBarItemSubMenuItemLinkProps> = ({
    children,
    title,
    Tag = 'a',
    ...props
}) => {
    return (
        <Tag {...props}>
            <div title={title}>{children}</div>
        </Tag>
    );
};
