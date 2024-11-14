import React, { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from 'react';
import { Tag } from '@/contentDisplay';
import { Tooltip } from '@/feedbacks';
import plusIcon from '@/assets/Icon.svg';
import { DivGlobalProps } from '@/components/types';
import classNames from 'classnames';

export interface VTabListProps extends DivGlobalProps {
    /**
     * The tab components to be rendered within the vertical tab list.
     */
    children: ReactNode;
    /**
     * The current active tab value.
     */
    value?: string | number;
    /**
     * Function to update the active tab value.
     */
    setValue?: Dispatch<SetStateAction<string | number>>;
    /**
     * If `true`, applies rounded corners to the tab list. Defaults to `true`.
     */
    radius?: boolean;
}
/**
 * VTabList Component
 *
 * The `VTabList` component serves as a container for vertical tab items, allowing you to organize content into separate tabs.
 * It manages the active tab state by passing down the `value` and `setValue` props to its child tab components.
 *
 * This component is particularly useful when you need a vertical navigation structure within your application,
 * enabling users to switch between different views or content sections.
 *
 * The `radius` prop controls the border-radius style of the tab list, giving you the option to have rounded corners.
 *
 * ### Props:
 * - `children`: (ReactNode) The tab components to be rendered inside the vertical tab list.
 * - `value`: (string | number) Optional. The current active tab value.
 * - `setValue`: (Dispatch<SetStateAction<string | number>>) Optional. Function to update the active tab value.
 * - `radius`: (boolean) Optional. If `true`, applies rounded corners to the tab list. Defaults to `true`.
 * - `className`: (string) Optional. Additional CSS classes to apply to the tab list container.
 * - `...props`: Any additional props are spread onto the root `div` element.
 */
export const VTabList = ({ children, value, setValue, className, radius = true, ...props }: VTabListProps) => {
    const classes = classNames('sob-v2-vtabs', radius ? 'sob-v2-vtabs-radius' : '', className);
    return (
        <div className={classes} {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { value, setValue });
                }
                return child;
            })}
        </div>
    );
};
/**
 * VTabListContainer Component
 *
 * The `VTabListContainer` component serves as a wrapper for the content associated with each vertical tab.
 * It manages the active tab state by passing down the `value` and `setValue` props to its child components,
 * ensuring that the correct content is displayed based on the active tab selection.
 *
 * This component is designed to work seamlessly with `VTabList` and `VTab` components to create a cohesive
 * vertical tab interface. It allows you to organize and display different content sections, each corresponding
 * to a specific tab.
 *
 * ### Props:
 * - `children`: (ReactNode) The content or tab panels to be rendered inside the container.
 * - `value`: (string | number) Optional. The current active tab value.
 * - `setValue`: (Dispatch<SetStateAction<string | number>>) Optional. Function to update the active tab value.
 * - `className`: (string) Optional. Additional CSS classes to apply to the container.
 * - `...props`: Any additional props are spread onto the root `div` element.
 *
 * ### Usage
 *
 * ```jsx
 * import React, { useState } from 'react';
 * import { VTabList, VTabListContainer, VTab } from "@sobrus-com/sobrus-design-system";
 *
 * const Example = () => {
 *   const [activeTab, setActiveTab] = useState('tab1');
 *
 *   return (
 *     <div className="vtab-example">
 *       <VTabList value={activeTab} setValue={setActiveTab}>
 *         <VTab tabValue="tab1" label="Tab 1" />
 *         <VTab tabValue="tab2" label="Tab 2" />
 *         <VTab tabValue="tab3" label="Tab 3" />
 *       </VTabList>
 *       <VTabListContainer value={activeTab} setValue={setActiveTab}>
 *         {activeTab === 'tab1' && <div>Content for Tab 1</div>}
 *         {activeTab === 'tab2' && <div>Content for Tab 2</div>}
 *         {activeTab === 'tab3' && <div>Content for Tab 3</div>}
 *       </VTabListContainer>
 *     </div>
 *   );
 * };
 * ```
 *
 * In this example, the `VTabListContainer` wraps the content for each tab and uses the `value` prop to determine
 * which content to display. The `setValue` function allows child components to change the active tab if needed.
 * The content is conditionally rendered based on the `activeTab` state, ensuring that only the content for the
 * selected tab is visible.
 */

