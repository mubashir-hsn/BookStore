import React from 'react'
// import { Link } from 'react-router-dom'
import Login from "../HomeComponents/Login.jsx"
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from "react-hot-toast"

import { Link, useLocation, useNavigate } from "react-router-dom"; //


const SignUp = () => {


    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(data)
                if (res.data) {
                    toast.success('User signup successfully.');
                    navigate(from, { replace: true });
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err)
                    toast.error("Error: " + err.response.data.message);
                }
            })
    };
    return (
        <>

            <div className=" container mx-auto h-full px-4 py-12 md:px-20">
                <div id="my_modal_4" className="relative">
                    <div className=" bg-slate-100 w-[500px] relative m-auto rounded-xl shadow-lg md:dark:bg-slate-800  dark:text-slate-100 max-h-full pb-[73px]">
                        <form method="" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="w-full px-4 py-2 text-center font-medium cursor-pointer
                              text-white absolute rounded-xl  bg-blue-500 dark:bg-blue-800 dark:text-white">Back to Home Page</Link>


                            <div className="sm:mx-auto relative top-4 sm:w-full sm:max-w-sm">

                                <h2 className=" pt-10 text-start text-sm md:text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-blue-600">
                                    Register your accout
                                </h2>
                            </div>

                            <div className="mt-10  sm:mx-auto sm:w-full space-y-5 sm:max-w-sm">
                                <div>

                                    <label htmlFor="SignupName" className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="SignupName"
                                            name="SignupName"
                                            type="text"
                                            placeholder='Enter your name'
                                            autoComplete="name"
                                            {...register("fullname", { required: true })}
                                            className="block w-[88%] md:w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400
                                            dark:bg-slate-700
                                            dark:text-slate-300
                                            border-none
                                            outline-none
                                            px-5
                                             sm:text-sm sm:leading-6"
                                        />
                                        {errors.fullname && <span className="text-xs text-red-700">This field is required</span>}
                                    </div>

                                    <label htmlFor="SignupEmail" className="block mt-5 text-sm font-medium leading-6 text-gray-900 dark:text-slate-200">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="SignupEmail"
                                            name="SignupEmail"
                                            type="email"
                                            placeholder='Enter your email'
                                            autoComplete="email"
                                            {...register("email", { required: true })}
                                            className="block w-[88%] md:w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400
                                            dark:bg-slate-700
                                            dark:text-slate-300
                                            border-none
                                            outline-none
                                            px-5
                                             sm:text-sm sm:leading-6"
                                        />
                                        {errors.email && <span className="text-xs text-red-700">This field is required</span>}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="SignupPassword" className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200">
                                            Password
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="SignupPassword"
                                            name="SignupPassword"
                                            type="password"
                                            placeholder='Enter your password'
                                            autoComplete="current-password"
                                            {...register("password", { required: true })}
                                            className="block w-[88%] md:w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400
                                            dark:bg-slate-700
                                            dark:text-slate-300
                                            border-none
                                            outline-none
                                            px-5
                                             sm:text-sm sm:leading-6"
                                        />
                                        {errors.password && <span className="text-xs text-red-700">This field is required</span>}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-[88%] md:w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </form>

                        <p className="mt-5 text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <button to="/" onClick={() => document.getElementById("my_modal_3").showModal()} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Login
                            </button>
                            <Login />

                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SignUp