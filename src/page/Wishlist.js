import { useDispatch, useSelector } from 'react-redux';
import { setCartItems , removeFromWihslist} from '../slicer/slicer';

const Wishlist = () => {

  const dispatch = useDispatch();
  const wihslistItems = useSelector((state) => state.wishlistItems);

  const addToCart = (payload) => {
    dispatch(setCartItems(payload));
  };

  const removeItem = (payload) => {
    dispatch(removeFromWihslist(payload));
  }

  return (
    <div className='flex justify-around flex-wrap w-[60%] display-block m-auto mt-4 border-2 p-10'>
      {
        wihslistItems?.map((ele , i) => (
          <div key={i} className='flex border-2 m-2 shadow-xl'>

            <img className='w-[18rem] h-[18rem'
              src={ele[0].image} alt='product-img' />

            <div className='flex flex-col justify-center items-center p-20'>
              <p className='text-slate-600 font-bold ml-1'>
                Rs.{ele[0].price}/-
              </p>

              <p className='text-slate-400 font-medium ml-1'>
                {ele[0].title}
              </p>

              <p className='text-slate-600 font-medium ml-1'>
                {ele[0].description}
              </p>

              <div className='flex mt-8'>
                <button className='bg-blue-900 py-1 px-8 text-slate-300'
                onClick={() => removeItem(ele[0].id)}>
                  Remove
                </button>
                <button className='bg-blue-800 py-1 px-6 text-slate-300'
                onClick={() => addToCart(ele[0].id)}>
                  Cart+
                </button>
              </div>  
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Wishlist