import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//import PrivateRoute from './components/PrivateRoute'
import SongList from './components/song/SongList'
import Song from './components/song/Song';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Example from './components/example/example';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
      <Header />
      <Switch>
        {/* ------------- React-1 team ---------------- */}
        <Route exact path="/" component={Home} />

        <Route path="/user/login" component={Login} />

        <Route path="/user/form" component={Register} />

        {/* ------------- React-2 team ---------------- */}
        <Route path="/song/list" component={SongList} />

        <Route path="/song/:id" component={Song} />

        {/*------------an example of spotify API-------------*/}
        <Route path='/example' component={Example} />

      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
