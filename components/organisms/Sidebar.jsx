import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Icons, Label } from '../atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHouse} from '@fortawesome/free-solid-svg-icons';
import { WebTitle } from '../molecules';

const SidebarWrapper = styled.div`
    bottom: 0;
    top: 0;
    justify-items: center;
    box-shadow: -1px 0 9px -3px #000000;
    background-color: #0e0e0e;
`;

const SidebarHeader = styled.div`
    padding: 25px 30px 25px 30px;
    background-color: #0e0e0e;
    height: auto;
    margin-bottom: 10px;
`;

const SidebarMenu = styled.div`
    position: relative;
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background-color: ${prop => prop.active ? '#1c1c1c' : '#0e0e0e'};
    &:hover {
        background-color: #202020;
        > h1 {
            color: #FFD542;
        }
    }
`;

const ActiveIndicator = styled.div`
    height: 100%;
    width: 10px;
    background-color: #444444;
    position: absolute;
    border-radius: 10px 0px 0px 10px;
    right: 0;
    top: 0;
`;

const IconWrapper = styled.div`
    width: 20px;
`;

const menu = [
    {
        title: 'Home',
        path: '/',
        icon: faHouse
    },
    {
        title: 'Collections',
        path: '/collections',
        icon: faBookmark
    },
]

export const Sidebar = () => {
    const path = useRouter().pathname;
    return (
        <SidebarWrapper>
            <SidebarHeader>
                <Image width="20px" height="20px" src="/img/logo_plain.svg" alt="logo" />
            </SidebarHeader>
            {
                menu.map((el) => (
                    <Link key={el.title} href={`/${el.path}`}>
                        <SidebarMenu active={el.path === path}>
                            {
                                el.path === path ? (<ActiveIndicator />) : null
                            }
                            {
                                <IconWrapper>
                                    <FontAwesomeIcon size='xs' icon={el.icon} color="white" />
                                </IconWrapper>
                            }
                        </SidebarMenu>
                    </Link>
                ))
            }
        </SidebarWrapper>
    )
};

export default Sidebar;
