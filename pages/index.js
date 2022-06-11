import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from "@apollo/client";
import { ContentBanner, ContentList } from '../components/organisms';
import { PageTitle } from '../components/molecules';
import { GET_ANIME_LIST, GET_POPULAR_ANIME_LIST } from '../services/query';

export default function Home() {
    const [contentData, setContentData] = useState({ popular: [], list: [] });
    const [pageDetail, setPageDetail] = useState({ page: 1, perPage: 10 });
    const list = useQuery(GET_ANIME_LIST,
        {
            variables: pageDetail
        }
    );
    const popular = useQuery(GET_POPULAR_ANIME_LIST,
        {
            variables: { page: 1, perPage: 5 }
        }
    );

    return (
    <div>
        <PageTitle
            title="Popular"
        />
        <ContentBanner data={popular.data === undefined ? [] : popular.data.Page.media} loading={popular.loading} />
        <PageTitle
            title="Anime list"
        />
        <ContentList data={list.data === undefined ? [] : list.data.Page.media} loading={list.loading} />
        <div style={{ display: 'flex', justifyContent: 'center', width: "100%" }}>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={e => setPageDetail({ ...pageDetail, page: e.selected + 1 })}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                pageCount={500}
                initialPage={pageDetail.page - 1}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                previousLabel="previous"
                renderOnZeroPageCount={null}
            />
        </div>
    </div>
    )
}
