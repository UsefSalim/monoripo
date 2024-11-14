import React, { useState, FC, ReactNode } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IconButton } from '@/actions';
import classNames from 'classnames';
import { DivGlobalProps, Size } from '@/components/types';
import { Tag } from '@/contentDisplay';
import { Typography } from '@/typography';
import './accordionCard.scss';
export interface AccordionProps extends DivGlobalProps {
    /**
     * The title of the component.
     */
    headerTitle?: ReactNode;
    /**
     * Tag Number
     */
    tag?: ReactNode;
    /**
     * Extra button to add actions
     */
    rightExtraComponent?: JSX.Element;
    /**
     * Handler if need to add action in oen Accordion
     */
    onClickOpenBtn?: () => void;
    /**
     * The size of the Icon must be the same size of the button
     */
    size?: Size;
    /**
     * if true the accordion is open
     */
    open?: boolean;
}

export const AccordionCard: FC<AccordionProps> = ({
    className,
    children,
    headerTitle,
    tag,
    rightExtraComponent,
    onClickOpenBtn,
    size = 'sm',
    open = false,
    ...props
}) => {
    const classes = classNames('sob-v2-accordionCard_big_container', className);
    const [isOpen, setIsOpen] = useState(open);
    return (
        <div
            className={classes}
            onClick={() => {
                setIsOpen(!isOpen);
                onClickOpenBtn?.();
            }}
            {...props}
        >
            <div className={`sob-v2-accordionCard_container ${isOpen ? 'sob-v2-accordionCard_container-open' : ''}`}>
                <div className='sob-v2-accordionCard_container_title_container'>
                    <Typography size='lg' type='label' className='sob-v2-accordionCard_container_title'>
                        {headerTitle}
                    </Typography>
                    {tag !== undefined && (
                        <Tag size='sm' className='sob-v2-accordion-tag'>
                            {tag}
                        </Tag>
                    )}
                </div>
                <div className='sob-v2-accordionCard_iconsContainer'>
                    <span>{rightExtraComponent}</span>
                    <IconButton size={size} color='primary'>
                        <MdKeyboardArrowDown
                            style={{
                                transition: 'all .2s',
                                transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
                            }}
                            size={20}
                        ></MdKeyboardArrowDown>
                    </IconButton>
                </div>
            </div>
            <div
                onClick={(e) => e?.stopPropagation()}
                className={`sob-v2-accordionCard_container_content ${
                    isOpen ? 'sob-v2-accordionCard_container_content-open' : ''
                }`}
            >
                {children}
            </div>
        </div>
    );
};
