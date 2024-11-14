import classNames from 'classnames';
import { DivGlobalProps } from '@/components/types';
import React, { FC } from 'react';

export interface FormStepProps extends DivGlobalProps {
    text?: string;
    /** step number */
    number?: number;
    /** current active step */
    active?: boolean;
    /** succed step, active and succes both should be true */
    succes?: boolean;
    /** mark the last item of steps to remove the arrow */
    last?: boolean;
}

const FormStep: FC<FormStepProps> = ({ text, number, active, succes, last, className, ...props }) => {
    const classes = classNames(
        'sob-v2-multistep-card',
        active && 'sob-v2-multistep-card-active',
        succes && 'sob-v2-multistep-card-succes',
        className,
    );

    return (
        <div {...props} className={classes}>
            <div className='sob-v2-multistep-number'>
                {succes ? (
                    <svg xmlns='http://www.w3.org/2000/svg' width='19.832' height='14.339' viewBox='0 0 19.832 14.339'>
                        <path
                            id='Icon_feather-check'
                            data-name='Icon feather-check'
                            d='M21.59,9,10.872,19.718,6,14.846'
                            transform='translate(-3.879 -6.879)'
                            fill='none'
                            stroke='#fff'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='3'
                        />
                    </svg>
                ) : (
                    number
                )}
            </div>
            <div className='sob-v2-multistep-text'>{text}</div>
            {!last ? (
                <svg xmlns='http://www.w3.org/2000/svg' width='5.897' height='10.314' viewBox='0 0 5.897 10.314'>
                    <path
                        id='Icon_ionic-ios-arrow-forward'
                        data-name='Icon ionic-ios-arrow-forward'
                        d='M15.366,11.351l-3.9-3.9a.734.734,0,0,1,0-1.041.743.743,0,0,1,1.044,0l4.422,4.419a.736.736,0,0,1,.021,1.016L12.51,16.3a.737.737,0,1,1-1.044-1.041Z'
                        transform='translate(-11.246 -6.196)'
                        fill='#9d9d9d'
                    />
                </svg>
            ) : (
                <></>
            )}
        </div>
    );
};

export { FormStep };
