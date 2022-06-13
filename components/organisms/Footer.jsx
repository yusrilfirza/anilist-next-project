import React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-top: 1px solid #e9e9e9;
    width: 100%;
    bottom: 0;
`;

export const Footer = () => {
    return (
        <FooterWrapper>
            <span>Anime list created by Yusril Firza</span>
        </FooterWrapper>
    )
}

export default Footer;
