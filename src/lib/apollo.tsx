import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export const httpLink = createHttpLink({
  uri: '/adopt'
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('authToken');
  console.log(token);
  
  if(token !== null){
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  }
});

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      userProfile:{
        merge: true,
      },
    },
  })
})