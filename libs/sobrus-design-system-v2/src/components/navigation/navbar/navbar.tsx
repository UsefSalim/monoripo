import React, { useRef, ReactNode, useEffect } from 'react';
import { NavGlobalProps, Size } from '@/components/types';
import classNames from 'classnames';
import './navbar.scss';

interface NavbarProps extends NavGlobalProps {
    size: Size;
    children: ReactNode;
}

const Navbar = ({ size, className, children, ...props }: NavbarProps) => {
    const classes = classNames('sob-v2-navbar-container', className);
    const navRef = useRef<HTMLElement>(null);
    const isCalculated = useRef<boolean>(false);
    const removedItems = useRef<{ element: Element; width: number }[]>([]);
    const resizeObserver = useRef<ResizeObserver>();

    useEffect(() => {
        const handleResize = () => {
            if (navRef.current) {
                const resizeObserver = new ResizeObserver((entries) => {
                    for (const entry of entries) {
                        if (entry.target === navRef.current) {
                            const logo = document.getElementById('sob-v2-navbar-logo');
                            const user = document.getElementById('sob-v2-navbar-user');
                            const plusTag = document.getElementById('sob-v2-navbar-plusTag-ref');
                            const width = navRef.current.getBoundingClientRect()?.width;
                            const items = document.getElementById('sob-v2-navbar-items-ref');

                            const currentWidth = width - width * 0.03;
                            if (logo && items && user && plusTag) {
                                const logoWidth = logo.getBoundingClientRect()?.width;
                                const userWidth = user.getBoundingClientRect()?.width;
                                let itemsWidth = items.getBoundingClientRect()?.width;
                                const plusTagWidth = plusTag.getBoundingClientRect()?.width;
                                const itemsDefaultWidths = currentWidth - logoWidth - userWidth - plusTagWidth;
                                while (itemsWidth > itemsDefaultWidths) {
                                    const items = document.getElementById('sob-v2-navbar-items-ref');
                                    const plusList = document.getElementById('sob-v2-navbar-plusTag-tooltip-list');
                                    if (items && plusList) {
                                        const lastChild = items.lastElementChild as HTMLElement | null;
                                        if (lastChild) {
                                            const lastItemWidth = lastChild.getBoundingClientRect().width;
                                            removedItems.current.unshift({
                                                element: lastChild,
                                                width: lastItemWidth,
                                            });
                                            plusList.insertBefore(
                                                removedItems.current[0]?.element,
                                                plusList.firstChild,
                                            );
                                            itemsWidth -= lastItemWidth;
                                        }
                                    }
                                }
                                while (
                                    removedItems.current.length > 0 &&
                                    itemsWidth + removedItems.current[0].width <= itemsDefaultWidths
                                ) {
                                    const items = document.getElementById('sob-v2-navbar-items-ref');
                                    const firstRemovedItem = removedItems.current.shift();
                                    if (firstRemovedItem && items) {
                                        items.appendChild(firstRemovedItem.element);
                                        itemsWidth += firstRemovedItem.width;
                                    }
                                }
                                const plusListcontainer = document.getElementById('sob-v2-navbar-plusTag-tooltip');

                                if (plusListcontainer) {
                                    const plusBtn = document.getElementById('sob-v2-navbar-plusTag-ref');
                                    if (plusBtn) {
                                        const rect = plusBtn.getBoundingClientRect();
                                        const rectplusList = plusListcontainer.getBoundingClientRect();
                                        const distanceFromRight = window.innerWidth - rect.right;
                                        plusListcontainer.style.right =
                                            rectplusList.left <= 100 ? 0 + 'px' : distanceFromRight - 100 + 'px';
                                    }
                                }
                                if (plusTag) {
                                    if (removedItems.current.length > 0) plusTag?.classList?.add('active');
                                    else plusTag?.classList?.remove('active');
                                }
                            }
                        }
                    }
                });
                resizeObserver.observe(navRef.current);
                return () => resizeObserver.disconnect();
            }
        };
        isCalculated.current = false;
        resizeObserver.current = new ResizeObserver(() => handleResize());

        if (navRef.current) {
            resizeObserver.current.observe(navRef.current);
        }
        isCalculated.current = true;
        return () => resizeObserver.current?.disconnect();
    }, [children]);
    return (
        <div>
            {isCalculated.current ? (
                <nav className={classes} ref={navRef} data-size={size} {...props}>
                    {children}
                </nav>
            ) : (
                <nav></nav>
            )}
        </div>
    );
};

export { Navbar };

export * from './navBarItems';
export * from './navBarLogo';
export * from './navBarUser';
