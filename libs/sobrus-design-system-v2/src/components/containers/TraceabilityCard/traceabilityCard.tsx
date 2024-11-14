import { IconButton } from '@/actions';
import React, { FC, Fragment, ReactNode } from 'react';
import { HiOutlineCalendar } from 'react-icons/hi';
import AuditCardHeaderImg from '@/assets/timeline.png';
import { Card } from '@/containers';
import { DivGlobalProps } from '@/components/types';
import { generateRandomId } from '@/functions';
import { ItemLoader } from '@/contentDisplay';

import './traceabilityCard.scss';
export type TruncateTraceabilityCardProps =
    | {
          /**
           * Passed data array for creating custom sub-elements. Cannot be used with `creation` at the same time.
           */
          data: { icon?: ReactNode; title: ReactNode; value: ReactNode }[];

          /**
           * Creation prop should be `never` when `data` is used.
           *  @deprecated Use `data` instead. This props will be removed in a future release.
           */
          creation?: never;
      }
    | {
          /**
           * Data prop should be `never` when `creation` is used.
           */
          data?: never;

          /**
           * Passed creation details for generating sub-elements. Cannot be used with `data` at the same time.
           * @deprecated Use `data` instead. This props will be removed in a future release.
           */
          creation: { createdAt?: string; updatedAt?: string; createdBy?: string; updatedBy?: string };
      };
export interface TraceabilityCardProps extends Omit<DivGlobalProps, 'children'> {
    /**
     * The Header Title of the component. Pass `null` to use the default title.
     */
    HeaderTitle?: ReactNode | null;

    /**
     * The Header Icon of the component. Pass `null` to use the default icon.
     */
    HeaderIcon?: JSX.Element | null;

    /**
     * If `data` is not used, specify gender. 'female' will change text labels like "Créée" and "Mise à jour" accordingly.
     * @deprecated Use `data` instead. This props will be removed in a future release.
     */
    gender?: 'male' | 'female';
    loading?: boolean;
}

/**
 * TraceabilityCard Component
 *
 * The `TraceabilityCard` component is a structured card designed to display traceability information such as creation and update metadata or custom data entries.
 *
 * ### Props
 *
 * - `HeaderTitle`: (ReactNode | null) The title displayed in the card header. Passing `null` will use the default "Informations de traçabilité".
 * - `HeaderIcon`: (JSX.Element | null) The icon displayed in the card header. If `null`, a default `IconButton` with an image is used.
 * - `data`: (Array) An array of custom data objects for creating sub-elements. Cannot be used simultaneously with the `creation` prop.
 * - `creation`: (Object) Contains creation and update metadata for displaying predefined sub-elements. Cannot be used with the `data` prop.
 * - `gender`: ('male' | 'female') Specifies the gender for labels, affecting phrases like "Créée" and "Mise à jour". Defaults to 'male'.
 *
 * ### Usage Example
 *
 * ```jsx
 * import { TraceabilityCard, IconButton, HiOutlineCalendar } from "@sobrus-com/sobrus-design-system";
 * import AuditCardHeaderImg from 'assets/timeline.png';
 *
 * const Example = () => {
 *     return (
 *         <TraceabilityCard
 *             HeaderTitle={'Informations de traçabilité'}
 *             HeaderIcon={
 *                 <IconButton color="primary" className='sob-v2-traceability-header-icon'>
 *                     <img src={AuditCardHeaderImg} alt="Traceability header icon" className='sob-v2-traceability-card-header-img' />
 *                 </IconButton>
 *             }
 *             data={[
 *                 {
 *                     icon: <IconButton color="warning" className='sob-v2-traceability-data-icon'>
 *                             <HiOutlineCalendar size={12} />
 *                           </IconButton>,
 *                     title: 'Créée le :',
 *                     value: <p><strong>{new Date().toISOString().split('T')[0]}</strong> par <strong>user</strong></p>
 *                 },
 *                 {
 *                     icon: <IconButton color="warning" className='sob-v2-traceability-data-icon'>
 *                             <HiOutlineCalendar size={12} />
 *                           </IconButton>,
 *                     title: 'Mise à jour le :',
 *                     value: <p><strong>{new Date().toISOString().split('T')[0]}</strong> par <strong>user</strong></p>
 *                 }
 *             ]}
 *         />
 *     );
 * };
 * ```
 */
const TraceabilityCard = ({
    HeaderTitle = 'Informations de traçabilité',
    HeaderIcon = (
        <IconButton color='initial' className='sob-v2-traceability-header-icon'>
            <img
                src={AuditCardHeaderImg}
                alt='Traceability header icon'
                className='sob-v2-traceability-card-header-img'
            />
        </IconButton>
    ),
    data,
    creation,
    gender = 'male',
    loading,
    ...props
}: TraceabilityCardProps & TruncateTraceabilityCardProps) => {
    return (
        <Card {...props} className='sob-v2-traceability-card' cardTitle={HeaderTitle} IconButton={HeaderIcon}>
            {data && data?.length > 0 ? (
                data?.map((item) => (
                    <div key={generateRandomId()} className='sob-v2-traceability-card-item'>
                        {loading ? (
                            <ItemLoader width={25} height={25} />
                        ) : (
                            <div className='sob-v2-traceability-data-icon'>
                                {item?.icon ?? <HiOutlineCalendar size={16} color='#BE3610'></HiOutlineCalendar>}
                            </div>
                        )}

                        <div className='sob-v2-traceability-card-item-text'>
                            <h5>{loading ? <ItemLoader width={150} /> : item?.title ? item?.title : ''}</h5>
                            <p>{loading ? <ItemLoader width={110} /> : item?.value ? item?.value : ''}</p>
                        </div>
                    </div>
                ))
            ) : (
                <>
                    {creation?.createdAt || creation?.createdBy ? (
                        <>
                            <div className='sob-v2-traceability-card-item'>
                                <div className='sob-v2-traceability-data-icon'>
                                    <HiOutlineCalendar size={16} color='#BE3610'></HiOutlineCalendar>
                                </div>
                                {creation?.createdAt && (
                                    <div className='sob-v2-traceability-card-item-text'>
                                        <h5>Créé{`${gender === 'female' ? 'e' : ''}`} le :</h5>
                                        <p>
                                            {creation?.createdAt ? creation?.createdAt : ''}
                                            {creation?.createdBy ? ` par ${creation?.createdBy}` : ''}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                    <div className='sob-v2-traceability-card-item'>
                        <div className='sob-v2-traceability-data-icon'>
                            <HiOutlineCalendar size={16} color='#BE3610'></HiOutlineCalendar>
                        </div>
                        <div className='sob-v2-traceability-card-item-text'>
                            <h5>Mis{`${gender === 'female' ? 'e' : ''}`} à jour le :</h5>
                            <p>
                                {creation?.updatedAt ? creation?.updatedAt : ''}
                                {creation?.updatedBy ? ` par ${creation?.updatedBy}` : ''}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </Card>
    );
};
export { TraceabilityCard };
