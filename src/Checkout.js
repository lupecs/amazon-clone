import React from 'react';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://www.forever21.com/images/f21/us/en/web/20200320/0820_GLOBAL_BOGO50_DENIM_D_B_023411_f21.jpg?1" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Bag is Empty</h2>
                        <p>You have no items in your basket. To buy one or more items, clcik "Add to basket" next to the item.</p>
                    </div>
                ) : (
                        <div className="checkout__title">
                            <h2>Your Shopping Basket</h2>
                            {basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div >
    );
}

export default Checkout
