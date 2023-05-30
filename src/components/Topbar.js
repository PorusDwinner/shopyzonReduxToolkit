import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className='flex justify-between flex-wrap h-[4.5rem] bg-blue-900'>
        
        <div className='flex justify-center items-center ml-4'>
            <h1 className='text-slate-300 text-2xl font-bold'>
                Shopyzon
            </h1>
        </div>

        <div className='flex space-x-12 mr-4 text-slate-300'>
            <Link to='/' className='text-3xl flex justify-center items-center
            hover:text-yellow-300'>
                <FaHome/>
            </Link>

            <Link to='/your-wishlist' className='text-3xl flex justify-center items-center
            hover:text-yellow-300'>
                <FaAlignJustify/>
            </Link>

            <Link to='/your-cart' className='text-3xl flex justify-center items-center
            hover:text-yellow-300'>
                <FaCartPlus/>
            </Link>

            <Link to='/' className='text-3xl font-medium flex justify-center items-center
            hover:text-yellow-300'>
                User
            </Link>
        </div>

    </div>
  )
}

export default Topbar