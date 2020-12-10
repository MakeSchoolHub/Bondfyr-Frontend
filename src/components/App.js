import './App.css';

import Navbar from './Navbar'
import Homepage from './Homepage'
import Lounge from './Lounge'
import EventForm from './EventForm'
import ChatScreen from './ChatScreen'
import Footer from './Footer'

import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/schedule" component={EventForm} />
        <Route exact path="/stage" component={ChatScreen} />
        <Route exact path="/lounge" component={Lounge} />
        
        <Footer name="Bonfyre" year="2020"/>
      </div>
    </Router>
    
  );
}

export default App;
