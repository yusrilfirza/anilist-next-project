import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from '@emotion/styled';
import { Card } from '../molecules';

const ContentBannerWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    gap: 10px;
    overflow-x: auto;
`;

export const ContentBanner = ({ data, loading }) => {
    return (
        <ContentBannerWrapper>
            {
                loading ? (
                    <Skeleton
                        containerClassName="skeleton-container"
                        count={5}
                        height="400px"
                        width="230px"
                        wrapper={({children}) => <div>{children}</div>}
                    />
                ) :
                data.map((el, index) => (
                    <Card
                        loading={loading}
                        key={index}
                        id={el.id}
                        cover={el.coverImage.large}
                        color={el.coverImage.color}
                        title={el.title.romaji}
                        genres={el.genres}
                        seasonYear={el.seasonYear}
                    />
                ))
            }
        </ContentBannerWrapper>
    )
}

export default ContentBanner;