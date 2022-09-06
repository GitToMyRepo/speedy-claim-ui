import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NewClaim from './components/NewClaim/NewClaim';
import SearchClaim from './components/SearchClaim/SearchClaim';
import claimsStore from './components/store/store';
import Login from './components/UserManagement/Login';
import ProtectedRoute from './components/UserManagement/ProtectedRoute';
import ViewClaim from './components/ViewClaim/ViewClaim';

function App() {
  return (
    <Provider store={claimsStore}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element= {<Login />} />
            <Route path="/find" element = {
              <ProtectedRoute component={<SearchClaim />} roles={["USER", "MANAGER"]} />
            } />
            <Route path="/find/:claimId" element = {<ProtectedRoute component={<SearchClaim />} roles={["USER", "MANAGER"]} />} />
            <Route path="/view/:id" element = {<ProtectedRoute component={<ViewClaim />} roles={["USER", "MANAGER"]} />} />
            <Route path="/find" element = {<ProtectedRoute component={<SearchClaim />} roles={["USER", "MANAGER"]} />} />

            <Route
            path="/new" 
            element = {<ProtectedRoute component={<NewClaim/>}  roles={["MANAGER"]} /> } 
            />

            <Route
            path="/edit/:id" 
            element = {<ProtectedRoute component={<NewClaim />}  roles={["MANAGER"]} /> } 
            />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
