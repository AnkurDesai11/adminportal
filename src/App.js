import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Enf from "./pages/enf/Enf";
import './style/dark.scss'
import { newUserForm } from "./formsource";
import { DarkModeContext } from "./context/darkModeContext";
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { BrowserRouter, Routes, Route, useNavigate, Switch } from "react-router-dom";
import { useContext } from "react";
import { securityConfig } from './config';

const oktaAuth = new OktaAuth(securityConfig.oidc);

//using useState will be inefficient for dark mode, 
//using context api is better, allows to reach data from any component
function App() {

  const { darkMode } = useContext(DarkModeContext);

  const history = useNavigate();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <div className={darkMode ? " app dark" : "app"} >

      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New fields={newUserForm} title="Add New User" />} />

            </Route>

          </Route>
          <Route path="*" element={<Enf />} />

        </Routes>
      </BrowserRouter>
      {/*

      <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}
      >
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/login/callback" component={LoginCallback} />
          <SecureRoute path="/users" render={() => <List />} />
          <SecureRoute path="/users/:userId" render={() => <Single />} />
          <SecureRoute path="/users/new" render={() => (<New fields={newUserForm} title={"Add New User"} />)} />
          <Route path="*" render={() => <Enf />} />
        </Switch>
      </Security>
  */}
    </div >
  );
}

export default App;
