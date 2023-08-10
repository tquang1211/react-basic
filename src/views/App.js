import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import ListToDo from './ToDos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * 2 components: class components, function components (function, arrow)
 * function: function App() {}
 * arrow: const App = () => {}
 * component react sử dụng JSX
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Dấu & trong html thì dùng &amp; mới đúng */}
          Simple to do apps with React.js (Demo)
        </p>
        {/* <MyComponent /> Khai báo nv nếu ko có con */}
        {/* <MyComponent></MyComponent> Khai báo nv nếu có con */}

        {/* <MyComponent /> */}
        <ListToDo />

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
  );
}

export default App;
