import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
  } from "@apollo/client";

export const requestAdapter = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
        uri: 'https://graphql.anilist.co/',
    }),
    cache: new InMemoryCache(),
});
