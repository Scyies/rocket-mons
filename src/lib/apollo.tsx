import { ApolloClient, InMemoryCache } from "@apollo/client";

const token = localStorage.getItem('authToken');

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${token}`
  },
  cache: new InMemoryCache()
})