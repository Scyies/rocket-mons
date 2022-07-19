import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('authToken');
  
    return {
      headers: {
        ...headers,
        authorization: token || "",
      }
    }
  }
);

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
        Query: {
          fields: {
            userProfile:{
              merge: true,
            },
          }
        }
      },
  })
})
