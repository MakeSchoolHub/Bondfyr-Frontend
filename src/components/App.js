import './App.css';

import Navbar from './Navbar'
import Homepage from './Homepage'
import Contact from './Contact'
import EventForm from './EventForm'
import ChatScreen from './ChatScreen'

import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/schedule" component={EventForm} />
        <Route exact path="/stage" component={ChatScreen} />
        <Route exact path="/contact" component={Contact} />

      </div>
    </Router>
    
  );
}

export default App;
