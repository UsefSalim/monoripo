import { LazyLoadImage } from './lazyLoadImage';
import { StoryObj, Meta } from '@storybook/react';
import imageExample from '@/assets/empty.png';

export default {
    title: 'Content display/LazyLoadImage',
    component: LazyLoadImage,
    argTypes: {
        effect: {
            options: ['blur', 'black-and-white', 'opacity'],
            control: 'select',
        },
    },
} as Meta<typeof LazyLoadImage>;

/**
 *
 * React Component to lazy load images based on [React Lazy Load Image Component](https://www.npmjs.com/package/react-lazy-load-image-component)
 * you can use all its props
 *
 * ###Usage
 *
 *```JSX
 *
 * import {LazyLoadImage} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *     <LazyLoadImage alt="image Test" src={imageExample} />
 *    );
 *   }
 * ```
 *
 *
 */
export const LazyLoadImageDefault: StoryObj<typeof LazyLoadImage> = {
    render: (args) => (
        <>
            <LazyLoadImage {...args} />
        </>
    ),
    args: {
        src: imageExample,
        alt: 'test Image alt',
        effect: 'blur',
        height: 400,
        width: 600,
    },
};
