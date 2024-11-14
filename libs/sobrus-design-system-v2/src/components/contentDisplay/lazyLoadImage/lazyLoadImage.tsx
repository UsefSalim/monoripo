import React, { FC } from 'react';
import { LazyLoadImage as LazyLoadImageComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './lazyLoadImage.scss';
export interface SobLazyLoadImageProps {
    /**
     * image alt attribiut
     */
    alt?: string;
    /**
     * image src attribiut
     */
    src: string;
    /**
     * Effect lazy load
     */
    effect?: 'blur' | 'black-and-white' | 'opacity';
    /**
     * image height attribiut
     */
    height?: number;
    /**
     * image width attribiut
     */
    width?: number;
}

const LazyLoadImage: FC<SobLazyLoadImageProps> = ({ effect = 'blur', ...props }) => {
    return <LazyLoadImageComponent effect={effect} {...props} />;
};

export { LazyLoadImage };
