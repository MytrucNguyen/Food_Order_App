import { Fragment } from 'react';
import './App.css';
// Components
import Meals from './components/Meals';
import Cart from './components/Cart'
// Layout 
import Header from './Layout/Header';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
