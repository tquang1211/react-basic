import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import ListToDo from './ToDos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from './Navigation/Navigation';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListUser from './Users/ListUser';
/**
 * 2 components: class components, function components (function, arrow)
 * function: function App() {}
 * arrow: const App = () => {}
 * component react sử dụng JSX
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />

          <img src={logo} className="App-logo" alt="logo" />
          {/* <MyComponent /> Khai báo nv nếu ko có con */}
          {/* <MyComponent></MyComponent> Khai báo nv nếu có con */}

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user">
              <ListUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
