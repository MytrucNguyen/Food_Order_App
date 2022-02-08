import { useContext, useState, useEffect } from 'react';
// mui
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CartContext from '../../store/CartContext';
import classes from './index.module.css';

export default function CartButton (props) {
    const cartContext = useContext(CartContext);
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

    const { items } = cartContext;

    const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
          return;
        }
        setButtonIsHighlighted(true);
    
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);
    
        return () => {
          clearTimeout(timer);
        };
      }, [items]);

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <ShoppingCartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
        );
};