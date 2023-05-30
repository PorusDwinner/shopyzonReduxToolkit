import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginState : false,
    apiProducts : [],
    cartItems : [],
    wishlistItems : [],
};

export const shoppingSlicer = createSlice({
    name : 'FAKESTOREAPI',
    initialState,
    reducers : {
        setApiProducts(state , action){
            state.apiProducts = action.payload;
        },
        setCartItems(state , action){
            let cartItems = state.cartItems;
            let products = state.apiProducts;
            let temp = products.filter((ele) => ele.id === action.payload);
            cartItems.push(temp);
        },
        setWishlistItems(state , action){
            let wishlistItems = state.wishlistItems;
            let products = state.apiProducts;
            let temp = products.filter((ele) => ele.id === action.payload);
            wishlistItems.push(temp);
        },
        removeFromWihslist(state , action){
            state.wishlistItems = state.wishlistItems.filter((ele) => ele[0].id !== action.payload);
        },
        removeFromCart(state , action){
            state.cartItems = state.cartItems.filter((ele) => ele[0].id !== action.payload);
        },
        quantityIncrement(state , action){
            let cartItems = state.cartItems;
            for(let ele of cartItems){
                if(ele[0].id === action.payload){
                    ele[0].quantity += 1;
                }
            }
        },
        quantityDecrement(state , action){
            let cartItems = state.cartItems;
            for(let ele of cartItems){
                if(ele[0].id === action.payload){
                    if(ele[0].quantity === 1){
                        alert(`Quantity can't be less than 1`);
                    } else {
                        ele[0].quantity -= 1;
                    }
                }
            }
        },
    }
});

export const { setApiProducts , setCartItems , setWishlistItems ,
               removeFromWihslist , removeFromCart , quantityIncrement ,
               quantityDecrement } = shoppingSlicer.actions;
export default shoppingSlicer.reducer;