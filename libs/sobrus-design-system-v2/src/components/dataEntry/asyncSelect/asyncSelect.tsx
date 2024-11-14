import React, { FC, Fragment, ReactNode, Ref, RefAttributes, useEffect, useState } from 'react';
import classNames from 'classnames';
import ReactSelectAsync from 'react-select/async';
import {
    ActionMeta,
    GroupBase,
    InputActionMeta,
    MenuPosition,
    MultiValue,
    OptionsOrGroups,
    SingleValue,
} from 'react-select';
import makeAnimated from 'react-select/animated';
import Select, { FormatOptionLabelMeta } from 'react-select/dist/declarations/src/Select';
import { Size } from '@/components/types';

import './asyncSelect.scss';

export type NewValuetype =
    | MultiValue<string | number | boolean | object>
    | SingleValue<string | number | boolean | object>;
export type ActionMetatype = ActionMeta<string | number | boolean | object>;
export type inputAsyncChange = (newValue: NewValuetype, actionMeta?: ActionMetatype) => void;
export type AsyncSelectRef = Ref<Select<object, boolean, GroupBase<object>>>;

export interface InputAsyncSelectProps {
    /** If cacheOptions is truthy, then the loaded data will be cached. The cache will remain until cacheOptions changes value. */
    cacheOptions?: boolean;
    /**
     * Override or extend the styles applied to the component.
     */
    className?: string;
    /** Name of the HTML Input (optional - without this, no input will be rendered) */
    name?: string;
    /** If provided, all inner components will be given a prefixed className attribute. */
    classNamePrefix?: string;
    /** control the default value ex : { value: "value1", label: "label1",...other_fields } */
    defaultValue?: object | string | number | boolean | null;
    /** control the current value ex : { value: "value1", label: "label1",...other_fields } */
    value?: object | string | number | boolean | null;
    /**
     * Handle change events on the select
     */
    onChange?: inputAsyncChange;
    /** allow the user to search for matching options ex: isSearchable={true} */
    isSearchable?: boolean;
    /** allow the user clear options ex: isClearable={true} */
    isClearable?: boolean;
    placeholder?: ReactNode;
    /** usually used for invalid data (show red border and message)  */
    invalid?: boolean;
    /** if true the component is disabled */
    disabled?: boolean;
    /**  allow the user to select multiple options */
    isMulti?: boolean;
    /** the message shown in cas no options  */
    noOptionsMessage?: string;
    /**
     * The default set of options to show before the user starts searching. When set to true, the results for loadOptions('') will be autoloaded.
     */
    defaultOptions?: Object[];
    /**
     * Will cause the select to be displayed in the loading state, even if the Async select is not currently waiting for loadOptions to resolve
     */
    isLoading?: boolean;
    /**
     * Function that returns a promise, which is the set of options to be used once the promise resolves.
     * loadOptions = {(inputValue, callback)=>{
     *
     * //async function code;
     *
     * // call this callback function in the end with array of OPTIONS you want to show
     *
     * callback([{ value: "value1", label: "label1",...other_fields } ....]});
     *
     * }
     */
    loadOptions?: any;
    /**
     * The size of the component
     */
    size?: Size;
    ref?: React.Ref<Select<string | number | boolean | object, boolean, GroupBase<object>>> | undefined;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
    id?: string | undefined;
    onInputChange?: ((newValue: string, actionMeta: InputActionMeta) => void) | undefined;
    formatOptionLabel?:
        | ((
              data: string | number | boolean | object,
              formatOptionLabelMeta: FormatOptionLabelMeta<string | number | boolean | object>,
          ) => React.ReactNode)
        | undefined;
    onMenuScrollToBottom?: ((event: WheelEvent | TouchEvent) => void) | undefined;
    options?: OptionsOrGroups<string | number | boolean | object, GroupBase<object>> | undefined;
    menuPosition?: MenuPosition | undefined;
    closeMenuOnScroll?: boolean | ((event: Event) => boolean);
}
const animatedComponents = makeAnimated();

