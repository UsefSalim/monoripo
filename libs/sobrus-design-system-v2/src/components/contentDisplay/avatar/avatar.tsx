import React, { FC } from 'react';
import classNames from 'classnames';
import { LazyLoadImage } from '@/contentDisplay';
import { DivGlobalProps } from '@/components/types';
import './avatar.scss';
export interface AvatarProps extends DivGlobalProps {
    /**
     * The name of the component required if image is not defined
     */
    name?: string;
    /**
     * The size of the component
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /**
     * The image   of the text required if name is not defined
     */
    image?: string;
}

const getTwoFirstCapitalise = (name: string) => {
    const elements = name.split(' ');
    if (elements.length === 1) return `${elements[0]?.charAt(0).toLocaleUpperCase()}`;
    else return `${elements[0]?.charAt(0).toLocaleUpperCase()}${elements[1]?.charAt(0).toLocaleUpperCase()}`;
};
/**
 * Image avatars can be created by passing standard img props src  to the component.
 *
 * Avatars containing simple characters can be created by passing a string as children.
 *
 * ###Usage
 *
 *```JSX
 *
 * import {Avatar} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *      <Avatar image="./../../../assets/images/test.png"/>
 *    );
 * }
 * ```
 *
 */

export const Avatar: FC<AvatarProps> = ({ image, name, size = 'md', color = '#fff', className, ...props }) => {
    const classes = classNames('sob-v2-avatar', size ? `sob-v2-avatar-${size}` : '', className);
    return (
        <div color={color} className={classes} {...props}>
            {image ? <LazyLoadImage src={image} alt='sob-v2-avatar' effect='blur' /> : <></>}
            {!image && name ? getTwoFirstCapitalise(name) : <></>}
        </div>
    );
};
