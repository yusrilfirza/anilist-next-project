import { gql } from "@apollo/client"

export const GET_ANIME_LIST = gql`
    query($page: Int, $perPage: Int) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (type: ANIME) {
                id
                source
                seasonYear
                coverImage {
                    large
                    color
                }
                genres
                title {
                    romaji
                }
            }
        }
    }
`

export const GET_ANIME_COLLECTION_LIST = gql`
    query($page: Int, $perPage: Int, $id_in: [Int]) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (id_in: $id_in, type: ANIME) {
                id
                source
                season
                description
                seasonYear
                coverImage {
                    large
                    color
                }
                nextAiringEpisode {
                    id
                    airingAt
                    timeUntilAiring
                    episode
                    mediaId
                }
                genres
                updatedAt
                averageScore
                favourites
                title {
                    romaji
                }
            }
        }
    }
`

export const GET_FAVORITE_ANIME_LIST = gql`
    query($page: Int, $perPage: Int) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (sort: FAVOURITES_DESC, type: ANIME) {
                id
                source
                coverImage {
                    large
                    color
                }
                title {
                    romaji
                }
            }
        }
    }
`

export const GET_POPULAR_ANIME_LIST = gql`
    query($page: Int, $perPage: Int) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (sort: POPULARITY_DESC, type: ANIME) {
                id
                source
                seasonYear
                coverImage {
                    large
                    color
                }
                title {
                    romaji
                }
            }
        }
    }
`
