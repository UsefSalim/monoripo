import classNames from 'classnames';
import { forwardRef, ReactNode, useEffect, useState } from 'react';
import Select, { ActionMeta, GroupBase, OnChangeValue, Props, PropsValue } from 'react-select';
import AsyncCreatableSelect from 'react-select/async-creatable';
import CreatableSelect from 'react-select/creatable';
import ReactSelectAsync, { AsyncProps } from 'react-select/async';
import { CreatableAdditionalProps } from 'react-select/dist/declarations/src/useCreatable';

import './inputSelect.scss';

export type DefaultOption = {
    value?: any;
    label: any;
    [key: string]: any; // Allow additional properties
};
/* eslint-disable react/display-name */
export type SobInputSelectTypes<Option, IsMulti extends boolean = false> = {
    size?: 'sm' | 'md';
    invalid?: boolean;
    async?: boolean;
    creatable?: boolean;
    onChange?: (newValue: OnChangeValue<Option, IsMulti> | null, actionMeta?: ActionMeta<Option>) => void;
    disabled?: boolean;
    value?: any;
    defaultValue?: any;
    options?: Option[];
    noOptionsMessage?: ReactNode;
    inPortail?: boolean;
};
export type SobCustomCreatableAdditionalProps<
    Option extends DefaultOption,
    Group extends GroupBase<Option> = GroupBase<Option>,
> = CreatableAdditionalProps<Option, Group>;

export type SobInputSelectProps<
    Option extends DefaultOption,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
> = Omit<Props<Option, IsMulti, Group>, 'value' | 'defaultValue' | 'noOptionsMessage'> &
    SobInputSelectTypes<Option, IsMulti> &
    SobCustomCreatableAdditionalProps<Option, Group>;

export type SobInputAsyncSelectProps<
    Option extends DefaultOption,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
> = Omit<AsyncProps<Option, IsMulti, Group>, 'value' | 'defaultValue' | 'noOptionsMessage'> &
    SobInputSelectTypes<Option, IsMulti> &
    SobCustomCreatableAdditionalProps<Option, Group>;
function InputSelectComponent<
    Option extends DefaultOption,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
>(
    {
        onChange,
        size = 'md',
        classNamePrefix = 'sob-v2-select',
        placeholder = 'Sélectionner',
        noOptionsMessage = 'Aucun résultat',
        invalid = false,
        isClearable = false,
        className,
        isMulti,
        autoFocus,
        styles,
        disabled,
        value,
        async = false,
        creatable = false,
        options,
        defaultValue,
        inPortail = true,
        menuPortalTarget,
        menuPosition,
        name,
        id,
        ...props
    }: SobInputSelectProps<Option, IsMulti, Group> | SobInputAsyncSelectProps<Option, IsMulti, Group>,
    ref: any,
) {
    const [primaryColor, setprimaryColor] = useState('#18b1d4');
    const [primaryTextColor, setprimaryTextColor] = useState('var(--sob-gray-white)');
    const Tag =
        creatable && async ? AsyncCreatableSelect : creatable ? CreatableSelect : async ? ReactSelectAsync : Select;
    const classes = classNames(
        'sob-v2-select',
        invalid ? 'sob-v2-is-invalid' : false,
        size && size !== 'md' ? `sob-v2-select-${size}` : false,
        isMulti ? 'sob-v2-isMulti' : false,
        isClearable ? 'sob-v2-select-clearable' : '',
        className,
    );
    // const menuPortalTarget = document.getElementById('root');
    useEffect(() => {
        // get color variable form css
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--sob-color-palette-primary');

        if (primaryColor) {
            setprimaryColor(primaryColor);
        }
        const primaryTextColor = getComputedStyle(document.documentElement).getPropertyValue('--gray-900');

        if (primaryTextColor) {
            setprimaryTextColor(primaryTextColor);
        }
        // end get color variable form css
    }, []);
    const IconErrorsClassName = classNames(
        'sob-v2-select-invalidIcon',
        size && size !== 'md' ? `sob-v2-select-invalidIcon-${size}` : false,
    );

    useEffect(() => {
        if (autoFocus && ref && 'current' in ref && ref?.current) {
            ref?.current?.focus();
        }
    }, [autoFocus, ref]);
    const isPrimitiveValue = (value: any): value is string | number | boolean => {
        return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
    };
    function isOptionType<Option>(option: any): option is Option {
        return option && typeof option.value !== 'undefined';
    }

    return (
        <div id='select_container' className='sob-v2-select-container'>
            <Tag
                ref={ref}
                {...props}
                isDisabled={disabled}
                className={classes}
                placeholder={placeholder}
                classNamePrefix={classNamePrefix}
                menuPosition={inPortail ? 'fixed' : menuPosition}
                options={options}
                theme={(theme) => ({ ...theme, borderRadius: 0 })}
                onChange={onChange}
                inputId={name || id}
                name={name}
                isMulti={isMulti}
                isClearable={isClearable}
                noOptionsMessage={() => noOptionsMessage}
                autoFocus={autoFocus}
                menuPortalTarget={inPortail ? document.body : menuPortalTarget}
                value={
                    isPrimitiveValue(value)
                        ? (options?.find(
                              (option) => isOptionType<Option>(option) && option.value === value,
                          ) as PropsValue<Option>) || null
                        : value
                }
                defaultValue={
                    isPrimitiveValue(defaultValue)
                        ? (options?.find(
                              (option) => isOptionType<Option>(option) && option.value === defaultValue,
                          ) as PropsValue<Option>) || null
                        : defaultValue
                }
                styles={{
                    ...styles,
                    ...(inPortail ? { menuPortal: (base) => ({ ...base, zIndex: 9999 }) } : {}),
                    option: (provided, state): any => ({
                        ...provided,
                        backgroundColor: state.isSelected ? primaryColor : undefined,
                        color: state.isSelected ? primaryTextColor : undefined,
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: '300',
                        fontSize: 13,
                        ':hover': {
                            color: state.isSelected ? primaryTextColor : '#000',
                            backgroundColor: state.isSelected ? primaryColor : primaryColor + '1C',
                        },
                    }),
                }}
            />
            {isClearable && value ? (
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
            ) : null}
            {invalid && (
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
            )}
        </div>
    );
}

// Use generics explicitly with forwardRef
const InputSelect = forwardRef(InputSelectComponent) as <
    Option extends DefaultOption,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
>(
    props: (SobInputSelectProps<Option, IsMulti, Group> | SobInputAsyncSelectProps<Option, IsMulti, Group>) & {
        ref?: React.Ref<any>;
    },
) => ReturnType<typeof InputSelectComponent>;

export * from 'react-select';
export * from 'react-select/async';
export * from 'react-select/async-creatable';
export { InputSelect };
