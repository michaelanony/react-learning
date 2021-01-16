import React, { useEffect } from 'react';
import './App.scss';
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createUserLoginWithSSO } from "./store/actions/userAcitonCreators";

import LoginPage from "./pages/Login"
import IndexPage from "./pages/Index"
import SagaLearning from './pages/SagaLearning'
import {routers} from "./router/index";
function App() {
  const token = localStorage.getItem("ac-token")
  const dispatch = useDispatch()
  const isLogin = useSelector((state: any) => state.userReducer.isLogin)
  console.log(124)
  if (token && !isLogin){
    dispatch(createUserLoginWithSSO(token))
  }
  console.log(4)
    if (!token){
      return(
        <Switch>
        <Route path="/login" component={LoginPage}/>
        <Redirect to="/login" />
        </Switch>
      )
    }else{  
      return(
        <div className="App">
        <Switch>
          {
            routers.map((v,index)=>{
              return(
                <Route path={v.path} component={v.component} key={index}/>
              )
            })
          }
          <Redirect to="/index" />

        </Switch>
        </div>
      )      
    }
}

export default App;
