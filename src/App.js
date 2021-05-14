// import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';

import TopBar from './components/TopBar';
import NumberPad from './components/NumberPad';
import Home from './pages/Home';
import ContactBook from './pages/Contact';
import SingleContact from './pages/SingleContact';
import AddContact from './pages/AddContact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <main className={document.location.pathname === '/home' ? 'phone-homescreen' : ''}>
        <div className="phone-container">
          <TopBar />
          <Switch>
            <Route path="/" component={NumberPad} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/contacts" component={ContactBook} exact />
            <Route path="/add" component={AddContact} exact />
            <Route path="/contact" component={SingleContact} exact />
          </Switch>


        </div>

      </main>
    </Router>

  );
}

export default App;
