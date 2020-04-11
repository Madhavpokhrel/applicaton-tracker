import React from 'react';
import Navbar from './component/Navbar'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import Add from './component/Add'
import Edit from './component/Edit'
import Profile from './component/Profile'
import Login from './component/Login'
import Signup from './component/Signup'
import Contact from './component/Contact'
import About from './component/About';
class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
          <Navbar/>
        <Switch>
          <Route path='/add' component={Add} />
          <Route path='/edit' component={Edit} />
          <Route path='/profile' component={Profile} />
          <Route path='/signup' component={Signup} />
          <Route path='/contact' component={Contact} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/' exect={true} component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
