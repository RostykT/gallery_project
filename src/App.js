import './App.css';
import LoginPage from './pages/login/loginPage';
import FilmsPage from './pages/home/filmsPage';
import FilmDetail from './pages/home/filmDetail';
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
       <PrivateRoute exact path='/films' component={FilmsPage} isAuthenticated={isAuthenticated}/>
       <Route exact path='/films/:filmId' component={FilmDetail} isAuthenticated={isAuthenticated}/>
     </Switch>
    </div>
  );
}

export default App;