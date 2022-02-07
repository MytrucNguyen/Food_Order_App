import { Fragment } from 'react';
import './App.css';
// Components
import Meals from './components/Meals';
// Layout 
import Header from './Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
