import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Layout } from "./Components";
import './App.css';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
