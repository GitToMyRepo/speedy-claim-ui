import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NewClaim from './components/NewClaim/NewClaim';
import SearchClaim from './components/SearchClaim/SearchClaim';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/new" element={<NewClaim />} />
          <Route path="/find" element = {<SearchClaim />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
