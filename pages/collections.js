import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { PageTitle } from '../components/molecules';
import { GET_ANIME_COLLECTION_LIST } from '../services/query';

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
        </div>
    )
};

export default Collection;
