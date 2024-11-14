import {
    ButtonHTMLAttributes,
    CSSProperties,
    DetailedHTMLProps,
    HTMLAttributes,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    LiHTMLAttributes,
    ReactNode,
    TableHTMLAttributes,
    TdHTMLAttributes,
    TextareaHTMLAttributes,
    ThHTMLAttributes,
} from 'react';

export type Colors =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'danger-ghost'
    | 'danger-secondary'
    | 'danger-tertiary'
    | 'danger'
    | 'initial';

export type Size = 'sm' | 'md';

export interface GlobalProps {
    /**
     * 	The content of the component.
     */
    children?: ReactNode;
    /**
     * Styles applied to the root element.
     */
    style?: CSSProperties;
    /**
     * Override or extend the styles applied to the component.
     */
    className?: string;
}
export type ButtonsGlobalProps = ButtonHTMLAttributes<HTMLButtonElement>;
export type DivGlobalProps = HTMLAttributes<HTMLDivElement>;
export type SpanGlobalProps = HTMLAttributes<HTMLSpanElement>;
export type TableRowGlobalProps = HTMLAttributes<HTMLTableRowElement>;
export type HeadingsGlobalProps = HTMLAttributes<HTMLHeadingElement>;
export type ThGlobalProps = ThHTMLAttributes<HTMLElement>;
export type TableGlobalProps = TableHTMLAttributes<HTMLTableElement>;
export type InputGlobalProps = InputHTMLAttributes<HTMLInputElement>;
export type LabelGlobalProps = LabelHTMLAttributes<HTMLLabelElement>;
export type TextareaGlobalProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export type TagGlobalProps = HTMLAttributes<HTMLOrSVGElement>;
export type TdGlobalProps = TdHTMLAttributes<HTMLTableCellElement>;
export type UlGlobalProps = HTMLAttributes<HTMLUListElement>;
export type LiGlobalProps = LiHTMLAttributes<HTMLLIElement>;
export type NavGlobalProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
