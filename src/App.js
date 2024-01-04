import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Destinations from './components/Destinations.js';
import Footer from './components/Footer';
import Login from './components/Login.js';
import SignUp from './components/Signup.js';
import CreateTrip from './components/CreateTrip.js'; 
import UserProfileForm from './components/UserProfileForm.js';


import Error from './components/Error';
import { ErrorBoundary } from 'react-error-boundary';
import UserProfileDisplay from './components/UserProfileDisplay.js';


function App() {

  
  return (
    <Router>
      <ErrorBoundary>
        {/* <Header /> */}
        <Routes>
          <Route path='/Showcase' element={<Showcase />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          {/* Add a new Route for CreateTrip outside the Header component */}
          <Route path='/create-trip' element={<CreateTrip />} />
          <Route path='/profile-form' element={<UserProfileForm />} />
          <Route path='/Destinations' element={<Destinations />} />
          <Route path='/Help' element={<Footer />} />
          <Route path='/Profile' element={<UserProfileDisplay />} />
     
          <Route path='*' element={<Error />} />
        </Routes>
        
        
      </ErrorBoundary>
    </Router>
  );
}

export default App;