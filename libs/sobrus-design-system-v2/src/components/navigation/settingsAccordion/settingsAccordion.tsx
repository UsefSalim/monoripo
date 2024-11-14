import React, { CSSProperties, FC, ReactNode } from 'react';

import 'react-accessible-accordion/dist/fancy-example.css';
import './settingsAccordion.scss';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import classNames from 'classnames';

export interface CommunProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
export declare type DivAttributes = React.HTMLAttributes<HTMLDivElement>;
export type UUID = string;

export type SettingsAccordionProps = Pick<DivAttributes, Exclude<keyof DivAttributes, 'onChange'>> & {
    preExpanded?: UUID[];
    allowMultipleExpanded?: boolean;
    allowZeroExpanded?: boolean;
    onChange?(args: UUID[]): void;
};
/**
 * @deprecated Use `vtabs` instead. This component will be removed in a future release.
 */

const SettingsAccordion: FC<SettingsAccordionProps & CommunProps> = (props) => {
    const { children, className } = props;
    const classes = classNames('sob-v2-accordion', className);

    return (
        <Accordion className={classes} {...props}>
            {children}
        </Accordion>
    );
};

type SettingsAccordionItemProps = DivAttributes & {
    uuid?: UUID;
    activeClassName?: string;
    dangerouslySetExpanded?: boolean;
    className?: string;
    style?: CSSProperties;
};
/**
 * @deprecated Use `vtabs` instead. This component will be removed in a future release.
 */
const SettingsAccordionItem: FC<SettingsAccordionItemProps> = (props) => {
    const { children, className, style } = props;
    const classes = classNames('sob-v2-accordion__item', className);

    return (
        <AccordionItem className={classes} style={style} {...props}>
            {children}
        </AccordionItem>
    );
};

export type SettingsAccordionItemHeadingProps = CommunProps;
/**
 * @deprecated Use `vtabs` instead. This component will be removed in a future release.
 */
const SettingsAccordionItemHeading: FC<SettingsAccordionItemHeadingProps> = (props) => {
    const { children, className, style } = props;

    return (
        <AccordionItemHeading className={className} style={style}>
            {children}
        </AccordionItemHeading>
    );
};

export interface SettingsAccordionItemButtonProps extends CommunProps {
    /** pass an icon to be visible in the left side */
    icon?: JSX.Element | string;
}
/**
 * @deprecated Use `vtabs` instead. This component will be removed in a future release.
 */
const SettingsAccordionItemButton: FC<SettingsAccordionItemButtonProps> = ({ icon, children, className, style }) => (
    <AccordionItemButton className={classNames('sob-v2-accordion__button', className)} style={style}>
        {icon ? <div className='sob-v2-accordion__button-icon'>{icon}</div> : <></>}
        {children}
    </AccordionItemButton>
);
export interface SettingsAccordionPanelProps extends CommunProps {
    /** pass an icon to be visible in the left side */
    icon?: JSX.Element | string;
}
/**
 * @deprecated Use `vtabs` instead. This component will be removed in a future release.
 */
const SettingsAccordionPanel: FC<SettingsAccordionPanelProps> = (props) => {
    const { children, className, style } = props;
    const classes = classNames('sob-v2-accordion__panel', className);

    return (
        <AccordionItemPanel className={classes} style={style}>
            {children}
        </AccordionItemPanel>
    );
};

export interface settingsAccordionPanelItemProps extends CommunProps {
    /** Active classname */
    active?: boolean;
    onClick?: () => void;
}
/**
 * @deprecated Use `vtabs` instead. This component will be removed in a future release.
 */
const SettingsAccordionPanelItem: FC<settingsAccordionPanelItemProps> = ({ onClick, active, children, style }) => {
    return (
        <div className={`sob-v2-accordion__panel_item ${active ? 'active' : ''}`} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

export {
    SettingsAccordion,
    SettingsAccordionItem,
    SettingsAccordionItemButton,
    SettingsAccordionItemHeading,
    SettingsAccordionPanel,
    SettingsAccordionPanelItem,
};
