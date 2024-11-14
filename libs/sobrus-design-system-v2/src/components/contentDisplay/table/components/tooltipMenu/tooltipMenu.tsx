import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { RiMore2Fill } from 'react-icons/ri';
import Popup from 'reactjs-popup';
import { IconButton } from '@/actions';
import { AiOutlineDelete, AiOutlineDownload, AiOutlineEdit, AiOutlineEye, AiOutlinePrinter } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { DivGlobalProps, Size } from '@/components/types';

import './tooltipMenu.scss';

export declare type EventType = 'hover' | 'click' | 'focus' | 'right-click';
export declare type PopupPosition =
    | 'top left'
    | 'top center'
    | 'top right'
    | 'right top'
    | 'right center'
    | 'right bottom'
    | 'bottom left'
    | 'bottom center'
    | 'bottom right'
    | 'left top'
    | 'left center'
    | 'left bottom'
    | 'center center';
export declare type PopupActions = {
    open: () => void;
    close: () => void;
    toggle: () => void;
};
export interface TooltipMenuProps {
    trigger?: JSX.Element | ((isOpen: boolean) => JSX.Element);
    open?: boolean;
    disabled?: boolean;
    nested?: boolean;
    defaultOpen?: boolean;
    on?: EventType | EventType[];
    children: React.ReactNode;
    position?: PopupPosition | PopupPosition[];
    offsetX?: number;
    offsetY?: number;
    arrow?: boolean;
    modal?: boolean;
    lockScroll?: boolean;
    closeOnDocumentClick?: boolean;
    closeOnEscape?: boolean;
    repositionOnResize?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    onOpen?: (event?: React.SyntheticEvent) => void;
    onClose?: (event?: React.SyntheticEvent | KeyboardEvent | TouchEvent | MouseEvent) => void;
    contentStyle?: React.CSSProperties;
    overlayStyle?: React.CSSProperties;
    arrowStyle?: React.CSSProperties;
    className?: string;
    keepTooltipInside?: boolean | string;
    size?: Size;
    type?: 'button' | 'reset' | 'submit' | undefined;
}

export const TooltipMenu: React.FC<TooltipMenuProps> = (props) => {
    const {
        position = 'left top',
        on = 'click',
        closeOnDocumentClick = true,
        mouseLeaveDelay = 0,
        mouseEnterDelay = 0,
        contentStyle = { padding: '0px', border: 'none' },
        arrow = false,
        children,
        trigger,
        type,
        size = 'md',
        ...attributes
    } = props;

    return (
        <Popup
            trigger={
                trigger ?? (
                    <IconButton type={type} size={size} color='secondary'>
                        <RiMore2Fill size={19} color='#02829f' />
                    </IconButton>
                )
            }
            position={position}
            on={on}
            closeOnDocumentClick={closeOnDocumentClick}
            mouseLeaveDelay={mouseLeaveDelay}
            mouseEnterDelay={mouseEnterDelay}
            contentStyle={contentStyle}
            arrow={arrow}
            {...attributes}
        >
            <div className='TooltipMenu__menu'>{children}</div>
        </Popup>
    );
};

export interface TooltipMenuItemProps extends DivGlobalProps {
    children?: React.ReactNode;
    inline?: boolean;
    color?: string;
    className?: string;
    label?: ReactNode;
    type?: 'edit' | 'delete' | 'print' | 'add' | 'view' | 'download';
    icon?: ReactNode;
}

export const TooltipMenuItem = ({ className, label, children, type, icon, ...attributes }: TooltipMenuItemProps) => {
    const classes = classNames('TooltipMenu__menu-item', className);
    const switchIcon = (label?: ReactNode) => {
        switch (type) {
            case 'edit':
                return (
                    <>
                        <AiOutlineEdit size={21} />
                        <span className='TooltipMenu__menu-item-text'>{label ?? 'Modifier'}</span>
                    </>
                );
            case 'delete':
                return (
                    <>
                        <AiOutlineDelete size={21} color='#E74C3C' />
                        <span style={{ color: '#E74C3C' }} className='TooltipMenu__menu-item-text'>
                            {label ?? 'Supprimer'}
                        </span>
                    </>
                );
            case 'download':
                return (
                    <>
                        <AiOutlineDownload size={21} />
                        <span className='TooltipMenu__menu-item-text'>{label ?? 'Télécharger'}</span>
                    </>
                );
            case 'print':
                return (
                    <>
                        <AiOutlinePrinter size={21} />
                        <span className='TooltipMenu__menu-item-text'>{label ?? 'Imprimer'}</span>
                    </>
                );
            case 'view':
                return (
                    <>
                        <AiOutlineEye size={21} />
                        <span className='TooltipMenu__menu-item-text'>{label ?? 'Voir'}</span>
                    </>
                );
            case 'add':
                return (
                    <>
                        <BsPlusLg size={21} />
                        <span className='TooltipMenu__menu-item-text'>{label ?? 'Ajouter'}</span>
                    </>
                );
            default:
                return (
                    <>
                        {icon}
                        <span className='TooltipMenu__menu-item-text'>{label}</span>
                    </>
                );
        }
    };
    if (children) return <>{children}</>;
    return (
        <div {...attributes} className={classes}>
            {switchIcon(label)}
        </div>
    );
};
