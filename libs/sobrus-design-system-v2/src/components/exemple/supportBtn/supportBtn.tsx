import React, { FC, ReactNode, useRef, useState } from 'react';
import userRefer from '@/assets/user_refer.png';
import { FiPhone } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';
import { MdContentCopy, MdOutlineMoreVert } from 'react-icons/md';
import { IconButton } from '@/actions';
import { Card } from '@/containers';
import { BsAt } from 'react-icons/bs';
import { Size } from '@/components/types';
import { Tooltip } from '@/feedbacks';
import { useOutSideClick } from '@/hooks/hooks';
import './supportBtn.scss';
// onClick={() => { navigator.clipboard.writeText("this.state.textToCopy update") }}

export interface SupportBtnProps {
    /**
     * The size of the component
     */
    size?: Size;
    /**
     * change phone number
     */
    phoneNumber?: string;
    /**
     *  show client reference
     */
    clientRef?: string;
    /**
     *  show supplier reference
     */
    supplierRef?: string;
    /**
     *  show client email
     */
    email?: string;
    /**
     *  show Howers
     *  workHours: [
        { label: 'Du lundi au Vendredi', morning: '09:00 à 13:00', afternoon: '14:00 à 18:00' },
        { label: 'Du lundi au Vendredi', morning: '09:00 à 13:00', afternoon: '14:00 à 18:00' },
        { label: 'Le Samedi', morning: '09:00 à 13:00' },
    ],
     */
    workHours?: {
        label: ReactNode;
        morning: ReactNode;
        morningLabel?: ReactNode;
        afternoon?: ReactNode;
        afternoonLabel?: ReactNode;
    }[];
    labels?: {
        support?: ReactNode;
        referenceSupplier?: ReactNode;
        referenceClient?: ReactNode;
        copie?: ReactNode;
        workingHours?: ReactNode;
    };
}

/**
  * Support button with dropdown in single line of code.
 *
 * ###Usage
 *
 *```JSX
 *
 * import { SupportBtn } from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
        <SupportBtn
            phoneNumber={"05 30 500 500"}
            clientRef={`ma-${authenticatedUser?.id ?? ""}`}
            email={"support@sobrus.com"}
            workHours={[
                { label: "Du lundi au Vendredi", morning: "09:00 à 13:00", afternoon: "14:00 à 18:00" },
                { label: "Le Samedi", morning: "09:00 à 13:00", },
            ]}
        />
 *    );
*   }
 * ```
 *
 */

