import './App.css';
import LoginPage from './pages/login/loginPage';
import HomePage from './pages/home/homePage';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated ] = useState(false)
  console.log(isAuthenticated)
  return (
    <div>
     <Switch>
       <Route exact path='/' render={() => <LoginPage setIsAuthenticated={setIsAuthenticated}/>}/>
       <PrivateRoute exact path='/home' component={HomePage} isAuthenticated={isAuthenticated}/>
     </Switch>
    </div>
  );
}

export default App;