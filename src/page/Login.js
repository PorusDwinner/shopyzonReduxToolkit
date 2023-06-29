
const Login = () => {

  return (
    <div className="flex justify-center items-center
    bg-gradient-to-r from-indigo-500 from-10%
    via-sky-500 via-30% to-emerald-500 to-90% ... h-screen">

      <div className="w-[50%] shadow-2xl py-20 px-10 flex justify-center items-center ">

          <div className="flex flex-col space-y-4">
            <input className="text-slate-400 py-1 px-8"
            type="text" placeholder="User Name..."/>

            <input className="text-slate-400 py-1 px-8"
            type="text" col={10} placeholder="Password..."/>

            <button className="bg-yellow-600 text-slate-600 font-bold px-4 py-1
            hover:bg-yellow-500">
              Login
            </button>
          </div>

      </div>

    </div>
  )
}

export default Login