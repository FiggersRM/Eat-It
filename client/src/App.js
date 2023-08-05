import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="appCont">
        <Router>
          <Header />
          <Routes>
            <Route
            path='/'
            element={<Home />}
            />
            <Route 
            path='/dashboard/:userId'
            element={<Dashboard />}
            />
            <Route
            path='/login'
            element={<Login />}
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
