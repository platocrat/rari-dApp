import { ApolloClient, InMemoryCache } from '@apollo/client';

const FUSE_SUBGRAPH_GQL_ENDPOINT =
  "https://api.thegraph.com/subgraphs/name/platocrat/fuse-subgraph";

export const client = new ApolloClient({
  uri: FUSE_SUBGRAPH_GQL_ENDPOINT,
  cache: new InMemoryCache()
});