export interface VTabListContainerProps extends DivGlobalProps {
    children: ReactNode;
    value?: string | number;
    setValue?: Dispatch<SetStateAction<string | number>>;
}
export const VTabListContainer = ({ children, value, setValue, className, ...props }: VTabListContainerProps) => {
    const classes = classNames('sob-v2-vtab-container', className);
    return (
        <div className={classes} {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { value, setValue });
                }
                return child;
            })}
        </div>
    );
};

interface VTabItemProps extends DivGlobalProps {
    tabIcon?: ReactNode;
    tabIconActive?: ReactNode;
    src?: string;
    srcActive?: string;
    tabTitle: ReactNode;
    tag?: ReactNode;
    active?: string | number;
    value?: string | number;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    setValue?: Dispatch<SetStateAction<string | number>>;
    hasSubMenu?: boolean;
    children?: ReactNode;
    hideTooltip?: boolean;
}
export const VTabItem = ({
    tabIcon,
    src,
    tabTitle,
    tag,
    value,
    active,
    onClick,
    setValue,
    tabIconActive,
    srcActive,
    children,
    className,
    hideTooltip,
    ...props
}: VTabItemProps) => {
    const classes = classNames('', className);
    const [activeEl, setActiveEl] = useState(value == active);
    const [open, setOpen] = useState(activeEl && children);
    const subItemsRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (subItemsRef.current && children) {
            const childNodes = subItemsRef.current.childNodes as unknown as HTMLElement[];
            if (childNodes.length > 0) {
                const hasClass = Array.from(childNodes).some((childNode) => {
                    return childNode.nodeType === Node.ELEMENT_NODE && childNode.classList.contains('active-sub-item');
                });
                setActiveEl(hasClass);
                setOpen(hasClass);
            }
        } else {
            setActiveEl(value == active);
        }
    }, [value, children, subItemsRef]);

    return (
        <div className={classes}>
            {!hideTooltip ? (
                <Tooltip
                    anchorSelect={'tooltip_' + React.Children.toArray(tabTitle).join('').replace(/ /g, '_')}
                    content={<p>{tabTitle}</p>}
                    place='right'
                >
                    <div
                        className={`sob-v2-vtab-item ${open ? 'sob-v2-vtab-item-open' : ''}`}
                        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                            !children && active ? setValue?.(active) : setOpen(!open);
                            onClick?.(event);
                        }}
                        {...props}
                    >
                        {tabIcon || src ? (
                            <div className='sob-v2-vtab-item-image'>
                                {tabIcon ? (
                                    !activeEl ? (
                                        tabIcon
                                    ) : (
                                        tabIconActive
                                    )
                                ) : !activeEl ? (
                                    <img alt='' src={src} />
                                ) : (
                                    <img alt='' src={srcActive} />
                                )}
                            </div>
                        ) : (
                            <></>
                        )}
                        <p className={`sob-v2-vtab-item-title ${activeEl ? 'active' : ''}`}>{tabTitle}</p>
                        {<div className={`sob-v2-vtab-item-active-bar ${activeEl ? 'active' : ''}`} />}
                        {tag ? <span>{tag}</span> : <></>}
                        {children ? (
                            <div className='sob-v2-vtab-submenu-icon'>
                                <img
                                    src={plusIcon}
                                    style={{
                                        transition: 'all 0.2s ease 0s',
                                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                                    }}
                                    alt=''
                                />{' '}
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </Tooltip>
            ) : (
                <div
                    className={`sob-v2-vtab-item ${open ? 'sob-v2-vtab-item-open' : ''}`}
                    onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                        !children && active ? setValue?.(active) : setOpen(!open);
                        onClick?.(event);
                    }}
                    {...props}
                >
                    {tabIcon || src ? (
                        <div className='sob-v2-vtab-item-image'>
                            {tabIcon ? (
                                !activeEl ? (
                                    tabIcon
                                ) : (
                                    tabIconActive
                                )
                            ) : !activeEl ? (
                                <img alt='' src={src} />
                            ) : (
                                <img alt='' src={srcActive} />
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                    <p className={`sob-v2-vtab-item-title ${activeEl ? 'active' : ''}`}>{tabTitle}</p>
                    {<div className={`sob-v2-vtab-item-active-bar ${activeEl ? 'active' : ''}`} />}
                    {tag ? <span>{tag}</span> : <></>}
                    {children ? (
                        <div className='sob-v2-vtab-submenu-icon'>
                            <img
                                src={plusIcon}
                                style={{
                                    transition: 'all 0.2s ease 0s',
                                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                                alt=''
                            />{' '}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            )}
            <div
                ref={subItemsRef}
                // style={{
                //     display: open ? 'block' : 'none',
                // }}
                className={`sob-v2-vtab-items-container  ${
                    open ? 'sob-v2-vtab-items-container-open' : 'sob-v2-vtab-items-container-closed'
                }`}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as React.ReactElement<any>, { value, setValue });
                    }
                    return child;
                })}
            </div>
        </div>
    );
};

