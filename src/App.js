import React, { Component } from 'react';
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <BlogForm />
    <BlogList />
    <Footer />
  </div>
)

export default App;
