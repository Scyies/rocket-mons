import { ApolloProvider } from '@apollo/client'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { client } from './lib/apollo'
import { Router } from './Router'

function App() {
  return (
    <ApolloProvider client={client} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
