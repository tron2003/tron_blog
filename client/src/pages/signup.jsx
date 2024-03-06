import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function signup() {
  return (
    <div className=" min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-7">
        <div className="flex-1 mt-20">
          <Link to="/" className=" text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Tron
            </span>
            Blog
          </Link>
          <p className="mt-5 text-bold">
            Join Our Journey of Experience and Learning
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-3">
            <div>
              <Label value="UserName" />

              <TextInput type="text" placeholder="UserName" id="username" />
            </div>
            <div className="">
              <Label value="Email" />

              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div className="">
              <Label value="Password" />

              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
