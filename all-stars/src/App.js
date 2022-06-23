import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stars from './components/Stars';


function App() {
  return (
    <div className="App" >
      <div>
      <Navbar />
      {/* <Home /> */}
      <Stars />
    </div>
    </div>
  );
}

export default App;
