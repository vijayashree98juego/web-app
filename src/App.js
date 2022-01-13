import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <label htmlFor="name">Enter your Name</label>
        <input type="text" name="name" id="name" />
        <input type="submit" value="Send"/>
    </div>
  );
}

export default App;
