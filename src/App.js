import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SearchClaim from './components/SearchClaim/SearchClaim';
import claimsStore from './components/store/store';
import Login from './components/UserManagement/Login';
import ProtectedRoute from './components/UserManagement/ProtectedRoute';
import ViewClaim from './components/ViewClaim/ViewClaim';
import PageHeader from './components/Navigation/PageHeader';
import NewMotorClaim from './components/NewClaim/NewMotorClaim';
import NewPropertyClaim from './components/NewClaim/NewPropertyClaim';
import NewPetClaim from './components/NewClaim/NewPetClaim';
import ViewPropertyClaim from './components/ViewClaim/ViewPropertyClaim';
import ViewMotorClaim from './components/ViewClaim/ViewMotorClaim';
import ViewPetClaim from './components/ViewClaim/ViewPetClaim';

function App() {
  return (
    <Provider store={claimsStore}>
    <BrowserRouter>
     <PageHeader/> 
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element= {<Login />} />
            <Route path="/find" element = {
              <ProtectedRoute component={<SearchClaim />} roles={["USER", "MANAGER"]} />
            } />
            <Route path="/find/:claimId" element = {<ProtectedRoute component={<SearchClaim />} roles={["USER", "MANAGER"]} />} />
            <Route path="/view/MOTOR/:id" element = {<ProtectedRoute component={<ViewMotorClaim />} roles={["USER", "MANAGER"]} />} />
            <Route path="/view/PROPERTY/:id" element = {<ProtectedRoute component={<ViewPropertyClaim />} roles={["USER", "MANAGER"]} />} />
            <Route path="/view/PET/:id" element = {<ProtectedRoute component={<ViewPetClaim />} roles={["USER", "MANAGER"]} />} />
            <Route path="/find" element = {<ProtectedRoute component={<SearchClaim />} roles={["USER", "MANAGER"]} />} />

            <Route
            path="/newmotor" 
            element = {<ProtectedRoute component={<NewMotorClaim/>}  roles={["MANAGER"]} /> } 
            />
            <Route
            path="/newproperty" 
            element = {<ProtectedRoute component={<NewPropertyClaim/>}  roles={["MANAGER"]} /> } 
            /><Route
            path="/newpet" 
            element = {<ProtectedRoute component={<NewPetClaim/>}  roles={["MANAGER"]} /> } 
            />

            <Route
            path="/edit/MOTOR/:id" 
            element = {<ProtectedRoute component={<viewMotorClaim />}  roles={["MANAGER"]} /> } 
            />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
