import React from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../molecules';

const HeaderWrapper = styled.div`
    padding: 25px 20px 25px 20px;
    border-bottom: solid 2px #d2d2d2;
    position: absolute;
    background-color: white;
    right: 0;
    left: 0;
    z-index: 1;
`;

export const Header = () => {
    return (
        <HeaderWrapper>
            <PageTitle />
        </HeaderWrapper>
    )
}

export default Header;