import {useState, useEffect} from "react";
import { CartContext } from "./CartContext";

function CartProvider({children}) {
    const [data, SetData] = useState([]);
    // first to mount the data useEffect
    useEffect(()=>{
        let datas  = JSON.parse(localStorage.getItem("cart"));
        if (datas) {
            SetData(datas);
        }
    },[]);
    // set the data in local storage using useEffect
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(data));
    },[data]);

    // Add To Cart 
    const AddtoCartFn = (product) =>{
        SetData((prv) => {
            const existingItems = prv.find((item) => item.id === product.id);
            if(existingItems){
                return prv.map((item) => {
                    if(item.id === product.id){
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }else{
                        return item;
                    }
                });
            }
            return [...prv, {...product, quantity: 1}];
        });
    }
    const IncrementQty = (id) =>{
        SetData((prv) => {
            prv.map((item) => {
                item.id === id ? {...item, quantity: item.quantity + 1} : item;
            }).filter((item) => item.quantity < 10)
        })
    }
    const DecrementQty = (id) =>{
        SetData((prv) => {
            prv.map((item) => {
                item.id === id ? {...item, quantity: item.quantity - 1} : item;
            }).filter((item) => item.quantity > 0)
        })
    }
    const RemoveItems = (id) => {
        SetData((prv) => prv.filter((item) => item.id !== id));
    }

    const getTotalPrice = () => {
        return data.reduce((total, item) => total + item.price * item.quantity, 0);
    }


  return (
  <CartContext.Provider value={{data, AddtoCartFn, IncrementQty, DecrementQty, RemoveItems, getTotalPrice}}>
    {children}
  </CartContext.Provider>
  );
}

export default CartProvider;
