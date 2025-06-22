import { useReducer } from "react";
import { toast } from 'react-toastify';

const initialValue = {
    quantity : 1
}

function AllReducer(state, action){
    switch(action.type){
        case "INC":
            if(state.quantity >= 10){
                toast.error("You can't add more than 10 quantity")
                return state
            }
            return{
                quantity : state.quantity + 1
            }
        case "DEC":
            if(state.quantity <= 1){
                   toast.error("the product must have atleast 1 quantity")
                    return state
            }
            return{
                quantity : state.quantity - 1
            }
        default:
            return state
    }
}

function Quantity() {
    const [state, dispatch] = useReducer(AllReducer, initialValue)
  return (
  <>

                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Quantity</h3>
                    <div class="flex items-center space-x-3">
                        <button class="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                        onClick={()=> dispatch({type : "DEC"})} >
                            <h1  class="w-4 h-4">-</h1>
                        </button>
                        <span id="quantity" class="text-xl font-semibold">{state.quantity}</span>
                        <button class="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                        onClick={()=> dispatch({type : "INC"})} >
                            <h1 class="w-4 h-4">+</h1>
                        </button>
                    </div>
                </div>
  </>);
}

export default Quantity;
