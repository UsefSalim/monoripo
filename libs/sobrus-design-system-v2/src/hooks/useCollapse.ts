import { useRef, useState } from 'react';

export function useCollapse(defaultOpen = false, duration = 200) {
    const targetEl = useRef<any>(null!);
    const [open, setOpen] = useState(defaultOpen);
    const [openTargetEl, setOpenTargetEl] = useState(defaultOpen);

    function slideUp(target: any) {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = `${duration}ms`;
        target.style.height = `${target.offsetHeight}px`;
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        // set custom delay to animated
        setOpen(() => false);
        window.setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            setOpenTargetEl(() => false);
        }, duration);
    }

    function slideDown(target: any) {
        target.style.removeProperty('display');
        let { display } = window.getComputedStyle(target);
        if (display === 'none') display = 'block';
        target.style.display = display;
        const height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = `${duration}ms`;
        target.style.height = `${height}px`;

        // set custom delay to animated
        setOpen(() => true);
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            setOpenTargetEl(() => true);
        }, duration);
    }

    function toggle() {
        const target = targetEl.current;
        if (window.getComputedStyle(target).display === 'none') {
            slideDown(target);
        } else {
            slideUp(target);
        }
    }

    return {
        open,
        targetEl,
        setOpen,
        openTargetEl,
        slideUp,
        slideDown,
        toggle,
    };
}