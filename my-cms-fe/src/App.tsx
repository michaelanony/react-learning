import React, { useEffect } from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SiderBar } from "./components/SiderBar";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createUserLogin, createUserLogout } from "./store/actions/userAcitonCreators";
import { apiCheckLogin } from "./api/services"
import LoginPage from "./pages/Login"
import IndexPage from "./pages/Index"
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    apiCheckLogin().then(res => {
      if (res.code == 200 && res.data?.user) {
        dispatch(createUserLogin(res.data.user))
      }
    })
  })
  const isLogin = useSelector((state: any) => state.userReducer.isLogin)
  if (isLogin) {
    return (
      <div className="App">
        <Switch>
          <Route path="/index" component={IndexPage} />
          <Redirect to="/index" />
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
