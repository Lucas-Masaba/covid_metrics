// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/home';
import { fetchStats } from './redux/countries/countries';
import Details from './pages/details';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStats());
  }, []);

  return (
    <div className="App">
      {/* <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/missions" element={<Details />} />
      </Routes>
    </Router> */}
      <Home />
      <Details />
    </div>
  );
};
export default App;
