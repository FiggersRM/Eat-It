import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
//import Home from './pages/Home';
import Header from './components/Header';
// import M from 'materialize-css';

const client = new ApolloClient({
    uri: 'graphql',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Header />
        </ApolloProvider>
    )
}

export default App;