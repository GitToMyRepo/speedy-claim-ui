import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NewClaim from './components/NewClaim/NewClaim';
import SearchClaim from './components/SearchClaim/SearchClaim';
import ViewClaim from './components/ViewClaim/ViewClaim';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/new" element={<NewClaim />} />
          <Route path="/find" element = {<SearchClaim />} />
          <Route path="/view/:id" element = {<ViewClaim />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
