import { DivGlobalProps } from '@/components/types';
import './circularProgress.scss';
export interface SobCircularProgressProps extends DivGlobalProps {
    /**
     * Override or extend the styles applied to the component.
     */
    className?: string;
    /**
     * The size of the circle.
     * If using a number, the pixel unit is assumed.
     * If using a string, you need to provide the CSS unit, e.g '3rem'.
     */
    size?: number | string;
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value?: number;
    /**
     * If true the component is displayed
     */
    loading?: boolean;
    /**
     * The variant to use.
     * Use indeterminate when there is no progress value.
     */
    variant?: 'determinate' | 'indeterminate';
    /**
     * If `true`, the shrink animation is disabled.
     * This only works if variant is `indeterminate`.
     */
    disableShrink?: boolean;
    color?: string;
}
const CircularProgress = ({
    size = 20, // Default to a larger size for better visibility
    loading = true,
    value = 0,
    variant = 'indeterminate',
    className,
    style,
    color = 'var(--sob-v2-color-palette-primary)',
    ...props
}: SobCircularProgressProps) => {
    const strokeDashoffset = 126 - (126 * value) / 100; // Adjusted for correct stroke size

    const customStyles = {
        ...style,
        width: `${size}px`,
        height: `${size}px`,
    };

    return (
        <>
            {loading ? (
                <div
                    className={`sob-circular-progress ${className ?? ' '} ${
                        variant === 'indeterminate' ? 'indeterminate' : 'determinate'
                    }`}
                    style={customStyles}
                    {...props}
                >
                    <svg className='sob-circular-progress-svg' viewBox='0 0 44 44'>
                        <circle
                            color={color}
                            className='sob-circular-progress-circle'
                            cx='22'
                            cy='22'
                            r='20'
                            fill='none'
                            strokeWidth='4'
                            strokeDasharray='126'
                            strokeDashoffset={variant === 'determinate' ? strokeDashoffset : 60}
                        />
                    </svg>
                </div>
            ) : null}
        </>
    );
};

export { CircularProgress };
