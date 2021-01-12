import React from 'react';
import TodoList from './components/TodoList'
import CalPage from "./pages/cal";
import Person from './pages/Persion'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { AppState } from './store'
function App() {
  const { isLogin } = useSelector((state: AppState) => {
    return {
      isLogin: state.userReducer.isLogin
    }
  })
  if (!isLogin) {
    return (
      <div className="App">
        <CalPage />
        <hr />
        <Person />
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route to="/cal" component={CalPage} />
            <Route to="/todolist" component={TodoList} />
            <Redirect to="/cal" />
          </Switch>
        </BrowserRouter>
      </div>
    )

  }
}

export default App;
