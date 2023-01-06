import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TodoApp} from 'TodoApp';
import {Signup} from 'components/Login/Signup';
import {Login} from 'components/Login/Login';
import {LandingPage} from 'components/HomePage/LandingPage';
import {NotFound} from 'components/NotFound/NotFound';
import {urls} from 'config';
import {ILoggedInUserContext, IUser} from './interfaces';
import { Toaster } from 'react-hot-toast';

export const LoggedInUserContext = React.createContext<ILoggedInUserContext>({
  user: null,
  setUser: () => {}
});


export const App = () => {

  const [user, setUser] = useState<IUser | null>(false as unknown as IUser);

  return (
    <>
      <div><Toaster position="bottom-center"/></div>
      <LoggedInUserContext.Provider value={ {user, setUser} }>
        {/* { user
          ? */}
          <>
            <Router>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */ }
              <Switch>
                <Route path={ urls.home } exact={ true }>
                  <LandingPage/>
                </Route>
                <Route exact path={ urls.signup } component={ Signup }/>
                <Route exact path={ urls.login } component={ Login }/>
                <Route exact path={ `${ urls.project(':projectId?') }` } component={ TodoApp }/>
                <Route component={ NotFound }/>
              </Switch>
            </Router>
          </>
          {/* : <Loader/> */}
        {/* } */}
      </LoggedInUserContext.Provider>
    </>
  );
}
