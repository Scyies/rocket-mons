import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('authToken');
  const defaultToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTc5NjEzMDMsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w1OW9mdWJrNXhnNDAxdWtmc25wZHd5eS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDQ3OTBkNDItNzgxNy00YWVlLWFjODMtY2RjNTQ2YzhkY2VhIiwianRpIjoiY2w1bm5jb3d6MHk2NTAxdW04OWEyNG1qZyJ9.0pv_NxcoSaAZBIFbiqrUes2MpUDUVdh7tQIFmcYH7tepco-BKOoUiSGifBezfOesrmhkweaRiDO-yPUARJwPU6FpGXYmVZH1vK_vbtglH2kQAjdOYR2_t-9SPRSUJGzUtQu9AuYQ32nbMKnxO9Dd21thqD7fgvENcZTh_NZU5s_zNvjaZJc7I30podjOhZYEH4dj9iC5urrWzYFMaTx84giw1RF0WrWkNiaPJv_Wa360i-YyJORzDai6xhkmMTZ0hS_dpGTySvglI_XNxs5Gr6E_NzU2TXHNqX7CK-typqdbjN67njPUBfXBGGGnxt4wMw2b3sgNZqs6hKvO3xar8KxTPMVF80giHn94jPmmNdHTuKS-UO7zyWTlGOvMtaCUMa8JsTs7KfudGkgeyCMfyq1K6_zgGYXJUEeVIoAzUDn2yUBC94a8OF4xoomr4iPgh0p5KEoIiWyoMdN-k4IKk0y_EulS_cq4u2TLHo1Av-xg0gATXqK8GNJtBE3dDD_Nw5dEzxzqzyIskmopugPvQTrnGu24PL6nswua0PoHMVKxu-5PhQ3zwQoPNm0nDAh5BslKnAiNEbBgkG_gbupvJSM3uUcPRJ90Q2bg0Ab1kr1tyOO1_U6gTcMrtov5DMNEMHP7tEtDfikDTLHIWg591zkGT8W7XESUXlT2uZgu_Y8"
  
    return {
      headers: {
        ...headers,
        authorization: token || defaultToken,
      }
    }
  }
);

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
        userProfile:{
          merge: true,
          keyFields: ["userProfile"],
        },
    },
  })
})
