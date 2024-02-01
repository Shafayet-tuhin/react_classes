// export const CartReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'Add_To_Cart': {
//             const product = state.find(item => item.id === action.payload.id)
//             // alert("Product added to cart")       
//             return product ? state.map(item => {
//                 if (item.id === product.id) {
//                     return {
//                         ...item,
//                         quantity: item.quantity + 1
//                     }
//                 }
//                 return item
//             }) : [...state, { ...action.payload, quantity: 1 }]
           
//         }

//         case 'Remove_From_Cart': {
//             return state.filter(item => item.id !== action.payload)
//         }

//         case 'Modify_Quantity': {
//             return state.map(item => {
//                 if (item.id === action.payload.id) {
//                     return {
//                         ...item,
//                         quantity: action.payload.quantity
//                     }
//                 }
//                 return item
//             })
//         }
          

//         case 'RESET': {
//             return []
//         }

//         default:
//             return state;
//     }
// }


// import { createReducer } from "@reduxjs/toolkit"; //npm install @reduxjs/toolkit


// export const CartReducer = createReducer([], (builder) => {
//     builder

//     .addCase('Add_To_Cart' , (state , action) => {
//         const product = state.find(el => el.id === action.payload.id) ;
//         product?product.quantity++:state.push({...action.payload,quantity:1})
//     })
    
//     .addCase('Remove_From_Cart' , (state , action) => {
//         return state.filter(item => item.id !== action.payload)
//     })

//     .addCase("Modify_Quantity" , (state , action) => {
//         const product = state.find(el => el.id === action.payload.id) 
        
//         product.quantity = action.payload.quantity
//     })

//     .addCase("RESET",(state)=>{
//         return []
//     })

//     .addDefaultCase((state) =>{
//         return state;
//     })

// })

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart" ,
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = state.find(el => el.id === action.payload.id) ;
            product?product.quantity++:state.push({...action.payload,quantity:1})
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id!== action.payload)
        },
        modifyQuantity: (state, action) => {
            const product = state.find(el => el.id === action.payload.id) 
            
            product.quantity = action.payload.quantity
        },
        reset: (state) => {
            return []
        }
    }
})

export const { addToCart, removeFromCart, modifyQuantity, reset } = cartSlice.actions;

export default cartSlice.reducer;