import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const useOutSideClick = (ref: any, callback: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        const handleClickEsc = (e: KeyboardEvent) => {
            if (e?.key === 'Escape') {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleClickEsc);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleClickEsc);
        };
    }, [ref, callback]);
};

export const useInterval = (callback: () => void, delay: number) => {
    const savedCallback: MutableRefObject<any> = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            setInterval(tick, delay);
        }
        return () => {
            const id = setInterval(tick, delay);
            clearInterval(id);
        };
    }, [delay]);
};

// Hook
// T - could be any type of HTML element like: HTMLDivElement, HTMLParagraphElement and etc.
// hook returns tuple(array) with type [any, boolean]
export function useHover<T>(): [MutableRefObject<T>, boolean] {
    const [value, setValue] = useState<boolean>(false);
    const ref: any = useRef<T | null>(null);
    const handleMouseOver = (): void => setValue(true);
    const handleMouseOut = (): void => setValue(false);
    useEffect(
        () => {
            const node: any = ref.current;
            if (node) {
                node.addEventListener('mouseover', handleMouseOver);
                node.addEventListener('mouseout', handleMouseOut);
                return () => {
                    node.removeEventListener('mouseover', handleMouseOver);
                    node.removeEventListener('mouseout', handleMouseOut);
                };
            }
            return () => {
                window.removeEventListener('keyup', handleMouseOver);
                window.removeEventListener('keyup', handleMouseOut);
            };
        },
        [ref.current], // Recall only if ref changes
    );
    return [ref, value];
}
