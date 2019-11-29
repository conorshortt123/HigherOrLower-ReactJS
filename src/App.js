import React from 'react';
import './App.css';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import UserList from './components/UserList';
import Edit from './components/edit';
import Login from './components/login';
import Register from './components/register';
import logo from './images/blogo.jpg';
import Game from './components/game';

class App extends React.Component {

  render() {
    return (  
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">
              <img src={logo} width="30" height="30" alt="Betunfair logo" />
              {' BetUnfair'}
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/game">Game</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/users" component={UserList} />
            <Route path="/game" component={Game} />
          </Switch>
        </div>   
      </BrowserRouter>
    );
  }


}

export default App;
