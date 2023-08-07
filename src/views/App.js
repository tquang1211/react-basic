import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';

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
          Hello world with React.js (Demo)
        </p>
        {/* <MyComponent /> Khai báo nv nếu ko có con */}
        {/* <MyComponent></MyComponent> Khai báo nv nếu có con */}

        <MyComponent />

      </header>
    </div>
  );
}

export default App;
