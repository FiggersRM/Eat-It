import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from './pages/Home';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import M from 'materialize-css';

const client = new ApolloClient({
  uri: "graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="appCont">
        <Router>
          <Header />
          <Navbar />
          <Home />
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