export const SupportBtn: FC<SupportBtnProps> = ({
    phoneNumber = '05 30 500 500',
    supplierRef,
    clientRef,
    email,
    workHours,
    size = 'md',
    labels = {
        support: 'Support',
        referenceSupplier: 'ID fournisseur',
        referenceClient: 'Référence client',
        copie: 'Copier',
        workingHours: 'Horaires de travail',
    },
}) => {
    const [openPopUp, setopenPopUp] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    useOutSideClick(tooltipRef, () => setopenPopUp(false));
    const [copied, setCopied] = useState(false);
    setTimeout(() => {
        copied && setCopied(false);
    }, 1000);
    return (
        <div className='sob-v2-supportbtn-container'>
            <div className='sob-v2-supportbtn-header'>
                <IconButton
                    style={{ cursor: 'default' }}
                    color='initial'
                    size={size}
                    className='sob-v2-supportbtn-iconcontainer'
                >
                    <FiPhone size={size === 'md' ? 20 : 18} />
                </IconButton>
                <div className='sob-v2-supportbtn-text'>
                    <span>{labels?.support}</span>
                    <span>{phoneNumber}</span>
                </div>
                <div ref={tooltipRef}>
                    <IconButton
                        className='sob-v2-supportbtn-more'
                        onClick={() => {
                            (clientRef || email || workHours) && setopenPopUp(!openPopUp);
                        }}
                        size='sm'
                        color='initial'
                    >
                        <MdOutlineMoreVert color='#02829F' size={20} />
                    </IconButton>
                    {openPopUp ? (
                        <>
                            <Card className='sob-v2-supportbtn__tooltip'>
                                {clientRef ? (
                                    <div className='sob-v2-supportbtn-header sob-v2-supportbtn-header-clientref'>
                                        <div className='sob-v2-supportbtn-header-info'>
                                            <IconButton
                                                color='initial'
                                                size={size}
                                                className='sob-v2-supportbtn-iconcontainer'
                                            >
                                                <img src={userRefer} />
                                            </IconButton>
                                            <div className='sob-v2-supportbtn-text'>
                                                <span>{labels?.referenceClient}</span>
                                                <span>{clientRef}</span>
                                            </div>
                                        </div>
                                        <IconButton
                                            color='initial'
                                            className='sob-v2-supportbtn-more'
                                            onClick={() => {
                                                navigator.clipboard.writeText(clientRef);
                                                setCopied(true);
                                            }}
                                            size='sm'
                                            id='copie'
                                        >
                                            <MdContentCopy size={16} />
                                        </IconButton>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {supplierRef ? (
                                    <div className='sob-v2-supportbtn-header sob-v2-supportbtn-header-supplierref'>
                                        <div className='sob-v2-supportbtn-header-info'>
                                            <IconButton
                                                color='initial'
                                                size={size}
                                                className='sob-v2-supportbtn-iconcontainer'
                                            >
                                                <svg
                                                    width='20'
                                                    height='20'
                                                    viewBox='0 0 20 20'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M18.0407 16.5627C16.8508 14.5056 15.0172 13.0306 12.8774 12.3314C13.9358 11.7013 14.7582 10.7412 15.2182 9.59845C15.6781 8.45573 15.7503 7.19361 15.4235 6.00592C15.0968 4.81823 14.3892 3.77064 13.4094 3.02402C12.4296 2.2774 11.2318 1.87305 10 1.87305C8.76821 1.87305 7.57044 2.2774 6.59067 3.02402C5.6109 3.77064 4.90331 4.81823 4.57654 6.00592C4.24978 7.19361 4.32193 8.45573 4.78189 9.59845C5.24186 10.7412 6.06422 11.7013 7.12268 12.3314C4.98284 13.0299 3.14925 14.5049 1.9594 16.5627C1.91577 16.6338 1.88683 16.713 1.87429 16.7955C1.86174 16.878 1.86585 16.9622 1.88638 17.0431C1.9069 17.124 1.94341 17.2 1.99377 17.2665C2.04413 17.3331 2.10731 17.3889 2.17958 17.4306C2.25185 17.4724 2.33175 17.4992 2.41457 17.5096C2.49738 17.5199 2.58143 17.5136 2.66176 17.491C2.74209 17.4683 2.81708 17.4298 2.88228 17.3777C2.94749 17.3256 3.00161 17.261 3.04143 17.1877C4.51331 14.6439 7.11487 13.1252 10 13.1252C12.8852 13.1252 15.4867 14.6439 16.9586 17.1877C16.9985 17.261 17.0526 17.3256 17.1178 17.3777C17.183 17.4298 17.258 17.4683 17.3383 17.491C17.4186 17.5136 17.5027 17.5199 17.5855 17.5096C17.6683 17.4992 17.7482 17.4724 17.8205 17.4306C17.8927 17.3889 17.9559 17.3331 18.0063 17.2665C18.0566 17.2 18.0932 17.124 18.1137 17.0431C18.1342 16.9622 18.1383 16.878 18.1258 16.7955C18.1132 16.713 18.0843 16.6338 18.0407 16.5627ZM5.62503 7.50017C5.62503 6.63488 5.88162 5.78902 6.36235 5.06955C6.84308 4.35009 7.52636 3.78933 8.32579 3.4582C9.12522 3.12707 10.0049 3.04043 10.8535 3.20924C11.7022 3.37805 12.4818 3.79473 13.0936 4.40658C13.7055 5.01843 14.1222 5.79799 14.291 6.64665C14.4598 7.49532 14.3731 8.37499 14.042 9.17441C13.7109 9.97384 13.1501 10.6571 12.4306 11.1379C11.7112 11.6186 10.8653 11.8752 10 11.8752C8.84009 11.8739 7.72801 11.4126 6.90781 10.5924C6.0876 9.77219 5.62627 8.66011 5.62503 7.50017Z'
                                                        fill='#1875B1'
                                                    />
                                                </svg>
                                            </IconButton>
                                            <div className='sob-v2-supportbtn-text'>
                                                <span>{labels?.referenceSupplier}</span>
                                                <span>{supplierRef}</span>
                                            </div>
                                        </div>
                                        <IconButton
                                            color='initial'
                                            className='sob-v2-supportbtn-more'
                                            onClick={() => {
                                                navigator.clipboard.writeText(supplierRef);
                                                setCopied(true);
                                            }}
                                            size='sm'
                                            id='copie'
                                        >
                                            <MdContentCopy size={16} />
                                        </IconButton>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {email ? (
                                    <div className='sob-v2-supportbtn-header sob-v2-supportbtn-header-email'>
                                        <div className='sob-v2-supportbtn-header-info'>
                                            <IconButton
                                                color='initial'
                                                size={size}
                                                className='sob-v2-supportbtn-iconcontainer'
                                            >
                                                <BsAt size={22} />
                                            </IconButton>
                                            <div className='sob-v2-supportbtn-text'>
                                                <span>E-mail</span>
                                                <span>{email}</span>
                                            </div>
                                        </div>
                                        <IconButton
                                            color='initial'
                                            className='sob-v2-supportbtn-more'
                                            onClick={() => {
                                                navigator.clipboard.writeText(email);
                                                setCopied(true);
                                            }}
                                            size='sm'
                                            id='copie'
                                        >
                                            <MdContentCopy size={16} />
                                        </IconButton>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                <div className={`${copied ? 'copy__tooltip__copied' : ''}`}>
                                    <Tooltip
                                        place='bottom'
                                        className={'copy__tooltip'}
                                        content={<p>{copied ? 'Copié' : 'Copier'}</p>}
                                        anchorSelect='copie'
                                        // delayHide={30000}
                                    />
                                </div>
                                {workHours ? (
                                    <>
                                        <div className='sob-v2-supportbtn-worhours'>
                                            <IconButton color='initial' className='sob-v2-supportbtn-icon-container'>
                                                <BiTimeFive color='#02829f' size={20} />
                                            </IconButton>
                                            <span className='sob-v2-supportbtn-icon-title'>{labels.workingHours}</span>
                                        </div>
                                        {workHours.map((item, index) => (
                                            <div
                                                key={`sob-v2-supportbtn-worhours-${index}`}
                                                className='sob-v2-supportbtn-worhours-time'
                                            >
                                                <span>{item.label}</span>
                                                <br />
                                                <span>
                                                    <span>{item.morningLabel || 'De'} </span>
                                                    <strong>{item && item.morning ? item.morning : ''}</strong>{' '}
                                                    {item && item.afternoon ? (
                                                        <span>{item.afternoonLabel || 'et de'}:</span>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    <strong>{item && item.afternoon ? item.afternoon : ''}</strong>
                                                </span>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </Card>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};
