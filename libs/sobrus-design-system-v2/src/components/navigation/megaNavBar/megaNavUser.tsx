import classNames from 'classnames';
import { DivGlobalProps } from '@/components/types';
import React, { FC, ReactNode, useRef, useState } from 'react';
import { Avatar } from '@/contentDisplay';
import { BiChevronDown } from 'react-icons/bi';
import { IconButton } from '@/actions';
import { useOutSideClick } from '@/hooks/hooks';

export interface MegaNavGlobalProps extends DivGlobalProps {
    fullName: string;
    email?: string;
    image?: string;
}
/**
 * @deprecated Use `NavBar` instead. This component will be removed in a future release.
 */

export const MegaNavUser: FC<MegaNavGlobalProps> = ({
    children,
    className,
    fullName,
    email,
    image,
    onClick,
    ...props
}) => {
    const classes = classNames('sob-v2-navbar-user', className);
    const [open, setOpen] = useState(false);
    const userInfoRef = useRef<HTMLDivElement>(null);
    useOutSideClick(userInfoRef, () => setOpen(false));
    return (
        <div
            ref={userInfoRef}
            className={classes}
            onClick={(e) => {
                onClick?.(e);
                setOpen(!open);
            }}
            id='refMegaNavUser'
            {...props}
        >
            <Avatar size='md' name={fullName} image={image} />
            <div className='sob-v2-navbar-user-info' {...props}>
                <div className='sob-v2-navbar-user-fullName'>{fullName}</div>
                <div className='sob-v2-navbar-user-email'>{email}</div>
            </div>
            <BiChevronDown size={18} color='#627282' />
            {open ? <div className='sob-v2-navbar-user-plus'>{children}</div> : <></>}
        </div>
    );
};

export interface MegaNavUserProfileProps extends DivGlobalProps {
    label?: ReactNode;
}
/**
 * @deprecated Use `NavBar` instead. This component will be removed in a future release.
 */
export const MegaNavUserProfile: FC<MegaNavUserProfileProps> = ({ className, label = 'Profile', ...props }) => {
    const classes = classNames('sob-v2-navbar-user-profile', className);
    return (
        <div {...props} className={classes}>
            <IconButton color='initial'>
                <svg xmlns='http://www.w3.org/2000/svg' width='41.197' height='41.2' viewBox='0 0 41.197 41.2'>
                    <g id='userIcon' transform='translate(-1230.613 -7139)'>
                        <rect
                            id='Rectangle_248'
                            data-name='Rectangle 248'
                            width='41.197'
                            height='41.2'
                            rx='11'
                            transform='translate(1230.613 7139)'
                            fill='rgba(85,172,237,0.08)'
                        />
                        <path
                            id='Icon_material-person-outline'
                            data-name='Icon material-person-outline'
                            d='M15.507,8.258a2.5,2.5,0,1,1-2.5,2.5,2.5,2.5,0,0,1,2.5-2.5m0,10.7c3.529,0,7.249,1.735,7.249,2.5v1.307H8.258V21.449c0-.761,3.72-2.5,7.249-2.5M15.507,6a4.754,4.754,0,1,0,4.754,4.754A4.752,4.752,0,0,0,15.507,6Zm0,10.7C12.334,16.7,6,18.288,6,21.449v3.565H25.014V21.449C25.014,18.288,18.68,16.7,15.507,16.7Z'
                            transform='translate(1235.728 7144)'
                            fill='#55aced'
                        />
                    </g>
                </svg>
            </IconButton>
            <div>{label}</div>
        </div>
    );
};

export interface MegaNavUserLogoutProps extends DivGlobalProps {
    label?: ReactNode;
}
/**
 * @deprecated Use `NavBar` instead. This component will be removed in a future release.
 */
export const MegaNavUserLogout: FC<MegaNavUserLogoutProps> = ({ className, label = 'Se déconnecter', ...props }) => {
    const classes = classNames('sob-v2-navbar-user-logout', className);
    return (
        <div {...props} className={classes}>
            <IconButton color='initial'>
                <svg xmlns='http://www.w3.org/2000/svg' width='41.2' height='41.2' viewBox='0 0 41.2 41.2'>
                    <g id='disconnect' transform='translate(-1225 -7204)'>
                        <rect
                            id='Rectangle_239'
                            data-name='Rectangle 239'
                            width='41.2'
                            height='41.2'
                            rx='11'
                            transform='translate(1225 7204)'
                            fill='rgba(240,90,41,0.06)'
                        />
                        <path
                            id='Icon_open-account-logout'
                            data-name='Icon open-account-logout'
                            d='M7.129,0V2.716h9.505V16.294H7.129V19.01H19.01V0ZM4.753,5.431,0,9.505l4.753,4.074V10.863h9.5V8.147h-9.5Z'
                            transform='translate(1236 7216)'
                            fill='#f05a29'
                        />
                    </g>
                </svg>
            </IconButton>
            <div>{label}</div>
        </div>
    );
};
