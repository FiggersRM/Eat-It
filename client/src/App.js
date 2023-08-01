import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from './pages/Home';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
// import M from 'materialize-css';

const client = new ApolloClient({
  uri: "graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Navbar />
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
