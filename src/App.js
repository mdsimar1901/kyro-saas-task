import './App.css';
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="Navbar">
     <Router>
      <Navbar/>
      <Dashboard/>
     </Router>
    </div>
  );
}

export default App;
