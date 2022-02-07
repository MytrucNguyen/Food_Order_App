import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import cartContext from '../../store/CartContext';
import classes from './index.module.css';

export default function CartButton (props) {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <ShoppingCartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
};