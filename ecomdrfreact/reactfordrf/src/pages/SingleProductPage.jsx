import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../api/fetchApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

const SingleProduct = () => {
  const [quantity,setQuantity] = useState(1)
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {data,isLoading,isError,error} = useProduct(id)

  if(isLoading) return <p>loading...</p>
  if(isError) return <p>Error: {error.message}</p>

  const handleAddToCart = () => {
      dispatch(addToCart({...data,quantity}))
      toast.success("Item added to cart sucessfully.")
      navigate('/cart')
  }
 
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Product Image */}
        <div className="p-4 h-[80vh]">
          <img
            src={data.image}
            alt="Casual Shirt"
            className="w-full h-full rounded-md object-cover object-center"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            {data.name}
          </h1>
          <p className="text-lg text-slate-500 mt-2">Clothing</p>
          <p className="text-2xl font-semibold text-slate-800 mt-4">
            ${data.price}
          </p>

          <p className="mt-6 text-slate-600">
            {data.description}
          </p>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center space-x-4">
            <label className="text-slate-700">Quantity:</label>
            <div className="flex items-center border border-slate-300 rounded overflow-hidden">
              <button
                onClick={()=>{
                  if(quantity <= 1) return
                  setQuantity(prev => prev - 1)
                }}
                className="px-3 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 transition cursor-pointer"
              >
                −
              </button>
              <input
                type="text"
                readOnly
                value={quantity}
                className="w-12 text-center border-x border-slate-300 bg-white text-slate-800"
              />
              <button
                onClick={()=>setQuantity(prev => prev + 1)}
                className="px-3 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 transition cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button onClick={handleAddToCart} className="mt-6 bg-slate-800 text-white px-6 py-3 rounded hover:bg-slate-700 transition cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;