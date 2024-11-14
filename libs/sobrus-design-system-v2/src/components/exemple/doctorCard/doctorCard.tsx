import React, { FC, ReactNode } from 'react';
import { Card } from '@/containers';
import doctorSalim from '@/assets/doctorSalim.png';
import { DivGlobalProps } from '@/components/types';
import classNames from 'classnames';
import { Avatar } from '@/contentDisplay';
import './doctorCard.scss';

export interface DoctorCardProps extends DivGlobalProps {
    /**
     * profile picture
     */
    imageSrc?: string;
    /**
     * full Name
     */
    doctorName?: string;
    action?: ReactNode;
}

/**
 *
  * DoctorCard is Card Doc ready to use.
 *
 * ###Usage
 *
 *```JSX
 *
 * import { DoctorCard } from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (<DoctorCard
                imageSrc={imageSrc}
                doctorName={doctorName}
                value={'Dr Salim'}
            />);
*   }
 * ```
 *
 */

export const DoctorCard: FC<DoctorCardProps> = ({
    imageSrc = doctorSalim,
    doctorName,
    children,
    className,
    action,
    ...props
}) => {
    const classes = classNames('sob-v2-doctor-card', className);
    return (
        <Card {...props} className={classes}>
            <div className='sob-v2-doctor-info'>
                <Avatar image={imageSrc} name={doctorName} size='xl' />
                <div className='sob-v2-doctor-card-infos-container'>
                    <h2 className='sob-v2-doctor-card-name'>{doctorName}</h2>
                    {children ? <span className='sob-v2-doctor-card-specialty'>{children}</span> : <></>}
                </div>
            </div>
            <div className='sob-v2-doctor-card-action'>{action}</div>
        </Card>
    );
};
