import React from 'react'
import Counter from '../counter';

import './style.scss';
export default function ({data}) {

    const { order_items, restaurant , user } = data;
    
    return (
        <>
            <h1 className="item-title"> { restaurant && restaurant.title } , by { user && user.name }</h1>
            <hr/>
            <table className="full-width">
                <thead>
                    <tr>
                        <th>Order items</th>
                        <th>Price</th>
                        <th className="txt-center">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    { order_items && order_items.map( item =>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price} EGP</td>
                                <Counter itemId={item.id} itemQuantity={item.quantity}/>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
