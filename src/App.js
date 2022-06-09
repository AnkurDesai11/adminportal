import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import { newUserForm } from "./formsource";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


//using useState will be inefficient for dark mode, 
//using context api is better, allows to reach data from anyh component
function App() {
  const { darkMode } = useContext(DarkModeContext);
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
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
