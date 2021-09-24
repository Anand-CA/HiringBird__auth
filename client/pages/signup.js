import Head from "next/head";
import { useState } from "react";
import { BeakerIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen bg-gray-50 lg:p-10">
      <Head></Head>

      {/* wrapper */}
      <div className="h-full relative max-w-screen-2xl mx-auto">
        {/* container */}
        <div className="overflow-hidden overflow-y-scroll scrollbar-hide bg-white z-50 absolute right-0 left-0 top-0 bottom-0  flex lg:flex-row flex-col shadow-md  mx-auto h-full rounded-xl">
          {/* left */}
          <div className="lg:max-w-md py-16  w-full justify-center items-center sm:flex hidden  bg-red-100">
            {/* illustration */}
            <div className="">
              <img src="/images/Signup_newuser.png" alt="" />
            </div>
          </div>

          {/* right */}
          <div className=" flex-1 flex justify-center ">
            <form className="bg-white sm:m-5 p-3 lg:max-w-xl w-full mx-auto space-y-5">
              <h1 className="text-3xl text-red-500">Let's get you started</h1>
              <h2 className="text-2xl font-semibold">Sign up</h2>

              {/* social icons */}
              <div className="flex items-center space-x-3">
                <img className="h-12" src="/icons/fb.svg" alt="" />
                <img className="h-12" src="/icons/google.svg" alt="" />
                <img className="h-12" src="/icons/linkedin.svg" alt="" />
              </div>

              {/* fields */}
              <div className="mx-auto bg-red-20 flex-col flex space-y-4">
                <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-3 sm:space-x-5 ">
                  {/* First name */}
                  <div className="flex-1">
                    <label className="text-sm" htmlFor="">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="border-2 mt-1  text-sm focus:outline-none focus:border-red-400  w-full  rounded-lg bg-gray-50 p-2"
                    />
                  </div>

                  {/* last name */}
                  <div className="flex-1">
                    <label className="text-sm" htmlFor="">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Martin"
                      className="w-full mt-1 text-sm focus:outline-none focus:border-red-400 border-2 rounded-lg bg-gray-50 p-2"
                    />
                  </div>
                </div>

                <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-3 sm:space-x-5">
                  {/* email */}
                  <div className="flex flex-col flex-1">
                    <label className="text-sm " htmlFor="">
                      Email
                    </label>

                    <div className="flex mt-1  focus-within:border-red-400  border-2 p-2 rounded-lg bg-gray-50  space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 text-gray-400 mr-1 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                      <input
                        className="focus:outline-none text-sm bg-gray-50 w-full"
                        type="email"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  {/* mobile number */}
                  <div className="flex flex-col flex-1">
                    <label className="text-sm" htmlFor="">
                      Phone number
                    </label>

                    <div className="focus-within:border-red-400 flex mt-1 border-2 p-2 rounded-lg bg-gray-50  space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 text-gray-400 mr-1 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <input
                        className="focus:outline-none text-sm  bg-gray-50 w-full"
                        type="text"
                        placeholder="+91-702409845"
                      />
                    </div>
                  </div>
                </div>

                {/* password */}
                <div className="flex flex-col flex-1">
                  <label className="text-sm" htmlFor="">
                    Password
                  </label>

                  <div className="flex mt-1 border-2 p-2 focus-within:border-red-400  rounded-lg bg-gray-50  space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <input
                      className="focus:outline-none text-sm  bg-gray-50 w-full"
                      type={`${showPassword ? "text" : "password"}`}
                      placeholder="Enter your password"
                    />
                    {!showPassword ? (
                      <EyeOffIcon
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer h-6 w-6 text-gray-400"
                      />
                    ) : (
                      <EyeIcon
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer h-6 w-6 text-gray-400"
                      />
                    )}
                  </div>
                </div>

                {/* confirm password */}
                <div className="flex flex-col flex-1 ">
                  <label className="text-sm" htmlFor="">
                    Confirm password
                  </label>

                  <div className="flex mt-1 border-2 p-2 focus-within:border-red-400    rounded-lg bg-gray-50  space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6  text-gray-400 focus-within:text-gray-500  mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <input
                      className="focus:outline-none text-sm  bg-gray-50 w-full"
                      type="text"
                      placeholder="Confirm your password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  </div>
                </div>

                <div style={{ marginTop: "20px" }} className="space-y-2 ">
                  <button
                    type="submit"
                    className="w-full p-3 active:bg-red-200 focus:ring-2 ring-red-200  bg-red-300 rounded-lg text-white font-medium cursor-pointer font-inter"
                  >
                    Sign up
                  </button>
                  <p>
                    Already have an account?{" "}
                    <span className="cursor-pointer font-semibold text-red-400 ">
                      Sign in
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute lg:block hidden  -right-10 -top-10 ">
          <img className="" src="/images/blob.svg" alt="" />
        </div>

        <div className="absolute lg:block hidden -left-10  -bottom-10 ">
          <img className="" src="/images/blob2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default signup;
