import React, { FC, ReactNode, useState } from 'react';
import primaryImg from '@/assets/drugs.png';
import { useInterval } from '@/hooks/hooks';
import { DivGlobalProps } from '@/components/types';
import classNames from 'classnames';
import './statisticalCard.scss';

export interface StatisticalCardProps extends Omit<DivGlobalProps, 'title'> {
    /**
     * Counter number
     */
    number: number;
    /**
     * Counter number
     */
    title?: ReactNode;
    /**
     * icon placed botton right
     */
    icon?: ReactNode;
    /**
     * description of the component
     */
    description?: string;
    /**
     * change the color of the background
     */
    bgColor?: string;
    /**
     * change the color of the number
     */
    numberColor?: string;
    /**
     * change the color of the description
     */
    descriptionColor?: string;
    /**
     *  src of img tag
     */
    src?: string;
}

export function Counter(number: number) {
    const [count, setCount] = useState(0);

    useInterval(
        () => {
            // Your custom logic here
            if (number > count) {
                setCount(count + 1);
            }
        },
        number < 500 ? 10 : 2,
    );

    return <span className='sob-v2-StatisticalCard__number'>{count}</span>;
}

/**
  * StatisticalCard with dropdown in single line of code.
 *
 * ###Usage
 *
 *```JSX
 *
 * import { DoctorCard } from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (<StatisticalCard
                    number={100}
                    icon={'../../image.svg'}
                    description={"Médicaments et produits de Para référencés."}
                    bgColor={'#00000010'}
                    descriptionColor={'#000000'}
                />);
*   }
 * ```
 *
 */

export const StatisticalCard: FC<StatisticalCardProps> = ({
    descriptionColor,
    description,
    icon,
    number,
    bgColor,
    numberColor,
    className,
    style,
    src = primaryImg,
    title,
    ...props
}) => {
    const classes = classNames('sob-v2-StatisticalCard__container', className);
    return (
        <div {...props} className={classes} style={{ backgroundColor: bgColor, ...style }}>
            <div>
                <div>{title}</div>
                <div style={{ color: numberColor }}>{Counter(number)}</div>
            </div>
            <div>
                <p style={{ color: descriptionColor ? descriptionColor : '' }} className='sob-v2-StatisticalCard__desc'>
                    {description}
                </p>
            </div>

            <span className='sob-v2-StatisticalCard__img'>
                {icon ? icon : <img src={src} alt='StatisticalCard background image' />}
            </span>
        </div>
    );
};
