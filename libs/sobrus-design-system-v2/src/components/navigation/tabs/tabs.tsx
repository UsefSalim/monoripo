// import React, { FC, HTMLAttributes } from 'react';
// import classNames from 'classnames';

import classNames from 'classnames';
import React, { forwardRef, ReactNode, SyntheticEvent } from 'react';
import { Tooltip } from '@/feedbacks';
import { DivGlobalProps } from '@/components/types';
import { Zoom } from '@/animations';
import './tabs.scss';
export interface TabsContainerProps extends DivGlobalProps {
    /**
     * Determines if the default color theme is applied to the tabs container.
     * When true, applies the standard color styling for tabs.
     * - Default: true
     */
    defaultColor?: boolean;
}
/**
 * TabsContainer serves as the main container for organizing tab-based content.
 * It allows for extensive customization and supports all standard `div` properties.
 *
 * This component can be accessed via `ref`, providing control over the underlying `div` DOM element.
 *
 * ### Props:
 *
 * - `defaultColor`: (optional) Determines if the default color theme is applied to the tabs container.
 *   - Default: true
 *
 * - `ref`: (optional) A forwarded ref for accessing the underlying `div` element.
 *
 * - Supports all other standard div properties through `DivGlobalProps`.
 *
 * ### Usage:
 *
 * ```jsx
 * import { TabsContainer, AppBar, Tabs, Tab, TabPanel } from '@sobrus-com/sobrus-design-system-v2';
 *
 * const Example = () => {
 *   const [value, setValue] = React.useState('0');
 *
 *   const handleChange = (event, newValue) => {
 *     setValue(newValue);
 *   };
 *
 *   return (
 *     <TabsContainer defaultColor={false}>
 *       <AppBar>
 *         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
 *           <Tab label="Lorem ipsum dolor sit amet consectetur adipisicing elit." index="0" />
 *           <Tab label="Item Two" index="1" />
 *           <Tab label="Item Three" index="2" />
 *         </Tabs>
 *       </AppBar>
 *       <TabPanel value={value} index="0">
 *         Item One Content
 *       </TabPanel>
 *       <TabPanel value={value} index="1">
 *         Item Two Content
 *       </TabPanel>
 *       <TabPanel value={value} index="2">
 *         Item Three Content
 *       </TabPanel>
 *     </TabsContainer>
 *   );
 * };
 * ```
 *
 * In this example, the `TabsContainer` component is used to render a container for tabbed content
 * with the default color theme turned off. Tabs are rendered in an `AppBar` with corresponding `TabPanel`s
 * displaying the content for each selected tab.
 */
const TabsContainer = forwardRef<HTMLDivElement, TabsContainerProps>(
    ({ children, className, defaultColor = true, ...props }, ref) => {
        const classes = classNames(
            'sob-v2-tabs-container',
            defaultColor ? 'sob-v2-tabs-container-color' : '',
            className,
        );

        return (
            <div ref={ref} className={classes} {...props}>
                {children}
            </div>
        );
    },
);

TabsContainer.displayName = 'TabsContainer';

export type AppBarProps = DivGlobalProps;

const AppBar = forwardRef<HTMLDivElement, AppBarProps>(({ children, className, ...props }, ref) => {
    const classes = classNames('sob-v2-tabs-AppBar-container', className);
    return (
        <div ref={ref} className={classes} {...props}>
            {children}
        </div>
    );
});

AppBar.displayName = 'AppBar';

export interface TabsProps extends Omit<DivGlobalProps, 'onChange'> {
    /**
     * The current value of the selected tab.
     * It is used to determine which tab is active.
     */
    value: string | number;
    /**
     * Callback function invoked when a tab is selected.
     * The function receives the event and the selected tab's index.
     */
    onChange: (event: SyntheticEvent, value: any) => void;
}
const Tabs = forwardRef<HTMLDivElement, TabsProps>(({ children, className, onChange, value, ...props }, ref) => {
    const classes = classNames('sob-v2-tabs', className);

    return (
        <div className={classes} role='tablist' ref={ref} {...props}>
            {React.Children.map(children, (child) => {
                const childElement = child as React.ReactElement<any>;
                const tabIndex = childElement.props.index; // Use the index prop from Tab

                return React.cloneElement(childElement, {
                    onClick: (event: React.MouseEvent<HTMLDivElement>) => {
                        onChange(event, tabIndex); // Pass the custom index to onChange
                    },
                    isActive: value === tabIndex,
                });
            })}
        </div>
    );
});

Tabs.displayName = 'Tabs';

export interface TabProps extends DivGlobalProps {
    /**
     * The text label displayed on the tab.
     */
    label: ReactNode;
    /**
     * Unique identifier for the tab, used to identify and activate it.
     */
    index: string | number;
    /**
     * Determines if the tab is currently active.
     * When true, the tab is highlighted to indicate it is selected.
     */
    isActive?: boolean;
    /**
     * Optional icon displayed to the left of the label.
     */
    icon?: ReactNode;
    /**
     * Optional tag or badge displayed with the label.
     */
    tag?: ReactNode;
    /**
     * When true, the tab expands to the maximum available width.
     */
    maxWidth?: boolean;
    /**
     * When true, a tooltip with the tab label is displayed.
     */
    tooltip?: boolean;
}
const Tab = ({
    label,
    className,
    index,
    isActive,
    icon,
    tag,
    maxWidth = false,
    tooltip = false,
    ...props
}: TabProps) => {
    const classes = classNames(
        'sob-v2-tab',
        isActive ? 'active' : '',
        maxWidth && icon && !tag ? 'sob-v2-tab-maxWidth-icon' : '',
        maxWidth && tag && !icon ? 'sob-v2-tab-maxWidth-tag' : '',
        maxWidth && tag && icon ? 'sob-v2-tab-maxWidth-icon-tag' : '',
        maxWidth ? 'sob-v2-tab-maxWidth' : '',
        className,
    );
    return (
        <>
            <div id={'tab' + index} className={classes} {...props}>
                <span className='icon'>{icon}</span>
                <span className='label'> {label}</span>
                <span className='tag'>{tag}</span>
                {tooltip ? <Tooltip anchorSelect={'tab' + index} content={<p>{label}</p>} /> : <></>}
            </div>
        </>
    );
};
export interface TabPanelProps extends DivGlobalProps {
    /**
     * The index of the panel, used to match it with the corresponding tab.
     */
    index: string | number;
    /**
     * The current selected tab's value, used to control the panel's visibility.
     */
    value: string | number;
}
const TabPanel = ({ className, value, index, children, ...props }: TabPanelProps) => {
    const classes = classNames('sob-v2-tabPanel', className);
    return (
        <>
            <Zoom in={value == index} defaultRender={false}>
                <div className={classes} {...props}>
                    {children}
                </div>
            </Zoom>
        </>
    );
};
export { TabsContainer, AppBar, Tabs, Tab, TabPanel };
