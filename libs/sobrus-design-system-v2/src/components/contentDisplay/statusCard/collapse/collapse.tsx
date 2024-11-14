import { useCollapse } from '@/hooks/useCollapse';
export interface CollapseHeader {
    open?: boolean;
    toggle: () => void;
}

export interface CollapseProps {
    as?: 'div' | 'ul';
    header: ({ open, toggle }: CollapseHeader) => React.ReactNode;
    duration?: number;
    defaultOpen?: boolean;
    panelClassName?: string;
    className?: string;
}

function Collapse({
    as = 'div',
    header,
    duration,
    defaultOpen = false,
    panelClassName,
    className,
    children,
}: React.PropsWithChildren<CollapseProps>) {
    const { open, openTargetEl, targetEl, toggle } = useCollapse(defaultOpen, duration);
    const Component = as;
    const Children = as !== 'div' ? 'li' : 'div';
    return (
        <Component aria-expanded={open} className={`${className}`} data-testid='collapse-parent' role='collapse'>
            {header({ open, toggle })}
            <Children
                ref={targetEl}
                className={`collapse-panel ${panelClassName}`}
                style={!openTargetEl ? { display: 'none' } : { display: 'block' }}
            >
                {children}
            </Children>
        </Component>
    );
}

Collapse.displayName = 'Collapse';

export { Collapse };
