/* eslint-disable react/display-name */

import React, { ForwardedRef, ReactNode, forwardRef, useState } from 'react';
import classNames from 'classnames';
import { InputGlobalProps, Size, TextareaGlobalProps } from '@/components/types';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import textareaIcon from '@/assets/textareanicon.svg';

import './input.scss';
export interface CustomInputProps {
    /**
     * The size of the component
     */
    size?: Size;
    /**
     * The size of the component
     */
    type?: 'text' | 'number' | 'password' | 'email' | 'hidden' | 'tel' | 'textarea';
    /**
     * if true the input component hav a invalid style
     */
    invalid?: boolean;
    /**
     * max char input defalut = 400
     */
    maxChar?: number;
    /**
     * if passed the component hav a counter
     */
    counter?: boolean;
    placeholder?: ReactNode;
    hasCountInfo?: ReactNode;
}

export type SobInputProps = Omit<InputGlobalProps, 'size' | 'placeholder'>;
export type SobTextareaProps = Omit<TextareaGlobalProps, 'size' | 'placeholder'>;

export type GlobalSobInputProps = (CustomInputProps & SobInputProps) | (CustomInputProps & SobTextareaProps);

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, GlobalSobInputProps>(
    (
        {
            className,
            type = 'text',
            size,
            invalid,
            maxChar = 400,
            counter: hasCount,
            disabled,
            hasCountInfo,
            name,
            id,
            ...props
        },
        ref,
    ) => {
        const [counter, setCounter] = useState(0);
        const [passwordType, setPasswordType] = useState(type);
        const classes = classNames(
            'sob-v2-form-control',
            invalid || counter > maxChar ? 'sob-v2-is-invalid' : false,
            size && size !== 'md' ? `sob-v2-form-control-${size}` : false,
            type === 'textarea' ? 'sob-v2-textarea' : false,
            type === 'password' ? 'sob-v2-password' : false,
            className,
        );

        if (type === 'textarea') {
            const restProps = props as unknown as SobTextareaProps;
            return (
                <div
                    className={`sob-v2-textarea-container ${invalid ? ' sob-v2-is-invalid' : ''}`}
                    aria-invalid={invalid}
                >
                    {hasCount && (
                        <div className='sob-v2-textarea-counter'>
                            <div>{counter + '/' + maxChar}</div>
                            {hasCountInfo !== undefined && (
                                <>
                                    <div className='point'></div>
                                    <div>{hasCountInfo}</div>
                                </>
                            )}
                        </div>
                    )}
                    <textarea
                        className={classes}
                        ref={ref as ForwardedRef<HTMLTextAreaElement>}
                        onInput={(e: any) => hasCount && setCounter(e.target.value.length)}
                        disabled={disabled}
                        id={name || id}
                        name={name}
                        {...restProps}
                    />
                    <img className='textarea__icon' src={textareaIcon} alt='' />
                    {invalid && (
                        <div>
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
        const restProps = props as unknown as SobInputProps;
        return (
            <div className='sob-v2-inputContainer'>
                {hasCount && (
                    <div className='sob-v2-textarea-counter'>
                        <div>{counter + '/' + maxChar}</div>
                        {hasCountInfo !== undefined && (
                            <>
                                <div className='point'></div>
                                <div>{hasCountInfo}</div>
                            </>
                        )}
                    </div>
                )}
                <input
                    onInput={(e: any) => setCounter(e.target.value.length)}
                    ref={ref as ForwardedRef<HTMLInputElement>}
                    className={classes}
                    aria-invalid={invalid}
                    type={passwordType}
                    readOnly={disabled}
                    disabled={disabled}
                    id={name || id}
                    name={name}
                    {...restProps}
                />

                {(invalid || counter > maxChar) && type !== 'password' && (
                    <svg
                        className={'sob-v2-password-invalid'}
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
                )}

                {type === 'password' &&
                    (passwordType === 'password' ? (
                        <AiOutlineEye
                            onCopy={(e) => e?.preventDefault()}
                            size={20}
                            className={'sob-v2-password-eye'}
                            onClick={() => setPasswordType((prev) => (prev === 'text' ? 'password' : 'text'))}
                        />
                    ) : (
                        <AiOutlineEyeInvisible
                            onCopy={(e) => e?.preventDefault()}
                            size={20}
                            className={'sob-v2-password-eye'}
                            onClick={() => setPasswordType((prev) => (prev === 'text' ? 'password' : 'text'))}
                        />
                    ))}
            </div>
        );
    },
);

export { Input };
