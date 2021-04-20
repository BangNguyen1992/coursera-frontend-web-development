import { Navbar, NavbarBrand } from 'reactstrap';

// import logo from './logo.svg';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          <Menu dishes={DISHES} />
        </div>
      </Navbar>
    </div>
  );
}

export default App;
