import React, { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import './spinnerLoading.scss';
export interface SpinnerLoadingProps {
    className?: string;
    /** Hex code of load colors */
    color?: string;
    /**
     * Can be number or string. When number, unit is assumed as px. When string, a unit is expected to be passed in
     */
    size?: number | string;
    /** the title of the component */
    title?: ReactNode;
    /** override default styles. Needs to be camelCase keys */
    style?: CSSProperties;
    loading?: boolean;
}

/**
 *
 * Indicate the loading state of a component
 *
 * ###Usage
 *
 *```JSX
 *
 * import {SpinnerLoading} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (<SpinnerLoading loading={true} color={"#4caace"} size={22} />);
 *   }
 * ```
 *
 *
 *
 *
 */

const SpinnerLoading: React.FC<SpinnerLoadingProps> = ({
    color = '#4caace',
    title = 'Veuillez patienter SVP …',
    size = 22,
    className,
    style,
}) => {
    const classes = classNames('sob-v2-spinner-loading', className);

    return (
        <div className={classes} style={style}>
            <h3 className={'sob-v2-spinner-loading-text'} style={{ color }}>
                {title}
            </h3>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={size}
                height={size}
                viewBox='0 0 24 24'
                fill='none'
                style={{
                    animation: 'rotate 2s linear infinite',
                    transformOrigin: 'center',
                }}
            >
                <path
                    d='M23.7465 17.4524C23.1026 20.1322 21.6118 22.459 19.5512 24L19.4647 23.8956C21.8751 20.9092 20.1767 16.7732 17.912 14.8966C16.0635 13.3702 14.1758 11.9151 12.3362 10.3796C10.7725 9.09284 9.37864 7.56554 8.19564 5.84284C7.92599 5.45731 7.69351 5.04089 7.50209 4.60056C7.20895 4.04624 7.12435 3.38422 7.26689 2.76005C7.40942 2.13588 7.76743 1.60067 8.26218 1.27208C8.31838 1.23481 8.37605 1.20003 8.43446 1.16856C9.16406 0.70251 9.95602 0.371396 10.7798 0.187987C11.9545 -0.00723987 13.1453 -0.05059 14.3289 0.0587895C15.539 0.235716 16.7126 0.646517 17.7974 1.27291C18.1297 1.39587 18.4269 1.61535 18.6587 1.90896C18.3482 2.01 18.1523 1.80875 17.9341 1.72427C17.0363 1.26793 16.0291 1.15671 15.069 1.40791C14.8496 1.45034 14.6429 1.5525 14.467 1.70542C14.2911 1.85834 14.1514 2.05733 14.0603 2.28488C13.9691 2.51243 13.9293 2.76158 13.9443 3.01042C13.9593 3.25925 14.0286 3.50015 14.1463 3.71192C14.3614 4.21926 14.6425 4.68813 14.9803 5.10327C16.8693 7.32126 18.9282 9.34952 21.1335 11.1648C21.166 11.1946 21.2363 11.1648 21.3901 11.1648C20.9058 10.4028 20.4436 9.71958 20.0229 9.00569C19.4218 8.10681 19.032 7.05309 18.8894 5.9414C18.8369 5.56436 18.8868 5.17835 19.0324 4.8334C19.1781 4.48845 19.4129 4.20046 19.7065 4.00675C20.6677 3.55705 22.2551 4.71817 22.3335 5.9298C22.2788 5.89916 22.2241 5.87266 22.1731 5.83705C21.9742 5.64478 21.723 5.53384 21.4605 5.52241C21.198 5.51097 20.9399 5.59971 20.7283 5.7741C20.5258 5.97978 20.3936 6.25809 20.3544 6.56116C20.3153 6.86422 20.3717 7.17309 20.5139 7.43462C20.8067 8.19604 21.1833 8.91355 21.6348 9.57051C22.5221 10.9875 23.7472 12.2696 23.9713 14.0328C24.0458 15.1787 23.9711 16.3306 23.7494 17.4524'
                    fill='var(--sob-v2-color-palette-primary)'
                />
                <path
                    d='M0.165032 11.0507C0.3204 10.3636 0.459455 9.70175 0.658326 9.03993C0.87838 8.21386 1.18435 7.41766 1.57034 6.66669C1.69863 6.93663 1.75129 7.24144 1.72182 7.54348C1.91137 9.8476 3.18539 11.457 4.66139 12.9231C5.87949 14.0741 7.17239 15.1285 8.53006 16.0779C9.74594 16.9434 10.7465 18.1207 11.4432 19.5058C11.5804 19.7875 11.6965 20.0807 11.7905 20.3826C12.3832 22.2534 11.705 23.5256 9.92604 23.894C8.45045 24.1488 6.93852 23.9421 5.56719 23.2983C4.19585 22.6545 3.02183 21.6002 2.18249 20.2587C1.26809 18.648 0.605073 16.8844 0.220188 15.0392C-0.0540749 13.7284 -0.0723341 12.3697 0.166586 11.0507'
                    fill='var(--sob-v2-color-palette-primary)'
                />
                <style>
                    {`
        @keyframes rotate {
          0% { transform: rotate(0deg) scale(2); }
          25% { transform: rotate(180deg) scale(1); }
          50% { transform: rotate(360deg) scale(2); }
          75% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(0deg) scale(2); }
        }
      `}
                </style>
            </svg>
        </div>
    );
};

export { SpinnerLoading };
