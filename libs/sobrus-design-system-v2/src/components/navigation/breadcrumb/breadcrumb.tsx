import React, { forwardRef, ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import { IconButton } from '@/actions';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { DivGlobalProps } from '@/components/types';
import { Tooltip } from '@/feedbacks';
import './breadcrumb.scss';

export interface BreadCrumbProps extends Omit<DivGlobalProps, 'title'> {
    /**
     * The title of the breadcrumb component, typically the main page title.
     * It can be any ReactNode such as a string or a custom element.
     */
    title?: ReactNode;
    /**
     * The subtitle of the breadcrumb component, typically a smaller secondary text.
     * It can be any ReactNode such as a string or a custom element.
     */
    subTitle?: ReactNode;
    /**
     * If true, the component will display a back button (arrow icon) to navigate backward.
     * Default: false
     */
    isBackward?: boolean;
    /**
     * Function to handle button click for backward navigation.
     * Example usage: `onBtnClick={() => navigate("/home")}`
     */
    onBtnClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * If true, the breadcrumb content will wrap based on available space.
     * Default: false
     */
    wrap?: boolean;
}

/**
 * Breadcrumb component for navigation and displaying page titles with an optional back button.
 *
 * This component supports page titles, subtitles, and a back button for easy navigation.
 * The title width is adjusted based on the available space when the `wrap` option is enabled.
 *
 * The component also accepts a `ref` for accessing the underlying div element.
 *
 * ### Props:
 *
 * - `title`: (optional) The main title of the breadcrumb, displayed as a header.
 *   - Expected values: any valid ReactNode (string, element, component, etc.)
 *
 * - `subTitle`: (optional) The subtitle of the breadcrumb, displayed as secondary text.
 *   - Expected values: any valid ReactNode (string, element, component, etc.)
 *
 * - `isBackward`: (optional) If true, displays a back button (arrow icon) for backward navigation.
 *   - Default: false
 *
 * - `onBtnClick`: (optional) A function that handles the click event for the back button.
 *   - Example: `onBtnClick={() => navigate("/home")}`
 *
 * - `wrap`: (optional) If true, adjusts the breadcrumb content to wrap based on available space.
 *   - Default: false
 *
 * - `ref`: (optional) A forwarded ref for accessing the underlying div element.
 *
 * - Supports all other default div props through `DivHTMLAttributes<HTMLDivElement>`.
 *
 * ### Usage:
 *
 * Here is an example of how to use the `Breadcrumb` component:
 *
 * ```jsx
 *
 * import { Breadcrumb } from '@sobrus-com/sobrus-design-system';
 *
 * const Example = () => (
 *   <Breadcrumb
 *     isBackward
 *     onBtnClick={() => {}}
 *     subTitle="Test SubTitle"
 *     title="Test Title"
 *   />
 * );
 * ```
 *
 * In this example, the `Breadcrumb` component is used to display a main title and a subtitle,
 * along with a back button for easy navigation.
 */
const Breadcrumb = forwardRef<HTMLDivElement, BreadCrumbProps>(
    ({ className, title, subTitle, onBtnClick, isBackward = false, wrap = false, ...props }, ref) => {
        const classes = classNames('sob-v2-breadcrumb-container', className);

        useEffect(() => {
            function adjustBreadcrumbTitleWidth() {
                const breadcrumbContainer = document.querySelector('.sob-breadcrumb__container') as HTMLElement;
                const titleContainer = document.querySelector('.sob-v2-breadcrumb-container') as HTMLElement;
                const buttonsContainer = document.querySelector('.sob-breadcrumb__buttons') as HTMLElement;

                if (!breadcrumbContainer || !titleContainer || !buttonsContainer) return;

                const containerWidth = breadcrumbContainer.offsetWidth;
                const buttonsWidth = buttonsContainer.offsetWidth;
                const availableWidth = containerWidth - buttonsWidth - 20;
                const remWidth = availableWidth / 16;
                titleContainer.style.maxWidth = `${remWidth - 2}rem`;
            }

            if (wrap) {
                setTimeout(adjustBreadcrumbTitleWidth, 10);
                window.addEventListener('resize', adjustBreadcrumbTitleWidth);
            }

            return () => {
                window.removeEventListener('resize', adjustBreadcrumbTitleWidth);
            };
        }, []);

        return (
            <div ref={ref} {...props} className={classes}>
                {isBackward && (
                    <IconButton color='secondary' style={{ marginRight: 8 }} onClick={(e) => onBtnClick?.(e)}>
                        <MdOutlineKeyboardArrowLeft color='#627282' size={30} />
                    </IconButton>
                )}
                <div className={`${wrap ? 'sob-v2-breadcrumb-content-wrap' : ''} sob-v2-breadcrumb-content`}>
                    {title && <h3 id={'breadcrumb-title'}>{title}</h3>}
                    {subTitle && <h6 id={'breadcrumb-subtitle'}>{subTitle}</h6>}
                </div>
                {wrap && (
                    <>
                        <Tooltip anchorSelect={'breadcrumb-title'} content={<p>{title}</p>} />
                        <Tooltip anchorSelect={'breadcrumb-subtitle'} content={<p>{subTitle}</p>} />
                    </>
                )}
            </div>
        );
    },
);

Breadcrumb.displayName = 'Breadcrumb';

/**
 * BreadcrumbContainer component wraps the breadcrumb content in a container.
 *
 * Use this to wrap breadcrumb elements to ensure proper alignment and spacing.
 *
 * ### Usage:
 * ```jsx
 * <BreadcrumbContainer>
 *   <Breadcrumb title="Page Title" />
 * </BreadcrumbContainer>
 * ```
 */
const BreadcrumbContainer = forwardRef<HTMLDivElement, DivGlobalProps>(({ className, children, ...props }, ref) => {
    const classes = classNames('sob-breadcrumb__container', className);

    return (
        <div ref={ref} className={classes} {...props}>
            {children}
        </div>
    );
});

BreadcrumbContainer.displayName = 'BreadcrumbContainer';

/**
 * BreadcrumbActions component wraps buttons or actions in the breadcrumb.
 *
 * This component ensures that actions such as buttons are properly aligned within the breadcrumb.
 *
 * ### Usage:
 * ```jsx
 * <BreadcrumbActions>
 *   <Button>Action</Button>
 * </BreadcrumbActions>
 * ```
 */
const BreadcrumbActions = forwardRef<HTMLDivElement, DivGlobalProps>(({ className, children, ...props }, ref) => {
    const classes = classNames('sob-breadcrumb__buttons', className);

    return (
        <div ref={ref} className={classes} {...props}>
            {children}
        </div>
    );
});

BreadcrumbActions.displayName = 'BreadcrumbActions';

export { Breadcrumb, BreadcrumbContainer, BreadcrumbActions };
