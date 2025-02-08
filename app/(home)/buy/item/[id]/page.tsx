"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useParams } from "next/navigation";
import { GoStarFill } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  let param = useParams();

  const [productDetails, setProductDetails] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/buy/item/${param.id}/api`);

        if (res.status == 200) {
            setProductDetails(await res.data.data);
        }
        if(res.data.message != "done") {
            redirect("/")
        }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto font-opensans">
        
      <div className="w-full h-full rounded-2xl shadow-xl bg-white">
        <div className="md:p-7 p-2">
          <table className="w-full">
            <thead>
              <tr className="font-semibold">
                <th className="text-start">Product</th>
                <th className="text-center md:table-cell hidden">Price</th>
                <th className="text-center md:table-cell hidden">Quantity</th>
                <th className="text-center md:table-cell hidden">
                  Total Price
                </th>
              </tr>
            </thead>

            <tbody>
                {
                    productDetails ? 
                    <tr className={`relative`}>
                        <td>
                            <Link
                            href={""}
                            title={productDetails.productData.name}
                            className="cursor-pointer flex items-center sm:gap-4 gap-2 py-5 group"
                            >
                                <span className="flex rounded-xl !h-fit p-1 sm:!w-[220px] w-[190px] overflow-hidden">
                                    <Image
                                    src={productDetails.productData.imgURL[0]}
                                    className="w-full h-full object-cover"
                                    alt="pikachu"
                                    width={400}
                                    height={400}
                                    />
                                </span>
                                <span className="w-full">
                                    <h2 className="font-semibold tracking-[-1px] md:w-[60%] w-full line-clamp-2 my-2 sm:text-[16px] text-[15px] transition-all group-hover:text-orangeClr">
                                    {productDetails.productData.name}
                                    </h2>

                                    <p className="sm:text-[15px] text-[13px] mt-[10px]">
                                    Color: <span className="font-semibold">Black</span>
                                    </p>
                                    <p className="sm:text-[15px] text-[13px]">
                                    Category:{" "}
                                    <span className="font-semibold">
                                        {productDetails.productData.category}
                                    </span>
                                    </p>

                                    <span className="text-[13px] items-center gap-2 py-3 md:flex hidden">
                                    <div className="flex">
                                        <GoStarFill />
                                        <GoStarFill />
                                        <GoStarFill />
                                        <GoStarFill />
                                        <GoStarFill />
                                    </div>
                                    <p className="text-gray-600  content-center">
                                        10000+ sold
                                    </p>
                                    </span>

                                    <span className="md:hidden block mt-1">
                                    <h5 className="font-medium">
                                        <span className="text-[15px]"> Price: </span>
                                        <span className="font-bold text-[17px] text-orangeClr">
                                        PKR {productDetails.productData.price}
                                        </span>
                                    </h5>
                                    </span>
                                </span>
                            </Link>
                        </td>

                        <td className="p-5 text-center md:table-cell hidden">
                            <span className="content-center">
                            <h3 className="font-bold">{productDetails.productData.price}</h3>
                            </span>
                        </td>

                        <td className="p-5 text-center md:table-cell hidden">
                            <span className="content-center">
                            <h3 className="font-bold">{productDetails.itemQuantity}</h3>
                            </span>
                        </td>
                        
                        <td className="p-5 text-center md:table-cell hidden">
                            <span className="content-center">
                            <h3 className="font-bold">{(productDetails.itemQuantity) * (productDetails.productData.price)}</h3>
                            </span>
                        </td>
                    </tr>
                    :
                    <tr><td>Loading...</td></tr>
                }
            </tbody>

          </table>
        </div>
      </div>

      <section>
            <div className="w-full h-full mt-5 rounded-2xl shadow-xl bg-white md:p-7 p-2">
                <h4 className="mb-5 text-[18px] font-semibold">Delivery Details</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="grid gap-1">
                      <label htmlFor="">Recipient's Name</label>
                      <input type="text" className="border h-9 px-3 rounded-lg" />
                  </div>

                  <div className="grid gap-1">
                      <label htmlFor="">Phone Number</label>
                      <input type="number" min={11} className="border h-9 px-3 rounded-lg" />
                  </div>

                  <div className="grid w-44">
                    <label htmlFor="">District</label>
                    <select name="" id="" className="h-9 p-2">
                        <option value="">-- select --</option>
                        <option value="Ghanche">Ghanche</option>
                        <option value="Rondu">Rondu</option>
                        <option value="Shigar">Shigar</option>
                        <option value="Kharmang">Kharmang</option>
                        <option value="Gilgit">Gilgit</option>
                        <option value="Astore">Astore</option>
                        <option value="Ghizer">Ghizer</option>
                        <option value="Nagar">Nagar</option>
                        <option value="Hunza">Hunza</option>
                    </select>
                  </div>    
                </div>

                <div>
                  <label htmlFor="">Full Address</label>
                  <textarea name="" id=""></textarea>
                </div>

            </div>
        </section>

    </div>
  );
}
