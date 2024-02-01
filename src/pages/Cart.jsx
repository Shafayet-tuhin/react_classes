import React, { useEffect, useState } from "react";
import Nav from "./../components/Nav";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../reducers/Card";

const Cart = () => {
 
      const cart =useSelector(store=>store.cart)
      const dispatch = useDispatch() ;
       
     let totalAnount = 0 ;

     cart.forEach(item => totalAnount += item.quantity * item.price);
     console.log(cart)
    return (
        <div>
            <Nav />
            <div className="account-setting__content">

                <div className="account-setting__content__title">
                    <h4>Product List In Your Cart</h4>
                </div>

                <div className="product-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               cart.map(item => (
                                    <CartItem key={item.id} item={item} />
                                )) 
                            } 
                        </tbody>
                    </table>
                </div>
                <h2 className="total-price">
                    Your Total Prcie Will be $ {totalAnount}
                </h2>
                <div className="mt-50">
                    <button onClick={()=>dispatch(reset())} className="btn-big" style={{color:'white' , padding:'1rem' , backgroundColor:'gray', marginBottom:'1rem'}}>Clear Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
