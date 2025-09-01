import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {
            const existingItem = state.items.find(item => item.id == action.payload.id)

            if(existingItem){
                existingItem.quantity += action.payload.quantity
            }else{
                state.items.push({...action.payload})
            }

            state.totalQuantity = state.items.reduce((acc,item) => acc + item.quantity,0)
            state.totalPrice = state.items.reduce((acc,item) => acc + item.quantity * item.price,0)
            
        },
        removeFromCart: (state,action) => {
            state.items = state.items.filter(item => item.id !== action.payload)

            state.totalQuantity = state.items.reduce((acc,item) => acc + item.quantity,0)
            state.totalPrice = state.items.reduce((acc,item) => acc + item.quantity * item.price,0)
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
            state.totalQuantity = 0
        },
        increaseCartItem: (state,action) => {
            const existingItem = state.items.find(item => item.id == action.payload.id)

            if(existingItem){
                existingItem.quantity += 1
            }

            state.totalQuantity = state.items.reduce((acc,item) => acc + item.quantity,0)
            state.totalPrice = state.items.reduce((acc,item) => acc + item.quantity * item.price,0)
        },

         decreaseCartItem: (state,action) => {
            const existingItem = state.items.find(item => item.id == action.payload.id)

            if(existingItem){
                existingItem.quantity -= 1

                if(existingItem.quantity <= 0 ){
                    state.items = state.items.filter(item => item.id !== action.payload.id)
                }
            }

            state.totalQuantity = state.items.reduce((acc,item) => acc + item.quantity,0)
            state.totalPrice = state.items.reduce((acc,item) => acc + item.quantity * item.price,0)
        }
    }
})

export const {addToCart, removeFromCart, clearCart, decreaseCartItem, increaseCartItem} = cartSlice.actions

export default cartSlice.reducer