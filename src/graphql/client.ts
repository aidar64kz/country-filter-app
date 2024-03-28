import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();
const apiUrl = `${import.meta.env.VITE_COUNTRIES_API_URL}`;
const client = new ApolloClient({
  uri: apiUrl,
  cache,
});

export default client;