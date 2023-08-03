import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from './pages/Home';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login"
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
          <Routes>
            <Route
            path='/'
            element={<Home />}
            />
            <Route 
            path='/dashboard'
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
