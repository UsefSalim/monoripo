import { DivGlobalProps } from '@/components/types';
import './linearProgress.scss';

export interface SobLinearProgressProps extends DivGlobalProps {
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
     * If `true`, disables the animation in indeterminate mode.
     */
    disableAnimation?: boolean;
    color?: string;
}
const LinearProgress = ({
    value = 0,
    loading = true,
    variant = 'indeterminate',
    className,
    disableAnimation = false,
    color = 'var(--sob-font-color-default)',
    ...props
}: SobLinearProgressProps) => {
    return (
        <>
            {loading ? (
                <div className={`sob-linear-progress ${className ?? ''} ${variant}`} {...props}>
                    <div
                        className={`sob-linear-progress-bar ${variant} ${disableAnimation ? 'no-animation' : ''}`}
                        style={{
                            width: variant === 'determinate' ? `${value}%` : '',
                            backgroundColor: color, // Apply the color here
                        }}
                    />
                </div>
            ) : null}
        </>
    );
};

export { LinearProgress };
