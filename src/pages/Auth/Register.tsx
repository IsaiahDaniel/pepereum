import BgGif from "../../assets/sign-up-gif.gif";
import Logo from "../../assets/logo.svg";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

import { AiFillTwitterCircle } from "react-icons/ai";
import { ImTelegram } from "react-icons/im";
import { PiCopyrightBold } from "react-icons/pi";
import toast from 'react-hot-toast';

import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { register, resetLoaders } from "../../features/auth/authSlice";

type Props = {};

const Register = (props: Props) => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    terms: ""
  });

  const dispatch = useAppDispatch();
  const { isError, isLoading, isSuccess, message } = useAppSelector(state => state.auth)
  const navigate = useNavigate();

  const { username, email, phone, password ,confirm_password, terms } = formData;

  const handleChange = (e: React.FormEvent) => {
    setFormData(prevState => ({
      ...prevState,
      [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    console.log("formData", formData);

    if(!username || !email ||!password || !confirm_password || !phone || !terms === true){
      toast.error("All Fields Are required");
    }

    if(confirm_password !== password){
      return toast.error("Passwords Do not Match");
    }

    const registerData = {
      username,
      email,
      password,
      phone,
      terms
    }

    dispatch(register(registerData));
  }


  useEffect(() => {
    if(isSuccess){
      toast.success("Registeration Successfull", {
        position: "bottom-right"
      });
      setFormData({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        phone: "",
        terms: ""
      })
      navigate("/dashboard");
      dispatch(resetLoaders());
    }
  }, [isSuccess, message])

  useEffect(() => {
    if(isError){
      toast.error(message);
    }
  }, [isError, message])

 

  return (
    <div className="flex">
      <div
        className="flex-1 min-h-screen p-3 text-white text-center hidden md:block"
        style={{ background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${BgGif}) no-repeat center center/cover` }}
      >
        <div className="">
          <h2 className="text-2xl font-bold">
            Register with pepermint clone today
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde
            rerum dolor, aperiam temporibus nam? Delectus explicabo hic suscipit
            voluptas.
          </p>
        </div>
      </div>
      <div className="flex-1 bg-[#494B8F]">
        <div className="flex-col justify-center items-center px-14">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo" className="w-48 h-48" />
          </div>

          <div className="my-1 text-white">
            <h2 className="text-xl md:text-4xl mb-3">Sign Up</h2>
            <p className="text-2xl">For Pre-sale</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <Input placeholder="Your Name" value={username} id="username" onChange={handleChange} />
            </div>

            <div>
              <Input placeholder="E-mail" value={email} id="email" onChange={handleChange} />
            </div>

            <div>
              <Input placeholder="Password" value={password} id="password" onChange={handleChange} />
            </div>

            <div>
              <Input placeholder="Confirm Password" value={confirm_password} id="confirm_password" onChange={handleChange} />
            </div>

            <div>
              <Input placeholder="Phone" value={phone} id="phone" onChange={handleChange} />
            </div>

            <div className="flex text-white">
              <input type="checkbox" name="" id="terms" className="mr-3" onChange={handleChange} />
              <p>I Agree to the terms and conditions and Privacy Policy </p>
            </div>

            { isLoading ? (
              <Button text="Loading..." loader classNames="w-full" />
              ) : (
              <Button text="Register" buttonType="submit" classNames="w-full" />
            ) }

          </form>

          <p className="py-3 text-white">
            Already Have an account?{" "}
            <Link to="/login" className="underline text-blue-400">
              Sign in Instead
            </Link>{" "}
          </p>
        </div>
        <div className="px-14 flex space-x-5 py-5">
          <AiFillTwitterCircle size={44} color="#fff" />
          <ImTelegram size={42} color="#fff" />
        </div>
        <p className="px-14 text-white flex items-center">
          <PiCopyrightBold /> 2023, {" "} Peperum. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Register;
