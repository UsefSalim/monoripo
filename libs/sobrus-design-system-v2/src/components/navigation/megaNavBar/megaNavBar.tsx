/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, ReactNode, FC, useLayoutEffect } from 'react';
import classNames from 'classnames';
import './megaNavBar.scss';
import './megaNavBarPlusMenu.scss';
export interface MegaNavBarProps {
    children: ReactNode;
    size?: 'small' | 'medium' | 'large' | 'xLarge';
    className?: string;
}

interface ElementInfo {
    grandParent: HTMLElement;
    parent: HTMLElement | null;
    firstChild: HTMLElement | null;
    lastChild: HTMLElement | null;
    width: number;
}
/**
 * ###Usage
 *
 * all links have attribute called Tag, if you wanna use NavLink or Link of react-router just use Tag={Link}
 * ex :
 * ```
        <MegaNavBarItemLink Tag={Link} title="Test link 1">
            Test link 1
        </MegaNavBarItemLink>
 ```
or simply use onClick={() => history.push() or navigate()}
it is required to use title with the same text as the navlink for the text not to push other elements

 *
 *
 */
/**
 * @deprecated Use `NavBar` instead. This component will be removed in a future release.
 */
const MegaNavBar: FC<MegaNavBarProps> = ({ children, size = 'medium', className }) => {
    const refNavWrapper = useRef<HTMLDivElement>(null);
    const elements = useRef<ElementInfo[]>([]);

    const handleResize = () => {
        // setDimensions(refNavWrapper.current.clientWidth);
        const navWrapElement = refNavWrapper.current;
        if (navWrapElement) {
            const navElement = navWrapElement.querySelector('#refMegaNav');
            const navUser = navWrapElement.querySelector('#refMegaNavUser');
            const navLogo = navWrapElement.querySelector('#refMegaNavLogo');
            const moreItem: HTMLElement | null = navWrapElement.querySelector('#megaNav-more');
            const refContainer = navWrapElement.querySelector('#refMegaNavContainer');

            const navWrapElementWidth = navWrapElement?.getBoundingClientRect()?.width || 0;
            const navUserWidth = navUser?.getBoundingClientRect()?.width || 0;
            const navLogoWidth = navLogo?.getBoundingClientRect()?.width || 0;
            const els: any = [...elements.current];
            const wrapperWidth = navWrapElementWidth - navUserWidth - navLogoWidth - 100;

            if (
                navElement &&
                moreItem &&
                refContainer &&
                navElement.parentNode &&
                moreItem.parentNode &&
                refContainer.parentNode
            ) {
                while (
                    navElement &&
                    navElement?.getBoundingClientRect()?.width > wrapperWidth &&
                    navElement?.lastChild?.previousSibling
                ) {
                    moreItem.style.display = 'flex';
                    const ulEl = navElement?.lastChild?.previousSibling;
                    const newMenuItem = document?.createElement('div');
                    els.push({
                        grandParent: newMenuItem,
                        parent: navElement?.lastChild?.previousSibling,
                        firstChild: navElement?.lastChild?.previousSibling?.firstChild,
                        lastChild: navElement?.lastChild.previousSibling?.firstChild?.nextSibling,
                        width: (navElement?.lastChild?.previousSibling as HTMLElement)?.clientWidth,
                    });
                    newMenuItem?.classList?.add('sob-v2-megaNavBar-plus-menu__item');
                    (ulEl.firstChild as HTMLElement)?.classList?.add('sob-v2-megaNavBar-plus-menu__bigTitle');
                    (ulEl.lastChild as HTMLElement)?.classList?.remove('sob-v2-megaNavBar-subMenu');
                    newMenuItem?.appendChild(ulEl.firstChild as HTMLElement);
                    if (ulEl?.lastChild) newMenuItem?.appendChild(ulEl.lastChild as HTMLElement);
                    refContainer?.prepend(newMenuItem);
                    navElement?.contains(ulEl) && navElement?.removeChild(ulEl);
                }
                while (
                    navElement &&
                    navElement?.getBoundingClientRect()?.width + els[els.length - 1]?.width <= wrapperWidth &&
                    els.length > 0
                ) {
                    const element = els[els.length - 1]?.parent;
                    if (element && navElement) {
                        element?.appendChild(els[els.length - 1]?.firstChild);
                        if (els[els.length - 1]?.lastChild) {
                            els[els.length - 1]?.lastChild?.classList?.add('sob-v2-megaNavBar-subMenu');
                            els[els.length - 1]?.lastChild?.classList?.remove('sob-v2-megaNavBar-plus-menu__bigTitle');
                            element?.appendChild(els[els.length - 1]?.lastChild);
                        }
                        if (refContainer?.contains(els[els.length - 1]?.grandParent))
                            refContainer?.removeChild(els[els.length - 1]?.grandParent);

                        if (moreItem) navElement?.insertBefore(element, moreItem);
                        els.pop();
                        if (els.length === 0 && moreItem) {
                            moreItem.style.display = 'none';
                        }
                    }
                }
            }
            elements.current = [...els];
        }
    };

    useLayoutEffect(() => {
        const navElement = document.querySelector('#refMegaNav')!;
        if (!navElement) return;
        const myObs = new ResizeObserver((entries) => {
            window.requestAnimationFrame(() => {
                if (!Array.isArray(entries) || !entries.length) {
                    return;
                }
                entries.forEach(() => {
                    handleResize();
                });
            });
        });
        myObs.observe(navElement);
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            myObs.disconnect();
        };
    }, []);

    const classes = classNames('sob-v2-megaNavBar-container', className);

    return (
        <div className={classes} ref={refNavWrapper} aria-label={size}>
            {children}
        </div>
    );
};

export { MegaNavBar };
export * from './megaNavBarItems';
export * from './megaNavBarLogo';
export * from './megaNavUser';
