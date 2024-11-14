import classNames from 'classnames';
import { Avatar } from '@/contentDisplay';
import { DivGlobalProps } from '@/components/types';
import React, { ReactNode } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Tooltip } from 'react-tooltip';

export interface NavBarUserProps extends DivGlobalProps {
    fullName: string;
    email?: string;
    image?: string;
}
const NavBarUser = ({ fullName, image, className, email, children, ...props }: NavBarUserProps) => {
    const classes = classNames('sob-v2-navbar-user', className);
    return (
        <div id='sob-v2-navbar-user' data-tooltip-id='sob-v2-navbar-user-tooltip' className={classes} {...props}>
            <Avatar size='md' name={fullName} image={image} />
            <div className='sob-v2-navbar-user-info'>
                <div className='sob-v2-navbar-user-fullName'>{fullName}</div>
                <div className='sob-v2-navbar-user-email'>{email}</div>
            </div>
            <BiChevronDown size={18} color='#627282' />
            <Tooltip
                place='bottom-end'
                className='sob-v2-navbar-user-children'
                id='sob-v2-navbar-user-tooltip'
                // openOnClick
                offset={8}
                clickable
            >
                {children}
            </Tooltip>
        </div>
    );
};
// export interface NavBarUserProfileProps extends DivGlobalProps {
//     label?: ReactNode;
// }
type NavBarUserProfileProps<T extends React.ElementType> = {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    label?: ReactNode;
    icon?: ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const NavBarUserProfile = <T extends React.ElementType = 'a'>({
    className,
    label = 'Profile',
    as,
    icon,
    ...props
}: NavBarUserProfileProps<T>) => {
    const Tag = as || 'a';
    const classes = classNames('sob-v2-navbar-user-profile', className);
    return (
        <Tag className={classes} {...props}>
            {icon || (
                <div className='icon__container'>
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
                </div>
            )}
            <div className='label'>{label}</div>
        </Tag>
    );
};

type NavBarUserLogoutProps<T extends React.ElementType> = {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    label?: ReactNode;
    icon?: ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const NavBarUserLogout = <T extends React.ElementType = 'a'>({
    className,
    label = 'Se déconnecter',
    as,
    icon,
    ...props
}: NavBarUserLogoutProps<T>) => {
    const classes = classNames('sob-v2-navbar-user-logout', className);
    const Tag = as || 'a';
    return (
        <Tag {...props} className={classes}>
            {icon || (
                <div className='icon__container'>
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
                </div>
            )}
            <div className='label'>{label}</div>
        </Tag>
    );
};

export { NavBarUser, NavBarUserLogout, NavBarUserProfile };
