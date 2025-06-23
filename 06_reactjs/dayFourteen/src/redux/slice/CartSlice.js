import { createSlice } from "@reduxjs/toolkit";

const getInitialCarts = () => {
    const storeCart = localStorage.getItem("cart");
    return storeCart ? JSON.parse(storeCart) : [];
}

const saveCartToStorage = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

const calculateTotals = (cartItems) =>{
    const total = cartItems.reduce(
        (acc, item) =>{
            const itemTotal = item.price * item.quantity;
            acc.totalPrice += itemTotal;
            acc.totalQuantity += item.quantity;
            acc.totalItems += 1;
            return acc;
        }, {
            totalPrice: 0,
            totalQuantity: 0,
        }
    )
    return total
}
const initialState = {
    cartItems: getInitialCarts(),
    totalQuantity: 0,
    totalPrice: 0, 
    totalItems: 0
}

const cartSlice = createSlice({
    name: "cart", 
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const product = action.payload;
            const existing = state.cartItems.find(item => item.id === product.id);
            if(existing){
                existing.quantity += 1;
            }else{
                state.cartItems.push({...product, quantity: 1});
            }

            const total = calculateTotals(state.cartItems);
            state.totalQuantity = total.totalQuantity;
            state.totalPrice = total.totalPrice;
            state.totalItems = total.totalItems;
            saveCartToStorage(state.cartItems);
        },
        incrementQty:(state, action)=>{
            const id = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if(item){
                item.quantity += 1;
            }
            const total = calculateTotals(state.cartItems);
            state.totalQuantity = total.totalQuantity;
            state.totalPrice = total.totalPrice;
            state.totalItems = total.totalItems;
            saveCartToStorage(state.cartItems);
            
        },
        decrementQty:(state, action)=>{
            const id = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if(item){
                item.quantity -= 1;
                if(item.quantity === 0){
                    state.cartItems = state.cartItems.filter(item => item.id !== id);
                }
            }
            const total = calculateTotals(state.cartItems);
            state.totalQuantity = total.totalQuantity;
            state.totalPrice = total.totalPrice;
            state.totalItems = total.totalItems;
            saveCartToStorage(state.cartItems);
            
        },
        removeItem:(state, action)=>{
            const id = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if(item){
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
            const total = calculateTotals(state.cartItems);
            state.totalQuantity = total.totalQuantity;
            state.totalPrice = total.totalPrice;
            state.totalItems = total.totalItems;
            saveCartToStorage(state.cartItems);
            
        },
        clearCart:(state)=>{
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
            state.totalItems = 0;
            localStorage.removeItem("cart");
        }
    }
})

export const { 
    addToCart, 
    incrementQty, 
    decrementQty, 
    removeItem, 
    clearCart, 
    totalPrice, 
    totalQuantity, 
    totalItems

 } = cartSlice.actions;
export default cartSlice.reducer;