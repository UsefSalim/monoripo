import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import {
    default as DefaultDatePicker,
    ReactDatePickerProps,
    registerLocale,
    setDefaultLocale,
    getDefaultLocale,
    CalendarContainer,
} from 'react-datepicker';

import { Size } from '@/components/types';

export interface DatePickerProps extends Omit<ReactDatePickerProps, 'placeholderText'> {
    /** usually used for invalid data (show red border and message)  */
    invalid?: boolean;
    inputClassName?: string;
    /**
     * The size of the component
     */
    size?: Size;
    placeholderText?: ReactNode;
    intoPortal?: boolean;
}

/**
 * ColorPicker for picking a color
 *
 * ###Usage
 *
 *```JSX
 *
 * import {ColorPicker} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
        const [startDate, setStartDate] = useState<Date>(new Date());

        return (
            <FormGroup>
                <Label for="exampleText">Médecin traitant</Label>
                <DatePicker
                    calendarMainColor="primary"
                    dateFormat="yyyy-MM-dd"
                    id="exampleText"
                    name="text"
                    selected={startDate}
                    onChange={(update: any) => {
                        setStartDate(update);
                    }}
                />
                <FormFeedback valid={true}>Sweet! that name is available</FormFeedback>
            </FormGroup>
 *```
 */

const DatePicker: FC<DatePickerProps> = ({
    className,
    inputClassName,
    invalid,
    placeholderText,
    intoPortal = true,
    onKeyDown,
    size,
    todayButton,
    dateFormat = 'P',
    locale = 'fr',
    popperModifiers,
    name,
    id,
    ...props
}) => {
    const classes = classNames('sob-v2-date-picker', todayButton ? 'sob-v2-select-today' : false, className);

    const inputClasses = classNames(
        'sob-v2-form-control',
        'DatePicker__input',
        invalid && 'sob-v2-datePicker-invalid',
        intoPortal && 'sob-v2-datePicker-intoPortal',
        size ? `DatePicker__input-${size}` : false,
        inputClassName,
    );
    const IconErrorsClassName = classNames(
        'sob-v2-select-invalidIcon',
        size && size !== 'md' ? `sob-v2-select-invalidIcon-${size}` : false,
    );

    return (
        <div className='sob-v2-datepicker-container'>
            <DefaultDatePicker
                locale={locale}
                dateFormat={dateFormat}
                calendarClassName={classes}
                className={inputClasses}
                todayButton={todayButton}
                id={name || id}
                name={name}
                placeholderText={placeholderText ? (placeholderText as string) : undefined}
                onKeyDown={(e) => {
                    if (e.key === 'Tab') {
                        const scrollY = window.scrollY;
                        window.scrollTo(0, scrollY + 1);
                        window.scrollTo(0, scrollY);
                    }
                    if (onKeyDown) onKeyDown(e);
                }}
                closeOnScroll={(e) => e.target === document}
                popperModifiers={[
                    ...(popperModifiers ?? []),
                    {
                        name: 'zIndex',
                        options: {
                            zIndex: intoPortal ? 9999 : 1,
                        },
                    },
                ]}
                {...props}
                portalId='sob-v2-portal'
            />
            {invalid ? (
                <div className={IconErrorsClassName}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
                        <rect id='Canvas' width='18' height='18' fill='#da1e28' opacity='0' />
                        <path
                            id='Path_49'
                            data-name='Path 49'
                            d='M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1ZM7.7,3.388a.356.356,0,0,1,.169-.338,3.123,3.123,0,0,1,1.112-.229,3.431,3.431,0,0,1,1.116.172.388.388,0,0,1,.2.343V4.562c0,1.443-.288,5.445-.342,5.973a.264.264,0,0,1-.265.262l-.028,0H8.3a.284.284,0,0,1-.289-.236c-.05-.682-.311-4.55-.311-5.945ZM9,14.425a1.287,1.287,0,0,1-1.4-1.316,1.33,1.33,0,0,1,1.308-1.352q.046,0,.092,0a1.316,1.316,0,0,1,1.4,1.229q0,.061,0,.121A1.287,1.287,0,0,1,9,14.425Z'
                            fill='#da1e28'
                        />
                    </svg>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export { DatePicker, registerLocale, setDefaultLocale, getDefaultLocale, CalendarContainer };
