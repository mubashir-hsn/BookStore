import React from 'react'
import { Link ,useNavigate,useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from "react-hot-toast"


const Login = () => {


    const location = useLocation();                 
    const navigate = useNavigate();                 
    const from = location.state?.from?.pathname || "/";  

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async(data) => {
        const userInfo = {
            email : data.email,
            password : data.password
        }
       await axios.post("http://localhost:4001/user/login",userInfo)
        .then((res)=>{
            console.log(data)
            if(res.data){
          toast.success('User login successfully.');
          //   document.getElementById('my_modal_3').close();
          setTimeout(()=>{
              window.location.reload();
              localStorage.setItem("Users", JSON.stringify(res.data.user))
            },1000)
            navigate(from, { replace: true }); 
            }
        })
        .catch((err)=>{
            if(err.response){
                console.log(err)
            toast.error("Error: " + err.response.data.message);
            setTimeout(()=>{},2000)
            }
        })
      };
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box dark:bg-slate-800 dark:text-slate-100">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* if there is a button in form, it will close the modal */}
                          <button onClick={()=>document.getElementById('my_modal_3').close()}><Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-800 dark:text-white">✕</Link></button>
                       
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                           
                            <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-blue-600">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <div>
                                    <label htmlFor="LoginEmail" className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200 text-start dark:text-start">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="LoginEmail"
                                            name="LoginEmail"
                                            type="email"
                                            placeholder='Enter your email'
                                            autoComplete="email"
                                            {...register("email", { required: true })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400
                                            dark:bg-slate-700
                                            dark:text-slate-300
                                            border-none
                                            outline-none
                                            px-5
                                             sm:text-sm sm:leading-6"
                                        />
                                        {errors.email && <span className="text-xs text-start text-red-700">This field is required</span>}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex mt-5 items-center justify-between">
                                        <label htmlFor="LoginPassword" className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200">
                                            Password
                                        </label>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="LoginPassword"
                                            name="LoginPassword"
                                            type="password"
                                            placeholder='Enter your password'
                                            autoComplete="current-password"
                                            {...register("password", { required: true })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400
                                            dark:bg-slate-700
                                            dark:text-slate-300
                                            border-none
                                            outline-none
                                            px-5
                                             sm:text-sm sm:leading-6"
                                        />
                                        {errors.password && <span className="text-xs text-start text-red-700">This field is required</span>}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 mt-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign in
                                    </button>
                                </div>
                                </div>
                            </form>

                            <div className="mt-10 text-center text-sm text-gray-500">
                                Not a member?{' '}
                                <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    SignUp
                                </Link>
                            </div>
                        </div>
                </dialog>
            </div>
        </>
    )
}

export default Login