export interface VTabcloseProps extends DivGlobalProps {
    children: ReactNode;
}

export const VTabClose = ({ children, className, ...props }: VTabcloseProps) => {
    const classes = classNames('sob-v2-vtab-container', className);
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};
export interface VtabContentProps extends DivGlobalProps {
    children: ReactNode;
    value?: string | number;
    setValue?: Dispatch<SetStateAction<string | number>>;
}

export const VtabContent = ({ children, value, className, ...props }: VtabContentProps) => {
    const classes = classNames('sob-v2-vtab-content', className);
    return (
        <div className={classes} {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { value });
                }
                return child;
            })}
        </div>
    );
};
export interface VTabPanelProps extends DivGlobalProps {
    children: ReactNode;
    value?: string | number;
    active: string | number;
}

export const VTabPanel = ({ children, value, active, className, ...props }: VTabPanelProps) => {
    const classes = classNames('sob-v2-vtab-panel', className);
    return (
        <>
            {value == active ? (
                <div className={classes} {...props}>
                    {children}
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

interface VTabSubItemProps extends DivGlobalProps {
    tabTitle: ReactNode;
    tag?: ReactNode;
    value?: string | number;
    active: string | number;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    setValue?: Dispatch<SetStateAction<string | number>>;
    condition?: boolean;
    hideTooltip?: boolean;
    As?: any;
    [x: string]: any;
}
export const VTabSubItem = ({
    tabTitle,
    tag,
    value,
    active,
    onClick,
    setValue,
    className,
    condition,
    hideTooltip,
    As = 'div',
    ...props
}: VTabSubItemProps) => {
    const activeEl = value == active || condition;
    const classes = classNames('sob-v2-vtab-subitem', className);

    return (
        <>
            {hideTooltip ? (
                <As
                    className={`${classes} ${activeEl ? 'active-sub-item' : ''}`}
                    onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                        setValue?.(active);
                        onClick?.(event);
                    }}
                    {...props}
                >
                    <p className={'sob-v2-vtab-subitem-title '}>{tabTitle}</p>
                    {tag ? <Tag size='xs'>{tag}</Tag> : <></>}
                </As>
            ) : (
                <Tooltip
                    anchorSelect={'tooltip_' + React.Children.toArray(tabTitle).join('').replace(/ /g, '_')}
                    content={<p>{tabTitle}</p>}
                    place='right'
                >
                    <As
                        className={`${classes} ${activeEl ? 'active-sub-item' : ''}`}
                        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                            setValue?.(active);
                            onClick?.(event);
                        }}
                        {...props}
                    >
                        <p className={'sob-v2-vtab-subitem-title '}>{tabTitle}</p>
                        {tag ? <Tag size='xs'>{tag}</Tag> : <></>}
                    </As>
                </Tooltip>
            )}
        </>
    );
};
