import {
  Alert,
  Button,
  Label,
  RangeSlider,
  Spinner,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function signup() {
  const navigate = useNavigate()
  const [formdata, setformdata] = useState({});
  const [errordata, seterrordata] = useState(null);
  const [succesdata, setsuccesdata] = useState(null);
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      return seterrordata("please fill out all details");
    }
    try {
      setsuccesdata(true);
      seterrordata(null)
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        return seterrordata(data.message);
      }
      setsuccesdata(false);
      if(res.ok){
        navigate('/sign-in')
      }
    } catch (error) {
      seterrordata(error.message);
      setsuccesdata(false);
    }
  };
  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value.trim() });
  };
  console.log(formdata);
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
          <form className="flex flex-col gap-3" onSubmit={handlesubmit}>
            <div>
              <Label value="UserName" />

              <TextInput
                type="username"
                placeholder="UserName"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Email" />

              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Password" />

              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={succesdata}
            >
              {succesdata ? (
                <>
                  <Spinner size="sm" />

                  <span className="pl-3">Loading....</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errordata && (
            <Alert className="mt-5 " color="failure">
              {errordata}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
