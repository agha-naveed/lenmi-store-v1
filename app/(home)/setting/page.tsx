"use client";
import React, { useInsertionEffect, useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import defaultPic from "@/images/jethalal.jpeg";
// import defaultPic from "@/images/account/default-pic.jpg";
import axios from "axios";
import Form from "next/form";
import { redirect } from "next/navigation";

export default function page() {

  const [image, setImage] = useState<File | null>(null)
  const [message, setMessage] = useState<APIData>({
    first_name: "",
    last_name: "",
    phone_number: 0,
    email: "",
    password: "",
    account_type: "",
    profile_pic: null
  });

  const [update, setUpdate] = useState("")

  const [emailError, setEmailError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IFormInputs>({
    defaultValues: {
      first_name: message.first_name,
      last_name: message.last_name,
      phone_number: message.phone_number,
      email: message.email,
      account_type: message.account_type,
    },
  });

  interface IFormInputs {
    first_name: string;
    last_name: string;
    phone_number: number;
    email: string;
    password: string;
    account_type: string;
    profile_pic: File | null;
  }

  interface APIData {
    first_name: string;
    last_name: string;
    phone_number: number;
    email: string;
    password: string;
    account_type: string;
    profile_pic: File | null;
  }

  useInsertionEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/setting/api", {
        withCredentials: true,
      });

      if(res.data == null) {
        redirect("/")
      }
      if (res.data != "error") {
        setMessage(res.data);
        reset({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          phone_number: res.data.phone_number,
          email: res.data.email,
          account_type: res.data.account_type,
        });
      } else {
        alert("Something went wrong!");
      }
    };
    getData();

  }, [reset]);

  function restrictSigns(e: any): void {
    const char = e.key;
    if (char === "+" || char === "-") {
      e.preventDefault();
    }
  }
  


  const onSubmit = async (data: IFormInputs) => {
      // data['profile_pic'] = image

      let myData = data
      myData['profile_pic'] = image

      const res = await axios.post("http://localhost:3000/setting/api", myData, {
        withCredentials: true
      })
      console.log("this is response" + res.data)

      if(res.data.message == 'ok') {
        alert("Successfully Updated")

        if(res.data.password == "true") {
          setTimeout(() => {
            alert("You have been logged out")
            redirect("/account")
          }, 600)
        }
      }

      else {
        alert("Some Error Occurred!")
      }
    }

  return (
    <div className="font-opensans px-2 w-full">

      <Form onSubmit={handleSubmit(onSubmit)}
        action={""}
        className="lg:flex grid gap-10 font-muli-regular md:p-5 items-center w-full justify-items-center justify-center rounded-md"
        formMethod="PATCH"
      >
        <div className="w-[200px] justify-items-center grid gap-5 content-start px-1">
          <div className="w-[135px] h-[135px] rounded-full overflow-hidden border-2 p-1">
            <Image
              src={defaultPic}
              placeholder="blur"
              className="rounded-full h-full w-full object-cover"
              alt="Default Profile picture"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="grid text-center">
              <label
                htmlFor="fileToUpload"
                className="bg-slate-800 hover:bg-slate-900 transition-all text-white text-[15px] py-[6px] px-4 rounded-[8px] h-[42px] cursor-pointer content-center"
              >
                Upload Picture
              </label>
              <input
                type="file"
                id="fileToUpload"
                accept="image/*" className="hidden"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {e.target?.files?.[0] ? setImage(e.target?.files?.[0]) : setImage(null)}}
              />
            </div>

            <button className="bg-slate-800 hover:bg-slate-900 transition-all text-white text-[15px] py-[6px] px-4 rounded-[8px] h-[42px]">
              Remove Picture
            </button>
          </div>
        </div>

        <div className="border-r-2 h-[200px] lg:block hidden"></div>
      
        <div className="grid gap-3">
          <div className="md:flex grid content-center justify-between">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="h-9 px-2 rounded-md border border-gray-300 md:w-[300px]"
              required
              {...register("first_name")}
            />
          </div>
          <div className="md:flex grid content-center justify-between">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              className="h-9 px-2 rounded-md border border-gray-300 md:w-[300px]"
              required
              {...register("last_name")}
            />
          </div>

          <div className="md:flex grid content-center justify-between md:gap-10">
            <label htmlFor="">Phone Number</label>
            <input
              type="number"
              onKeyDown={(e) => restrictSigns(e)}
              className="h-9 md:w-[300px] px-2 rounded-md border border-gray-300"
              required
              {...register("phone_number", { min: 11 })}
            />
          </div>
          <div className="md:flex grid content-center justify-between">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="e.g: abc@xyz.com"
              className="h-9 px-2 rounded-md border border-gray-300 md:w-[300px]"
              required
              {...register("email")}
              readOnly
            />
            {emailError ? (
              <span className="text-red-600 text-[15px]"> {emailError} </span>
            ) : (
              ""
            )}
          </div>
          <div className="md:flex grid content-center justify-between">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="h-9 px-2 rounded-md border border-gray-300 md:w-[300px]"
              required
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            title="Update Details"
            className="w-fit px-5 h-10 transition-all rounded-md border font-muli-semibold bg-slate-800 hover:bg-slate-900 text-white "
          >
            Update
          </button>
        </div>
      </Form>
      
    </div>
  );
}