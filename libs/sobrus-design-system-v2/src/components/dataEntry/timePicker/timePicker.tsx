import classNames from 'classnames';

import ReactTimepicker from 'react-time-picker';
import { Size } from '@/components/types';
import './timePicker.scss';

export type AmPmType = 'am' | 'pm';
export type ClassName = string | null | undefined | (string | null | undefined)[];
export type Detail = 'hour' | 'minute' | 'second';
export type LooseValuePiece = string | Date | null;
export type LooseValue = LooseValuePiece | [LooseValuePiece, LooseValuePiece];
export type Value = string | null;
type Icon = React.ReactElement | string;
type IconOrRenderFunction = Icon | React.ComponentType | React.ReactElement;

export type CustomTimePickerProps = {
    /** aria-label for the AM/PM select input. */
    amPmAriaLabel?: string;
    /**
     * Automatically focuses the input on mount.
     */
    autoFocus?: boolean;
    className?: ClassName;
    clearAriaLabel?: string;
    clearIcon?: IconOrRenderFunction | null;
    clockAriaLabel?: string;
    clockClassName?: ClassName;
    clockIcon?: IconOrRenderFunction | null;
    closeClock?: boolean;
    'data-testid'?: string;
    disableClock?: boolean;
    disabled?: boolean;
    format?: string;
    hourAriaLabel?: string;
    hourPlaceholder?: string;
    id?: string;
    isOpen?: boolean;
    locale?: string;
    maxDetail?: Detail;
    maxTime?: string;
    minTime?: string;
    minuteAriaLabel?: string;
    minutePlaceholder?: string;
    name?: string;
    nativeInputAriaLabel?: string;
    onChange?: (value: Value) => void;
    onClockClose?: () => void;
    onClockOpen?: () => void;
    onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
    openClockOnFocus?: boolean;
    portalContainer?: HTMLElement | null;
    required?: boolean;
    secondAriaLabel?: string;
    secondPlaceholder?: string;
    value?: LooseValue;
    invalid?: boolean;
    size?: Size;
};

export const TimePicker = ({
    onChange,
    clockIcon = null,
    disableClock = true,
    hourPlaceholder = 'hh',
    minutePlaceholder = 'mm',
    secondPlaceholder = 'ss',
    locale = 'fr-FR',
    className,
    invalid,
    size,
    value,
    id,
    name,
    ...props
}: CustomTimePickerProps) => {
    const classes = classNames(
        'sob-v2-timepicker',
        invalid ? 'sob-v2-is-invalid' : false,
        size && size !== 'md' ? `sob-v2-timepicker-${size}` : false,
        className,
    );
    return (
        <div className='sob-v2-timepiker-wrapper'>
            <ReactTimepicker
                className={classes}
                clockIcon={clockIcon}
                disableClock={disableClock}
                hourPlaceholder={hourPlaceholder}
                minutePlaceholder={minutePlaceholder}
                secondPlaceholder={secondPlaceholder}
                locale={locale}
                onChange={onChange}
                value={value}
                id={name || id}
                name={name}
                {...props}
            />
            {invalid ? (
                <svg
                    className='error__icon'
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                >
                    <rect id='Canvas' width='18' height='18' fill='#da1e28' opacity='0' />
                    <path
                        id='Path_49'
                        data-name='Path 49'
                        d='M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1ZM7.7,3.388a.356.356,0,0,1,.169-.338,3.123,3.123,0,0,1,1.112-.229,3.431,3.431,0,0,1,1.116.172.388.388,0,0,1,.2.343V4.562c0,1.443-.288,5.445-.342,5.973a.264.264,0,0,1-.265.262l-.028,0H8.3a.284.284,0,0,1-.289-.236c-.05-.682-.311-4.55-.311-5.945ZM9,14.425a1.287,1.287,0,0,1-1.4-1.316,1.33,1.33,0,0,1,1.308-1.352q.046,0,.092,0a1.316,1.316,0,0,1,1.4,1.229q0,.061,0,.121A1.287,1.287,0,0,1,9,14.425Z'
                        fill='#da1e28'
                    />
                </svg>
            ) : (
                <></>
            )}
        </div>
    );
};
