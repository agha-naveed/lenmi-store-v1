"use client";
import React, { useInsertionEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import defaultPic from "@/images/account/default-pic.jpg";
import axios from "axios";
import Form from "next/form";

export default function page() {
  const [message, setMessage] = useState<APIData>({
    first_name: "",
    last_name: "",
    phone_number: 0,
    email: "",
    password: "",
    account_type: "",
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
  }

  interface APIData {
    first_name: string;
    last_name: string;
    phone_number: number;
    email: string;
    password: string;
    account_type: string;
  }

  useInsertionEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/profile/api", {
        withCredentials: true,
      });

      if (res.data != "error") {
        setMessage(res.data);
        reset({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          phone_number: res.data.phone_number,
          email: res.data.email,
          account_type: res.data.account_type,
        });``
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
      const res = await axios.patch("http://localhost:3000/profile/api", data, {
        withCredentials: true
      })
      
      console.log("this is response"+res)


      // if(res.ok) {
      //   setUpdate(await res.json())
      //   // redirect("/")
      // }
      // else {
      //   setUpdate("error")
      //   alert("Error")
      // }
    }

  return (
    <div className="font-opensans px-2 lg:gap-10 flex lg:flex-row gap-2 items-center flex-col w-full justify-center">
      <div className="w-[200px] justify-items-center grid gap-5 content-start px-1">
        <div className="w-[135px] h-[135px] rounded-full overflow-hidden border-2 p-1">
          <Image
            src={defaultPic}
            placeholder="blur"
            className="rounded-full"
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
              name="fileToUpload"
              id="fileToUpload"
              className="hidden"
            />
          </div>

          <button className="bg-slate-800 hover:bg-slate-900 transition-all text-white text-[15px] py-[6px] px-4 rounded-[8px] h-[42px]">
            Remove Picture
          </button>
        </div>
      </div>

      <div className="border-r-2 h-full"></div>
      
      <Form onSubmit={handleSubmit(onSubmit)}
        action={""}
        className="grid gap-2 font-muli-regular md:p-5 rounded-md"
        formMethod="POST"
      >
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
          title="Sign up!"
          className="w-fit px-5 h-10 transition-all rounded-md border font-muli-semibold bg-slate-800 hover:bg-slate-900 text-white "
        >
          Update
        </button>
      </Form>
      
    </div>
  );
}