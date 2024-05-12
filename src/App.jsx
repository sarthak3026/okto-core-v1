// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent2 from './page2/MainContent2';
import Layout from './Layout';
import './App.css';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent2 />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
