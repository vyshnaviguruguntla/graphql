import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

// Set `RestLink` with your endpoint
const restLink = new RestLink({ uri: "https://swapi.dev/api/" });

// Setup your client
export const restClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});