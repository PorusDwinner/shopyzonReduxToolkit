import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart , quantityIncrement , quantityDecrement } from "../slicer/slicer";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect , useState } from 'react';

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  let [totalPrice , setTotalPrice] = useState(0);
  let [totalItems , setTotalItems] = useState(0);

  useEffect(() => {
    let temp = 0;
    const calculateTotalPrice = () => {
      for(var i = 0 ; i< cartItems.length ; i++){
        temp += cartItems[i][0].price * cartItems[i][0].quantity;
      };
      setTotalPrice(temp);
    };
    calculateTotalPrice();
  },[cartItems]);

  useEffect(() => {
    let temp = 0;
    const calculateTotalItems = () => {
      for(var i = 0 ; i < cartItems.length ; i++){
        temp += cartItems[i][0].quantity
      };
      setTotalItems(temp);
    };
    calculateTotalItems();
  },[cartItems]);

  const increment = (payload) => {
    dispatch(quantityIncrement(payload));
  };

  const decrement = (payload) => {
    dispatch(quantityDecrement(payload));
  };
  const deleteCartItems = (payload) => {
    dispatch(removeFromCart(payload));
  };

  return (
    <div className='flex justify-around'>
      <div className='w-[80%] flex flex-col'>
      {
        cartItems?.map((ele) => (
          <div className='flex justify-around m-4 border p-4' key={ele[0].id}>

            <img className='w-[15rem] h-[15rem]'
            src={ele[0].image} alt='product-img' />

            <div className='flex flex-col justify-center items-center'>
              <p className='text-xl text-slate-500 font-bold'>
                {ele[0].title.slice(0,20)}
              </p>

              <div className='flex mt-4'>
                <p className='py-1 px-6 bg-slate-200 hover:cursor-pointer'
                onClick={()=> decrement(ele[0].id)}>
                  -
                </p>
                <p className='py-1 px-6 bg-slate-200 hover:cursor-pointer'
                onClick={()=> increment(ele[0].id)}>
                  +
                </p>
              </div>
            </div>

            <p className='font-medium text-slate-500 flex justify-center items-center
            font-bold'>
              X {ele[0].quantity}
            </p>

            <p className='flex justify-center items-center text-xl text-slate-600 font-bold'>
              {ele[0].price * ele[0].quantity}
            </p>

            <p className='flex justify-center items-center text-2xl text-red-800
            hover:text-red-700' onClick={() => deleteCartItems(ele[0].id)}>
              <FaTrashAlt/>
            </p>
          </div>
        ))
      }
      </div>
      <div className='flex flex-col justify-center items-center w-[20%] space-y-4'>
        
        <p className='font-bold text-2xl text-slate-600'>
          Total Items : {totalItems}
        </p>
        
        <p className='font-bold text-2xl text-slate-600'>
          Amount : Rs {totalPrice.toFixed(2)}/-
        </p>

        <button className='bg-blue-900 text-slate-300 px-6 py-1
        hover:bg-blue-800'>
          Checkout
        </button>
      </div>  
    </div>
  )
}

export default Cart