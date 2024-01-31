import React from 'react';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch() ;
    return (
        <div className='ingredient'>
            <div className='ingredient__image'>
                <figure>
                    <img src={product.image} alt={product.name} />
                </figure>
            </div>

            <div className='ingredient__content'>
                <h3>{product.description}</h3>
                <p>Price: ${product.price}</p>
            </div>

            <div className='ingredient__btn'>
                <button onClick={() => dispatch({type:'Add_To_Cart' , payload : product})} className='btn-white'>Add To Cart</button>
            </div>

        </div>
    );
}

export default ProductCard;