import React,{ useState } from 'react';

import { incrementTheItemQuantity , decrementTheItemQuantity } from '../../services';

import './style.scss';

export default function ({ itemId , itemQuantity }) {

    const [ quantity, setQuantity ] = useState(itemQuantity)

    // console.log("itemId>>>>>>>",itemId)

    const increment = () => {
        console.log("increment")
        incrementTheItemQuantity(itemId)
        setQuantity( prevQantity => prevQantity + 1)
    }
    
    const decrement = ()=>{
        console.log("decrement")
        decrementTheItemQuantity(itemId)
        setQuantity( prevQantity => prevQantity - 1)
    }

    return (
        <>
            <td className="counter-wrapper">
                <button className="half-circle-btn  left-radius"  onClick={ decrement }>
                    <span className="icon-minus-symbol"></span>
                </button>
                <input type="number" value={ quantity }  className="counter-number" readOnly />
                <button className="half-circle-btn right-radius"  onClick={ increment }>
                    <span className="icon-add"></span>
                </button>
            </td>
        </>
    )
}
