import { useContext } from 'react';
// mui
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CartContext from '../../store/CartContext';
import classes from './index.module.css';

export default function CartButton (props) {
    const cartContext = useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <ShoppingCartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
        );
};