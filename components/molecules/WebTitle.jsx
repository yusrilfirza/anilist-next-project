import React from 'react';
import { Label } from '../atoms';
import styled from '@emotion/styled'

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const WebTitle = () => {
    return(
        <TitleWrapper>
            <Label text="Anilist" size="xxl" type="bold" color="#FFD542" />
            <Label text="Find Your Favorite Anime Here" size="m" />
        </TitleWrapper>
    );
};

export default WebTitle;