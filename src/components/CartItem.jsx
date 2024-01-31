/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { icons } from "../assets";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
    const [quantity, setQuantity] = useState(item.quantity);
    const dispatch = useDispatch();

    return (
        <tr>
            <td>
                <div class="product">
                    <img src={item.image} class="product-img" alt="" />
                </div>
            </td>
            <td>
                <p>{item.description}</p>
            </td>
            <td>$ {item.price}</td>
            <td>
                <div class="qty_input">
                    <button
                        class="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                        onClick={() => {
                            if (quantity > 1) {
                                setQuantity((prev) => prev - 1);
                                dispatch({
                                    type: "Modify_Quantity",
                                    payload: { id: item.id, quantity: quantity - 1 },
                                });
                            }
                        }}
                    >
                        <img src={icons.minusIcon} />
                    </button>
                    <input
                        class="product-qty"
                        type="number"
                        name="product-qty"
                        value={quantity}
                        onChange={(e) => {
                            setQuantity(Number(e.target.value));
                            dispatch({
                                type: "Modify_Quantity",
                                payload: { id: item.id, quantity: Number(e.target.value) },
                            });
                        }}
                        min="1"
                    />
                    <button
                        class="qty-count qty-count--add"
                        data-action="add"
                        type="button"
                        onClick={() => {
                            dispatch({
                                type: "Modify_Quantity",
                                payload: { id: item.id, quantity: quantity + 1 },
                            });
                            setQuantity((prev) => prev + 1);
                        }}
                    >
                        <img src={icons.plusIcon} />
                    </button>
                </div>
            </td>
            <td>$ {item.quantity ? item.price * item.quantity : 0}</td>
            <td>
                <img
                    onClick={() =>
                        dispatch({ type: "Remove_From_Cart", payload: item.id })
                    }
                    className="cross-icon"
                    src={icons.crossIcon}
                />
            </td>
        </tr>
    );
}

export default CartItem;
