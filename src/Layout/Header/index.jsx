import { Fragment } from "react";
import classes from './index.module.css';
import Food from '../../../src/assests/img/Food.JPG'
import CartButton from "../CartButton";

export default function Header (props) {
  return (
    <div>
        <Fragment> 
            <header className={classes.header}>
                <h1>HungryRun</h1>
                <CartButton/>
            </header> 
            <div className={classes['main-image']}>
                <img src={Food} alt="A cheese table"/>
            </div>  
        </Fragment>
    </div>
  );
};