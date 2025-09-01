import { useSelector } from "react-redux";
import { newRequest } from "../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
    return(
        useQuery({
            queryKey: ['categories'],
            queryFn: async () => {
              const response = await newRequest.get('/categories/')
              return response.data
            }
          })
    )
}

// fetching products
export const useProducts = (selectedCategory) => {
    return(
        useQuery({
            queryKey: ['products',selectedCategory],
            queryFn: async () => {
              const response = await newRequest.get('/products/',{
                params: {
                  category__name : selectedCategory || ""
                }
              })
              return response.data
            }
          })
    )
}


//getting single product

export const useProduct = (id) => {
    return(
        useQuery({
            queryKey: ['product',id],
            queryFn: async () => {
              const response = await newRequest.get(`/products/${id}`)
              return response.data
            }
          })
    )
}



//fetch orders
export const useOrders = () => {
  const {user} = useSelector(state => state.auth)
    return(
        useQuery({
            queryKey: ['orders'],
            queryFn: async () => {
              const response = await newRequest.get(`/order/lists/`,{
                headers:{
                     Authorization: `Bearer ${user?.access}`
                }
              })
              return response.data
            }
          })
    )
}