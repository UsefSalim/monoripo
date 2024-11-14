import type { Meta, StoryObj } from '@storybook/react';
import {
    Navbar,
    NavBarItems,
    NavBarItem,
    NavBarSubitem,
    NavBarItemLink,
    NavBarSubitemLink,
    NavBarSubItems,
    NavBarUser,
    NavBarUserProfile,
    NavBarUserLogout,
    NavBarLogo,
} from '@/navigation';
import { navPaths } from '@/components/navigation/megaNavBar/data';
import { useEffect, useState } from 'react';
import { generateRandomId } from '@/functions';

export default {
    title: 'Navigation/Navbar',
    component: Navbar,
} as Meta<typeof Navbar>;

export const Default: StoryObj<typeof Navbar> = {
    render: (args) => {
        const [navPa, setNavPaths] = useState('');
        const [navPathsx, setNavPathsx] = useState(navPaths);
        useEffect(() => {
            setTimeout(() => {
                setNavPaths('kadshffkhgsadfg');
            }, 1000);
        }, []);
        return (
            <div style={{ height: '100vh' }}>
                <Navbar {...args}>
                    <NavBarLogo href='/' as='a'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='127.715'
                            height='37.42'
                            viewBox='0 0 127.715 37.42'
                        >
                            <defs>
                                <clipPath id='clip-path'>
                                    <rect
                                        id='Rectangle_137319'
                                        data-name='Rectangle 137319'
                                        width='127.715'
                                        height='37.42'
                                        fill='none'
                                    />
                                </clipPath>
                            </defs>
                            <g id='Group_72602' data-name='Group 72602' clipPath='url(#clip-path)'>
                                <path
                                    id='Path_37240'
                                    data-name='Path 37240'
                                    d='M58.412,28.458a17.355,17.355,0,0,1-7.122,9.923l-.146-.158c4.091-4.526,1.208-10.793-2.637-13.638-3.134-2.314-6.342-4.52-9.465-6.845a35.042,35.042,0,0,1-7.024-6.876,10.541,10.541,0,0,1-1.177-1.889,3.682,3.682,0,0,1,1.29-5.045q.143-.084.293-.156A13.247,13.247,0,0,1,36.4,2.294a26.3,26.3,0,0,1,6.021-.2,17.9,17.9,0,0,1,5.891,1.839,3.358,3.358,0,0,1,1.462.965c-.528.153-.859-.151-1.23-.28a7.592,7.592,0,0,0-4.863-.476,2.306,2.306,0,0,0-1.567,3.492,8.611,8.611,0,0,0,1.41,2.106c3.08,3.517,6.827,6.279,10.445,9.186.055.044.174.005.435.005-.823-1.154-1.606-2.19-2.32-3.272a10.15,10.15,0,0,1-1.925-4.644,2.882,2.882,0,0,1,1.387-2.933c1.63-.682,4.326,1.078,4.46,2.915-.093-.047-.186-.087-.272-.141a1.969,1.969,0,0,0-2.452-.1c-.866.7-.7,1.624-.364,2.516a15.076,15.076,0,0,0,1.9,3.233c1.506,2.147,3.585,4.091,3.967,6.763a17.963,17.963,0,0,1-.38,5.182'
                                    transform='translate(-19.018 -1.26)'
                                    fill='#00a2c8'
                                />
                                <path
                                    id='Path_37241'
                                    data-name='Path 37241'
                                    d='M.276,37.682c.253-1.024.476-2.008.8-2.993A16.871,16.871,0,0,1,2.546,31.15a2.31,2.31,0,0,1,.245,1.306c.306,3.429,2.363,5.825,4.75,8.008a54.333,54.333,0,0,0,6.251,4.7,14.3,14.3,0,0,1,4.707,5.1,8.933,8.933,0,0,1,.561,1.306c.958,2.785-.138,4.679-3.006,5.228A12.708,12.708,0,0,1,3.541,51.385,25.572,25.572,0,0,1,.364,43.614a14.33,14.33,0,0,1-.087-5.933'
                                    transform='translate(-0.006 -19.535)'
                                    fill='#00a2c8'
                                />
                                <line
                                    id='Line_192'
                                    data-name='Line 192'
                                    x2='0.145'
                                    y2='0.158'
                                    transform='translate(32.126 36.963)'
                                    fill='#00a2c8'
                                />
                                <path
                                    id='Path_37242'
                                    data-name='Path 37242'
                                    d='M134.407,46.589a9.088,9.088,0,0,1-4.3-.891,3.868,3.868,0,0,1-2.131-3.641V41.2h1.878V42q0,2.9,4.571,2.905a6.726,6.726,0,0,0,2.711-.465,1.693,1.693,0,0,0,1.239-1.567,1.415,1.415,0,0,0-.387-1.1,3.52,3.52,0,0,0-1.375-.62q-.582-.155-2.732-.582a16.73,16.73,0,0,1-3.467-.949,3.052,3.052,0,0,1-1.995-2.867q0-3.563,5.617-3.563,5.849,0,5.927,4.788h-1.82q-.136-2.053-1.2-2.6a6.446,6.446,0,0,0-2.905-.5q-3.758,0-3.758,1.879a1.427,1.427,0,0,0,.89,1.336,10.944,10.944,0,0,0,2.577.659,17.024,17.024,0,0,1,4.842,1.3,3.073,3.073,0,0,1,1.646,2.866,3.115,3.115,0,0,1-2.072,2.925,8.591,8.591,0,0,1-3.758.755'
                                    transform='translate(-80.255 -20.814)'
                                    fill='#191717'
                                />
                                <path
                                    id='Path_37243'
                                    data-name='Path 37243'
                                    d='M175.635,45.086a9.052,9.052,0,0,1-10.827.01,6.257,6.257,0,0,1-1.986-4.89,6.035,6.035,0,0,1,2.034-4.842,7.946,7.946,0,0,1,5.365-1.685,8.031,8.031,0,0,1,5.385,1.685,6.035,6.035,0,0,1,2.034,4.842,6.232,6.232,0,0,1-2,4.88m-1.306-8.474a6.108,6.108,0,0,0-4.107-1.249,6,6,0,0,0-4.086,1.259,4.514,4.514,0,0,0-1.434,3.584,4.727,4.727,0,0,0,1.454,3.66,5.777,5.777,0,0,0,4.066,1.337,5.872,5.872,0,0,0,4.107-1.327,4.722,4.722,0,0,0,1.453-3.671,4.481,4.481,0,0,0-1.458-3.594Z'
                                    transform='translate(-102.106 -21.112)'
                                    fill='#191717'
                                />
                                <path
                                    id='Path_37244'
                                    data-name='Path 37244'
                                    d='M214.821,45.892a7.518,7.518,0,0,1-3.6.774H204.5V33.534h6.971a6.02,6.02,0,0,1,3.254.814,3.123,3.123,0,0,1,1.567,2.827,2.952,2.952,0,0,1-1.53,2.557,3.19,3.19,0,0,1,1.956,3.1,3.267,3.267,0,0,1-1.9,3.06m-1.219-10.2a4.36,4.36,0,0,0-2.169-.474h-5.075v3.775h5.055a4.333,4.333,0,0,0,2.176-.484,1.541,1.541,0,0,0,.843-1.414,1.524,1.524,0,0,0-.826-1.4Zm.32,5.53a5.32,5.32,0,0,0-2.547-.522h-5.016v4.281h5.094a4.807,4.807,0,0,0,2.4-.522,1.755,1.755,0,0,0,1.027-1.608,1.73,1.73,0,0,0-.957-1.629Z'
                                    transform='translate(-128.247 -21.028)'
                                    fill='#191717'
                                />
                                <path
                                    id='Path_37245'
                                    data-name='Path 37245'
                                    d='M249.934,40.262a3.159,3.159,0,0,1,1.511,2.866v3.544h-1.859V43.187q0-2.014-3.176-2.015h-4.726v5.5h-1.859V33.541h6.76q5.054,0,5.055,3.641a3.335,3.335,0,0,1-1.7,3.08m-3.312-5.036h-4.939v4.242h4.63a4.936,4.936,0,0,0,2.46-.522,1.856,1.856,0,0,0,1.007-1.7q0-2.015-3.159-2.015Z'
                                    transform='translate(-150.401 -21.035)'
                                    fill='#191717'
                                />
                                <path
                                    id='Path_37246'
                                    data-name='Path 37246'
                                    d='M285.191,45.628a6.965,6.965,0,0,1-4.416,1.182q-6.044,0-6.043-5.191V33.541h1.859v8.077a3.306,3.306,0,0,0,1,2.644,4.821,4.821,0,0,0,3.187.862,4.872,4.872,0,0,0,3.2-.87,3.149,3.149,0,0,0,.987-2.576V33.541h1.859v8.116a4.773,4.773,0,0,1-1.626,3.971'
                                    transform='translate(-172.293 -21.035)'
                                    fill='#191717'
                                />
                                <path
                                    id='Path_37247'
                                    data-name='Path 37247'
                                    d='M316.062,46.589a9.089,9.089,0,0,1-4.3-.891,3.867,3.867,0,0,1-2.131-3.641V41.2h1.879V42q0,2.9,4.571,2.905a6.729,6.729,0,0,0,2.712-.465,1.694,1.694,0,0,0,1.239-1.567,1.412,1.412,0,0,0-.387-1.1,3.522,3.522,0,0,0-1.376-.62q-.581-.155-2.731-.582a16.7,16.7,0,0,1-3.467-.949,3.053,3.053,0,0,1-2-2.867q0-3.563,5.617-3.563,5.849,0,5.927,4.788H319.8q-.136-2.053-1.2-2.6a6.447,6.447,0,0,0-2.905-.5q-3.758,0-3.758,1.879a1.426,1.426,0,0,0,.89,1.336,10.957,10.957,0,0,0,2.577.659,17.042,17.042,0,0,1,4.842,1.3,3.074,3.074,0,0,1,1.646,2.866,3.115,3.115,0,0,1-2.072,2.925,8.585,8.585,0,0,1-3.758.755'
                                    transform='translate(-194.177 -20.814)'
                                    fill='#191717'
                                />
                            </g>
                        </svg>
                    </NavBarLogo>
                    <NavBarItems>
                        {navPa && (
                            <>
                                <NavBarItem>
                                    <NavBarItemLink>
                                        <div>{navPa}</div>
                                        <img src='/public/cover.png' alt='' width={10} height={10} />
                                    </NavBarItemLink>
                                </NavBarItem>
                                <NavBarItem>
                                    <NavBarItemLink>{navPa}</NavBarItemLink>
                                </NavBarItem>
                            </>
                        )}
                        {navPathsx.map((el) => (
                            <NavBarItem key={generateRandomId()} data-url={el.to}>
                                <NavBarItemLink
                                    onClick={(e) => {
                                        e?.preventDefault();
                                        console.log('object');
                                    }}
                                    title={el.title}
                                    className={el?.active}
                                >
                                    {el.title}
                                </NavBarItemLink>
                                {el.subMenu && (
                                    <NavBarSubItems>
                                        {el.subMenu.map((sub) => (
                                            <NavBarSubitem key={generateRandomId()}>
                                                <NavBarSubitemLink
                                                    onClick={(e) => {
                                                        e?.preventDefault();
                                                        console.log('object');
                                                    }}
                                                    href='/okokokok'
                                                    className={sub?.active}
                                                    title={sub.title}
                                                >
                                                    {sub.title}
                                                </NavBarSubitemLink>
                                            </NavBarSubitem>
                                        ))}
                                    </NavBarSubItems>
                                )}
                            </NavBarItem>
                        ))}
                    </NavBarItems>
                    <NavBarUser fullName='Youssef Salim' email='youssef.s@sobrus.com'>
                        <NavBarUserProfile
                            as='a'
                            href='/iframe.html?globals=&id=navigation-navbar--default&viewMode=story'
                        />
                        <NavBarUserLogout />
                    </NavBarUser>
                </Navbar>
                <button
                    onClick={() => {
                        setNavPathsx((prev) => [
                            {
                                title: 'offers',
                                to: 'offers',
                                subMenu: [
                                    { title: 'offers', to: 'offers' },
                                    { to: 'purchasesuggestions', title: 'Purchases Suggestions' },
                                    { title: 'Purchase Orders', to: 'purchasesuggestions' },
                                    { title: 'Delivery Notes', to: 'deliverynotes' },
                                    { title: 'Issued Purchases Returns', to: 'purchasesissuedreturns' },
                                    { title: 'Purchases Returns', to: 'purchasesreturns' },
                                    { title: 'expenses', to: 'expenses' },
                                ],
                            },
                            ...prev,
                        ]);
                    }}
                >
                    add
                </button>
            </div>
        );
    },
    args: {
        size: 'sm',
    },
};
