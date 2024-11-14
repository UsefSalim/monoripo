/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { SpanGlobalProps } from '@/components/types';
import { Typography } from '@/typography';
import './tag.scss';

export interface CustomTagProps extends SpanGlobalProps {
    /**
     * The size of the component
     */
    size?: 'xs' | 'md' | 'sm';
    /**
     * change the min with of Tag
     */
    minWidth?: number;
    /**
     * The background Color of the component is required if color is not defined
     */
    bgColor?: string;
    /**
     * The  Color of the component is take effect if color is not defined
     */
    textColor?: string;
    /**
     * Element placed before the children
     */
    lefticon?: JSX.Element;
    /**
     * Element placed after the children
     */
    righticon?: JSX.Element;
}

/**
 * Tag component supports outlined and filled styling.
 *
 * ###Usage
 *
 *```JSX
 *
 * import {Tag} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *      <Tag color="primary">tagName</Tag>
 *    );
 * }
 * ```
 *
 */
export const Tag = forwardRef<HTMLSpanElement, CustomTagProps>(
    ({ bgColor, textColor, className, minWidth, style, children, lefticon, righticon, size = 'sm', ...props }, ref) => {
        const classes = classNames(
            'sob-v2-table-tag',
            lefticon ? 'sob-v2-table-tag-left' : '',
            righticon ? 'sob-v2-table-tag-right' : '',
            size ? `sob-v2-table-tag-${size}` : '',
            className,
        );

        return (
            <span
                ref={ref}
                {...props}
                style={{
                    minWidth,
                    backgroundColor: bgColor ? bgColor : '',
                    color: textColor ? textColor : '',
                    ...style,
                }}
                className={classes}
            >
                {lefticon && <span>{lefticon}</span>}
                <Typography as='span' type='label' size={size === 'md' ? 'sm' : size === 'sm' ? 'xs' : 'xxs'}>
                    {children}
                </Typography>
                {righticon && <span>{righticon}</span>}
            </span>
        );
    },
);
