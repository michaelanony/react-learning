import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createUserLogin } from "./store/actions/userAcitonCreators";
import { apiCheckLogin } from "./api/services"
import LoginPage from "./pages/Login"
import IndexPage from "./pages/Index"
import SagaLearning from './pages/SagaLearning'
function App() {
  const isLogin = useSelector((state: any) => state.userReducer.isLogin)
  if (isLogin) {
    return (
      <div className="App">
        <Switch>
          <Route path="/index" component={IndexPage} />
          <Route path="/saga" component={SagaLearning} />
          <Redirect to="/saga" />
        </Switch>
      </div>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Redirect to="/login" />
      </Switch>
    )
  }

}

export default App;
