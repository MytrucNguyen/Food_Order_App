import { Fragment } from "react";

import CartButton from "../CartButton";

import Food from '../../../src/assests/img/Food.JPG'
import classes from './index.module.css';


export default function Header (props) {
  return (
    <div>
        <Fragment> 
            <header className={classes.header}>
                <h1>HungryRun</h1>
                <CartButton onClick={props.onShowCart}/>
            </header> 
            <div className={classes['main-image']}>
                <img src={Food} alt="A cheese table"/>
            </div>  
        </Fragment>
    </div>
  );
};