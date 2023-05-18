import { useState } from "react";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Music from "./components/Music/Music";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
  };
  const logout = (e) => {
    e.preventDefault();
    setIsAuth(false);
  };

  return (
    <div className="homeContainer">
      <Router>
        <Switch>
        <Route exact path="/">
          <Login login={login} isAuth={isAuth} />
        </Route>
        <ProtectedRoute path="/music" isAuth={isAuth}>
          <Music logout={logout} isAuth={isAuth} />
        </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
