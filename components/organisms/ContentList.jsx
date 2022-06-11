import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from '@emotion/styled';
import { Card } from '../molecules';

const ContentListWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

export const ContentList = ({ data, loading }) => {
    return (
        <ContentListWrapper>
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
        </ContentListWrapper>
    )
}

export default ContentList;