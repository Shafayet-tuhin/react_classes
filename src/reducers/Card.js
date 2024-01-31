export const CartReducer = (state = [], action) => {
    switch (action.type) {
        case 'Add_To_Cart': {
            const product = state.find(item => item.id === action.payload.id)
            // alert("Product added to cart")       
            return product ? state.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            }) : [...state, { ...action.payload, quantity: 1 }]
           
        }

        case 'Remove_From_Cart': {
            return state.filter(item => item.id !== action.payload)
        }

        case 'Modify_Quantity': {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: action.payload.quantity
                    }
                }
                return item
            })
        }
          

        case 'RESET': {
            return []
        }

        default:
            return state;
    }
}