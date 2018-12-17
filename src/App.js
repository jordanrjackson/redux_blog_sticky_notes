import React from 'react';
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

const App = () => (
  <div className="App">
    <BlogForm />
    <BlogList />
    <Footer />
  </div>
)

export default App;
