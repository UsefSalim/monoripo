import { Meta, StoryObj } from '@storybook/react';
import { MegaNavBar } from './megaNavBar';
import {
    MegaNavBarItem,
    MegaNavBarItemLink,
    MegaNavBarItems,
    MegaNavBarItemSubMenu,
    MegaNavBarItemSubMenuItem,
    MegaNavBarItemSubMenuItemLink,
    MegaNavUser,
    MegaNavUserLogout,
    MegaNavUserProfile,
    MegaNavBarLogo,
} from '..';
import { navPaths } from './data';
import { useEffect, useState } from 'react';

export default {
    title: 'Navigation/MegaNavbar',
    component: MegaNavBar,
    subcomponents: { MegaNavUser, MegaNavBarItemLink },
} as Meta<typeof MegaNavBar>;

export const MegaNavBarTemplate: StoryObj<typeof MegaNavBar> = {
    render: (args) => {
        const [navPa, setNavPaths] = useState('');
        const [navPathsx, setNavPathsx] = useState(navPaths);
        useEffect(() => {
            setTimeout(() => {
                setNavPaths('kadshffkhgsadfg');
            }, 1000);
        }, []);
        return (
            <div style={{ backgroundColor: '#F5F5F5', height: 500, width: '100%' }}>
                <MegaNavBar {...args}>
                    <MegaNavBarLogo />
                    <MegaNavBarItems>
                        {navPa && (
                            <>
                                <MegaNavBarItem>
                                    <MegaNavBarItemLink>
                                        <div>{navPa}</div>
                                        <img src='/public/cover.png' alt='' width={10} height={10} />
                                    </MegaNavBarItemLink>
                                </MegaNavBarItem>
                                <MegaNavBarItem>
                                    <MegaNavBarItemLink>{navPa}</MegaNavBarItemLink>
                                </MegaNavBarItem>
                            </>
                        )}
                        {navPathsx.map((el) => (
                            <MegaNavBarItem key={el.to}>
                                <MegaNavBarItemLink Tag='a' title={el.title} to={el.to}>
                                    {el.title}
                                </MegaNavBarItemLink>
                                {el.subMenu && (
                                    <MegaNavBarItemSubMenu>
                                        {el.subMenu.map((sub) => (
                                            <MegaNavBarItemSubMenuItem key={sub.to}>
                                                <MegaNavBarItemSubMenuItemLink Tag='a' title={sub.title} to={sub.to}>
                                                    {sub.title}
                                                </MegaNavBarItemSubMenuItemLink>
                                            </MegaNavBarItemSubMenuItem>
                                        ))}
                                    </MegaNavBarItemSubMenu>
                                )}
                            </MegaNavBarItem>
                        ))}
                    </MegaNavBarItems>
                    <MegaNavUser fullName='Youssef Salim' email='youssef.s@sobrus.com'>
                        <MegaNavUserProfile />
                        <MegaNavUserLogout />
                    </MegaNavUser>
                </MegaNavBar>
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
    args: {},
};
