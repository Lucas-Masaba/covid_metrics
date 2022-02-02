import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { React } from 'react';
// import { useDispatch } from 'react-redux';
import Home from './pages/home';
// import { fetchStats } from './redux/countries/countries';
import Details from './pages/details';
import Header from './components/header';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:countryId" element={<Details />} />
      </Routes>
    </Router>
    {/* <Home />
      <Details /> */}
  </div>
);
export default App;
