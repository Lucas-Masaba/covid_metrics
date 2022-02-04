import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { React } from 'react';
import Home from './pages/home';
import Details from './pages/details';
import Header from './components/header';
import './App.css';

const App = () => (
  <div className="App container-fluid">
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:countryId/:index" element={<Details />} />
      </Routes>
    </Router>
  </div>
);
export default App;
