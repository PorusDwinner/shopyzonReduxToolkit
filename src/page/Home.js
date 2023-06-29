import {useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setApiProducts , setCartItems , setWishlistItems } from "../slicer/slicer";

const Home = () => {

  const dispatch = useDispatch();
  const [products , setProducts] = useState([]);
  let temp = [];

  useEffect(() => {
    const fetchData = async() =>{
      const result = await fetch('https://fakestoreapi.com/products');
      const data = await result.json();
      
      // We are modifying data here by adding property 'quantity' which wil be usefull in cart component
      for(let ele of data){
        temp.push({ ...ele , quantity : 1 });
      };
      setProducts(temp);
      dispatch(setApiProducts(temp));
    };
    fetchData();
  });

  const addToWishlist = (payload) => {
    dispatch(setWishlistItems(payload))
  };

  const addToCart = (payload) => {
    dispatch(setCartItems(payload));
  }

  return (
    <div className='flex justify-around flex-wrap w-[60%] display-block m-auto mt-4 border-2 p-10'>
      {
        products?.map((ele , i) => (
          <div className='flex flex-col border p-4 m-1 shadow-2xl'  key={ele.id}>

            <img className='w-[18rem] h-[18rem]'
            src={ele.image} alt='product img'/>

            <p className='text-slate-600 font-bold ml-1'>
              Rs.{ele.price}/-
            </p>

            <p className='text-slate-400 font-medium ml-1'>
              {ele.title.slice(0,20)}
            </p>

            <p className='text-slate-500 font-medium ml-1'>
              <span className='text-slate-400'>Category : </span>{ele.category.slice(0,20)}
            </p>

            <p className='text-slate-600 font-medium ml-1'>
              {ele.description.slice(0,35)}...
            </p>

            <div className='flex justify-between ml-1 mr-1'>
              <p className='text-slate-500 font-bold'>
                <span className='text-slate-400 mr-1'>
                  Ratings
                </span>{ele.rating.rate}/5
              </p>
              <p className='text-slate-500 font-bold'>
                <span className='text-slate-400 mr-1'>Total Ratings</span>{ele.rating.count}
              </p>
            </div>

            <div className='flex justify-between mt-2'>
              <button className='bg-blue-900 text-slate-300 px-4 py-1
              hover:bg-blue-800' onClick={()=> addToWishlist(ele.id)}>
                Wishlit+
              </button>
              <button className='bg-blue-900 text-slate-300 px-4 py-1
              hover:bg-blue-800' onClick={()=> addToCart(ele.id)}>
                Cart+
              </button>
            </div>  

          </div>
        ))
      }
    </div>
  )
}

export default Home