/**
 * @deprecated Use `inputselect` with async `props` instead. This component will be removed in a future release.
 */
export const AsyncSelect: FC<InputAsyncSelectProps> = ({
    className,
    name,
    size,
    classNamePrefix,
    defaultValue,
    value,
    onChange,
    isSearchable,
    isClearable,
    placeholder,
    invalid,
    isMulti,
    disabled,
    isLoading,
    defaultOptions,
    noOptionsMessage,
    loadOptions,
    ref,
    onMenuClose,
    onMenuOpen,
    id,
    onInputChange,
    formatOptionLabel,
    onMenuScrollToBottom,
    options,
    menuPosition,
    closeMenuOnScroll,
    ...props
}) => {
    const [primaryColor, setprimaryColor] = useState('#18b1d4');
    const [primaryTextColor, setprimaryTextColor] = useState('var(--sob-gray-white)');
    const classes = classNames(
        'sob-v2-select',
        size ? `sob-v2-select-${size}` : '',
        invalid ? 'sob-v2-is-invalid' : '',
        isMulti ? 'sob-v2-isMulti' : '',
        className,
    );

    useEffect(() => {
        // get color variable form css
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--sob-color-palette-primary');
        if (primaryColor) setprimaryColor(primaryColor);

        const primaryTextColor = getComputedStyle(document.documentElement).getPropertyValue('--gray-900');
        if (primaryTextColor) {
            setprimaryTextColor(primaryTextColor);
        }
        // return () => {};
    }, []);
    return (
        <div className='sob-v2-select-container'>
            <ReactSelectAsync
                id={id}
                menuPosition={menuPosition}
                isClearable={isClearable}
                closeMenuOnScroll={closeMenuOnScroll}
                ref={ref}
                className={classes}
                noOptionsMessage={() => noOptionsMessage}
                isDisabled={disabled}
                components={animatedComponents}
                isMulti={isMulti}
                name={name}
                classNamePrefix={classNamePrefix}
                options={options}
                defaultOptions={defaultOptions}
                loadOptions={loadOptions}
                defaultValue={
                    typeof defaultValue === 'object'
                        ? defaultValue
                        : options?.find((ele: any) => ele?.defaultValue === defaultValue) || null
                }
                value={typeof value === 'object' ? value : options?.find((ele: any) => ele?.value === value) || null}
                onChange={onChange}
                isSearchable={isSearchable}
                placeholder={placeholder}
                isLoading={isLoading}
                onMenuOpen={onMenuOpen}
                onMenuClose={onMenuClose}
                onInputChange={onInputChange}
                formatOptionLabel={formatOptionLabel}
                onMenuScrollToBottom={onMenuScrollToBottom}
                styles={{
                    option: (provided, state): any => ({
                        ...provided,
                        backgroundColor: state.isSelected && primaryColor,
                        color: state.isSelected && primaryTextColor,
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: '300',
                        fontSize: 13,
                        ':hover': {
                            color: state.isSelected ? primaryTextColor : '#000',
                            backgroundColor: state.isSelected ? primaryColor : primaryColor + '1C',
                        },
                    }),
                }}
                {...props}
            />
            {isClearable && value && isMulti ? (
                <svg
                    className='close__svg'
                    fill='none'
                    height='16'
                    viewBox='0 0 18 18'
                    width='16 '
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={() => onChange?.(null)}
                >
                    <g id='sobicons/saas-sys/Outline/x'>
                        <path
                            d='M4.5 13.5L13.5 4.5M4.5 4.5L13.5 13.5'
                            id='Icon'
                            stroke='#627282'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='1.5'
                        />
                    </g>
                </svg>
            ) : (
                <Fragment />
            )}
            {invalid ? (
                <div className={'sob-v2-select-invalidIcon'}>
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
const defaultProps = {
    name: 'searchSelect',
    classNamePrefix: 'sob-v2-select',
    placeholder: 'Sélectionner',
    noOptionsMessage: 'Aucun résultat',
    isMulti: false,
    cacheOptions: true,
};
AsyncSelect.defaultProps = defaultProps;
