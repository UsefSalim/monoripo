import React, { FC } from 'react';
import classNames from 'classnames';
import { TagGlobalProps } from '@/components/types';
import './container.scss';
export interface SobContainerProps extends TagGlobalProps {
    // [key: string]: any;
    as?: React.ElementType;
    fluid?: boolean | string;
}

export const Container: FC<SobContainerProps> = ({ className, fluid, as: Tag = 'div', ...attributes }) => {
    let containerClass = 'sob-v2-container';
    if (fluid === true) {
        containerClass = 'sob-v2-container-fluid';
    } else if (fluid) {
        containerClass = `sob-v2-container-${fluid}`;
    }

    const classes = classNames(className, containerClass);

    return <Tag {...attributes} className={classes} />;
};
