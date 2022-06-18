import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { PageTitle } from '../components/molecules';
import { GET_ANIME_COLLECTION_LIST } from '../services/query';
import styled from '@emotion/styled';
import { DetailedCard } from '../components/molecules/DetailedCard';

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Collection = () => {
    const [collections, setCollections] = useState([]);
    const [pageDetail, setPageDetail] = useState({ page: 1, perPage: 10 });
    
    useEffect(() => {
        const { collections_id } = JSON.parse(window.localStorage.getItem('collection'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setCollections(collections_id);
    }, []);

    const { data, loading } = useQuery(GET_ANIME_COLLECTION_LIST,
        {
            variables: {
                ...pageDetail,
                id_in: collections,
            }
        }
    );

    return (
        <div>
            <PageTitle
                title="Anime Collection"
            />
            <ListWrapper>
                {
                    !loading && data !== undefined && data.Page.media.map((item) => (
                        <DetailedCard
                            key={item.id}
                            loading={loading}
                            id={item.id}
                            title={item.title.romaji}
                            cover={item.coverImage.large}
                            seasonYear={item.seasonYear}
                            airing={item.nextAiringEpisode}
                            genres={item.genres}
                            season={item.season}
                            color={item.coverImage.color}
                            description={item.description}
                            average={item.averageScore}
                            favourites={item.favourites}
                        />
                    ))
                }
            </ListWrapper>
        </div>
    )
};

export default Collection;
