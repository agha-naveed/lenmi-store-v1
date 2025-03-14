"use client";
import Image from "next/image";
import React, { useState, useEffect, ChangeEvent } from "react";
import { redirect } from "next/navigation";
import { MdAddPhotoAlternate, MdInventory } from "react-icons/md";
import { GrCurrency } from "react-icons/gr";
import { RiColorFilterAiLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import Form from "next/form";
import { IoCloseCircle } from "react-icons/io5";
import RichTextEditor from "@/app/components/RichTextEditor";
import axios from "axios";

interface IFormInputs {
  product_name: string;
  category: string;
  description: string;
  price: string;
  d_price: number;
  stock: string;
  color: string[];
  content: string;
  file: File[];
  payment_method: string[];
}

export default function Page() {
  
  useEffect(() => {
        
    const getData = async () => {
        
        const fetchData = await axios.get("/account/api", {
          withCredentials: true
        })

        if(fetchData == null) {
          redirect("/")
        }
    }
    getData()
    
  }, [])


  const [message, setMessage] = useState("");

  const [selectedImage, setSelectedImage] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const [customColors, setCustomColors] = useState<string[]>([]);
  const [newColor, setNewColor] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [showAlert, setShowAlert] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const handleAddColor = () => {
    if (newColor.trim()) {
      setCustomColors([...customColors, newColor.trim()]);
      setNewColor("");
    }
  };

  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const contentValue = watch("content");

  const onSubmit = async (data: IFormInputs) => {

    if(!files) {
      console.log("No File")
      return
    }
    if(files.length > 2) {
      alert("Must Attached atleast Two Images")
      return
    }

    const uploadedUrls: string[] = [];

    let myFile;
    for (let i = 0; i < files.length; i++) {
      const picData = new FormData();
      picData.append("file", files[i]);
      picData.append("upload_preset", "my-images");
  
      try {
        const cloudRes = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: picData,
          }
        );
  
        myFile = await cloudRes.json();
        if (myFile.secure_url) {
          uploadedUrls.push(await myFile.secure_url);
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
    }

    const formData = new FormData();

    data.description = contentValue

    for(let i=0; i<uploadedUrls.length; i++)
      formData.append(`imgFile`, uploadedUrls[i]);

    formData.append("name", data.product_name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("payment_method", JSON.stringify(data.payment_method));
    formData.append("category", data.category);
    formData.append("color", JSON.stringify(data.color));
    formData.append("stock", data.stock);


    console.log("Myform Data: " + formData);

    if (originalPrice < discountedPrice) {
      setShowAlert("Discounted Price Must be less than Original Price");
    } else {
      setShowAlert("");
    }

    const res = await axios.post("/add-product/api", formData);

    console.log("response data: " + res.data)

    if (res.data.message != "ok")
      setMessage("Some Problem Occurred!");

    else {
      setMessage("Successfully Added Product");
      setTimeout(function () {
        window.location.reload()
      }, 800);
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage((prevImages) => [
        ...prevImages,
        URL.createObjectURL(file),
      ]);
      setFiles((prevFiles) => [...prevFiles, file]);
    }
  };

  const handleRemoveImage = (imageUrl: string) => {
    setSelectedImage((prevImages) => {
      const indexToRemove = prevImages.indexOf(imageUrl);
      if (indexToRemove === -1) return prevImages;
  
      setFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
  
      return prevImages.filter((image) => image !== imageUrl);
    });
  };

  return (
    <div className="container mx-auto px-2">
      <Form
        action={""}
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-10 w-fit py-10"
      >
        {/* ---------- Image Upload Section ---------- */}
        <div className="flex gap-3 shadow-md shadow-gray-400 rounded-lg w-fit p-5">
          <div title="Upload Picture">
            <label
              htmlFor="upload-product-pic"
              className="cursor-pointer flex justify-center items-center w-[120px] h-[120px] border border-dashed border-gray-500 rounded-lg"
            >
              <MdAddPhotoAlternate className="text-4xl text-gray-500" />
            </label>
            <input
              type="file"
              accept="image/*"
              id="upload-product-pic"
              disabled={selectedImage.length === 5}
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {selectedImage.map((imgs, index) => (
            <div
              key={`${imgs}-${index}`}
              className="flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg overflow-hidden relative"
            >
              <Image
                src={imgs}
                alt=""
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <IoCloseCircle
                title="remove picture"
                className="absolute w-5 h-5 top-0 right-0 z-20 cursor-pointer"
                onClick={() => handleRemoveImage(imgs)}
              />
            </div>
          ))}

          <div className="flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg overflow-hidden relative">
            <span className="text-gray-600 select-none">Photo</span>
          </div>
        </div>

        
        {/* ---------- Image Upload Section Ended ---------- */}

        {/* Form Fields */}
        <div className="font-opensans grid gap-4 w-fit">
          <div className="flex gap-3">
            <div className="grid gap-2">
              <label htmlFor="" className="font-medium">
                Product Name
              </label>
              <input
                type="text"
                className="w-[500px] border border-gray-400 rounded-md py-2 px-3"
                {...register("product_name")}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="" className="font-medium">
                Category
              </label>
              <select
                {...register("category")}
                className="py-2 px-3 w-44 rounded-md border border-gray-400"
              >
                <option value="">-- select --</option>
                <option value={`electronics`}>Electronics</option>
                <option value={`mens_clothing`}>Mens Clothing</option>
                <option value={`accessories`}>Accessories</option>
                <option value={`grocery`}>Grocery</option>
                <option value={`food`}>Food</option>
              </select>
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="" className="font-medium">
              Description
            </label>
            <RichTextEditor
              value={contentValue}
              onChange={(value: string) => setValue("content", value)}
            />
          </div>

          <div className="flex gap-3 w-fit">
            <div className="grid gap-1">
              <label htmlFor="" className="font-medium">
                Price
              </label>
              <input
                type="number"
                className="border border-gray-400 rounded-md py-2 px-3"
                value={originalPrice}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setOriginalPrice(Number(e.target.value));
                }}
                {...register("price")}
                required
              />
            </div>
            <div className="grid gap-1">
              <div className="flex justify-between">
                <label htmlFor="" className="font-medium">
                  Discounted Price
                </label>
                <span className="content-start font-semibold text-gray-500">
                  {discountedPrice > 0 && originalPrice > 0 ? (
                    <>-{((discountedPrice / originalPrice) * 100).toFixed(1)}%</>
                  ) : undefined}
                </span>
              </div>
              <input
                type="number"
                className="border border-gray-400 rounded-md py-2 px-3"
                value={discountedPrice}
                onInput={(e: any) => {
                  setDiscountedPrice(Number(e.target.value));
                }}
                {...register("d_price")}
                required
              />
            </div>
          </div>
          {showAlert.length > 0 ? (
            <span className="text-red-700">{showAlert}</span>
          ) : null}

          <aside className="flex">
            <ul className="flex flex-col gap-[2px] border w-fit">
              <li
                className="flex items-center gap-[7px] text-[17px] cursor-pointer transition-all hover:bg-gray-200 w-52 h-14 px-4"
                onClick={() => setSelectedOption("stock")}
              >
                <MdInventory className="text-[18px]" />
                Stock
              </li>
              <li
                className="flex items-center gap-[7px] text-[17px] cursor-pointer transition-all hover:bg-gray-200 w-52 h-14 px-4"
                onClick={() => setSelectedOption("color")}
              >
                <RiColorFilterAiLine className="text-[18px]" />
                Colors
              </li>
              <li
                className="flex items-center gap-[7px] text-[17px] cursor-pointer transition-all hover:bg-gray-200 w-52 h-14 px-4"
                onClick={() => setSelectedOption("shipping")}
              >
                <GrCurrency className="text-[18px]" />
                Payment
              </li>
            </ul>

            <div className="border w-full p-5">
              <div
                className={`grid gap-1 ${selectedOption == "stock" ? "block" : "hidden"
                  }`}
              >
                <label htmlFor="" className="font-medium">
                  Stock
                </label>
                <input
                  type="number"
                  className="border border-gray-400 w-[80%] rounded-md py-2 px-3"
                  placeholder="e.g: 1000"
                  {...register("stock")}
                  required
                />
              </div>

              <div
                className={`grid gap-1 ${selectedOption == "color" ? "block" : "hidden"
                  }`}
              >
                <div>
                  <label htmlFor="" className="font-medium">
                    Colors
                  </label>
                  <ul className="grid grid-cols-2 border border-gray-300 mt-[6px] py-2 px-1 rounded-md transition-all hover:h-fit w-fit overflow-hidden">
                    <li className="p-2 w-32 flex gap-2">
                      <input
                        type="checkbox"
                        {...register("color")}
                        value={"black"}
                        className="cursor-pointer"
                        id="p-clr-black"
                      />
                      <label htmlFor="p-clr-black" className="cursor-pointer">
                        Black
                      </label>
                    </li>
                    <li className="p-2 w-32 flex gap-2">
                      <input
                        type="checkbox"
                        {...register("color")}
                        value={"white"}
                        className="cursor-pointer"
                        id="p-clr-white"
                      />
                      <label htmlFor="p-clr-white" className="cursor-pointer">
                        White
                      </label>
                    </li>
                    <li className="p-2 w-32 flex gap-2">
                      <input
                        type="checkbox"
                        {...register("color")}
                        value={"brown"}
                        className="cursor-pointer"
                        id="p-clr-brown"
                      />
                      <label htmlFor="p-clr-brown" className="cursor-pointer">
                        Brown
                      </label>
                    </li>
                    <li className="p-2 w-32 flex gap-2">
                      <input
                        type="checkbox"
                        {...register("color")}
                        value={"blue"}
                        className="cursor-pointer"
                        id="p-clr-blue"
                      />
                      <label htmlFor="p-clr-blue" className="cursor-pointer">
                        Blue
                      </label>
                    </li>
                    <li className="p-2 w-32 flex gap-2">
                      <input
                        type="checkbox"
                        {...register("color")}
                        value={"silver"}
                        className="cursor-pointer"
                        id="p-clr-silver"
                      />
                      <label htmlFor="p-clr-silver" className="cursor-pointer">
                        Silver
                      </label>
                    </li>
                    <li className="p-2 w-32 flex gap-2">
                      <input
                        type="checkbox"
                        {...register("color")}
                        value={"red"}
                        className="cursor-pointer"
                        id="p-clr-red"
                      />
                      <label htmlFor="p-clr-red" className="cursor-pointer">
                        Red
                      </label>
                    </li>
                    <li className="p-2 w-32 flex gap-2">
                      <input
                        type="checkbox"
                        {...register("color")}
                        value={"purple"}
                        className="cursor-pointer"
                        id="p-clr-purple"
                      />
                      <label htmlFor="p-clr-purple" className="cursor-pointer">
                        Purple
                      </label>
                    </li>
                    <li className="p-2 w-32 flex gap-2">
                      <input
                        type="checkbox"
                        {...register("color")}
                        value={"orange"}
                        className="cursor-pointer"
                        id="p-clr-orange"
                      />
                      <label htmlFor="p-clr-orange" className="cursor-pointer">
                        Orange
                      </label>
                    </li>
                    <li className="p-2 w-32 flex gap-2">
                      <input
                        type="checkbox"
                        {...register("color")}
                        value={"pink"}
                        className="cursor-pointer"
                        id="p-clr-pink"
                      />
                      <label htmlFor="p-clr-pink" className="cursor-pointer">
                        Pink
                      </label>
                    </li>

                    {customColors.map((color, index) => (
                      <li key={index} className="p-2 w-32 flex gap-2">
                        <input
                          type="checkbox"
                          id={`p-clr-${index}`}
                          value={color}
                          {...register("color")}
                          className="cursor-pointer"
                        />
                        <label
                          htmlFor={`p-clr-${index}`}
                          className="cursor-pointer"
                        >
                          {color}
                        </label>
                      </li>
                    ))}
                  </ul>

                  <div className="grid pt-3 pb-2 gap-1">
                    <label htmlFor="" className="font-medium">
                      Other
                    </label>
                    <div className="flex gap-[6px]">
                      <input
                        type="text"
                        className="w-32 border border-black rounded-md py-1 px-2"
                        value={newColor}
                        placeholder="e.g: indigo"
                        onChange={(e) => setNewColor(e.target.value)}
                      />
                      <button
                        type="button"
                        className="border bg-slate-800 text-white rounded-md w-fit py-2 px-5"
                        onClick={handleAddColor}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`grid gap-1 ${selectedOption == "shipping" ? "block" : "hidden"
                  }`}
              >
                <div className="grid">
                  <label htmlFor="" className="font-medium text-[18px]">
                    Payment Options
                  </label>
                  <div className="flex gap-2 mt-3">
                    <input
                      type="checkbox"
                      id="cod"
                      className="cursor-pointer"
                      value={"cash-on-delivery"}
                      {...register("payment_method")}
                    />
                    <label
                      htmlFor="cod"
                      title="Cash on Delivery"
                      className="cursor-pointer"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <input
                      type="checkbox"
                      id="credit-card"
                      className="cursor-pointer"
                      value={"credit-card"}
                      {...register("payment_method")}
                    />
                    <label
                      htmlFor="credit-card"
                      title="Credit Card"
                      className="cursor-pointer"
                    >
                      Credit Card
                    </label>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <input
                      type="checkbox"
                      id="debit-card"
                      value={"debit-card"}
                      className="cursor-pointer"
                      {...register("payment_method")}
                    />
                    <label
                      htmlFor="debit-card"
                      title="Debit Card"
                      className="cursor-pointer"
                    >
                      Debit Card
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <button
            type="submit"
            className="w-full bg-slate-800 text-white p-[10px] rounded-lg hover:bg-slate-900 transition-all"
          >
            Add Product
          </button>

          {message ? <span>{message}</span> : null}
        </div>
      </Form>
    </div>
  );
}