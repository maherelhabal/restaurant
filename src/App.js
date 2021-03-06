import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './styles/App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      dishes: DISHES
    }
  }
  render () {
    return (
      <div>
        <Navbar dark coloe='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Midetranean Cuisine</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
        
    );
  }
}
    
               

export default App;