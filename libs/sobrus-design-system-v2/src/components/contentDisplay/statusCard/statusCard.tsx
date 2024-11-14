import React, { ReactNode } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import { ItemLoader, Collapse } from '@/contentDisplay';
import './statusCard.scss';
export type Status = {
    title: string;
    label?: ReactNode;
    icon: React.ReactNode;
    color: string;
    loading?: boolean;
};

export interface IStatusCardProps {
    status: Status;
    statusHistory?: Status[];
}

/**
 * A StatusCard displays a status and its associated timeline in a collapsible format.
 *
 * ### Usage
 *
 * ```JSX
 *
 * import { StatusCard } from "@sobrus-com/sobrus-design-system";
 * import { LuCheckCircle, LuAlertCircle } from 'react-icons/lu';
 *
 * const Example = () => {
 *   const status = {
 *     label: 'Completed',
 *     date: '2023-09-06',
 *     icon: <LuCheckCircle />,
 *     color: '#28a745',
 *     createdBy: { firstName: 'John', lastName: 'Doe' }
 *   };
 *
 *   const statusHistory = [
 *     {
 *       label: 'In Progress',
 *       date: '2023-09-05',
 *       icon: <LuAlertCircle />,
 *       color: '#ffc107',
 *       createdBy: { firstName: 'Jane', lastName: 'Smith' }
 *     },
 *     {
 *       label: 'Completed',
 *       date: '2023-09-06',
 *       icon: <LuCheckCircle />,
 *       color: '#28a745',
 *       createdBy: { firstName: 'John', lastName: 'Doe' }
 *     }
 *   ];
 *
 *   return (
 *     <StatusCard
 *       status={status}
 *       statusHistory={statusHistory}
 *     />
 *   );
 * }
 * ```
 *
 * The `StatusCard` component can display the current status and, if available, the status history in a collapsible timeline.
 *
 */

const StatusCard = ({ status, statusHistory }: IStatusCardProps) => {
    return statusHistory && statusHistory.length > 0 ? (
        <Collapse
            header={({ open, toggle }) => (
                <button onClick={toggle} className='sob-v2-status-card__toggler'>
                    <StatusCardHeader status={status} open={open} whithArrow={true} />
                </button>
            )}
        >
            <StatusTimeLine statusHistory={statusHistory} />
        </Collapse>
    ) : (
        <StatusCardHeader status={status} />
    );
};

const StatusCardHeader = ({
    status,
    open,
    whithArrow = false,
}: {
    status: Status;
    open?: boolean;
    whithArrow?: boolean;
}) => {
    return (
        <div
            className='sob-v2-status-card__container'
            style={{ borderColor: status?.loading ? '#dcdcdc' : status.color }}
        >
            <div className='sob-v2-status-card__content'>
                {status?.loading ? <ItemLoader width={16} /> : <span>{status.icon}</span>}
                {status?.loading ? (
                    <ItemLoader width={150} />
                ) : (
                    <div className='sob-v2-status-card__text'>
                        <p className='sob-v2-status-card__title' style={{ color: status.color }}>
                            {status.title}
                        </p>
                        <p className='sob-v2-status-card__date'>{status.label}</p>
                    </div>
                )}
            </div>
            {whithArrow && (
                <LuChevronDown
                    className={`sob-v2-status-card__arrow ${open ? 'sob-v2-status-card__arrow-open' : ''}`}
                    size={20}
                    color={status.color}
                />
            )}
        </div>
    );
};

const StatusTimeLine = ({ statusHistory }: { statusHistory: Status[] }) => {
    return (
        <div className='sob-v2-status-timeline sob-v2-status-timeline__card'>
            <ul className='sob-v2-status-timeline__list'>
                {statusHistory.map((history, index) => (
                    <li key={index} className='sob-v2-status-timeline__item'>
                        <div className='sob-v2-status-timeline__icon'>
                            {history?.loading ? <ItemLoader width={16} /> : history.icon}
                        </div>

                        {history?.loading ? (
                            <>
                                <ItemLoader width={150} />
                                <br />
                                <ItemLoader width={100} />
                            </>
                        ) : (
                            <div className='sob-v2-status-timeline__item-content'>
                                <p className='sob-v2-status-timeline__item__status' style={{ color: history.color }}>
                                    {history.title}
                                </p>
                                <span className='sob-v2-status-timeline__item__label'>{history?.label}</span>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { StatusCard };
export * from './collapse/collapse';
