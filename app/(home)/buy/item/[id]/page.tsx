'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { GoStarFill } from "react-icons/go";
import Link from 'next/link'
import Image from 'next/image'

export default function page() {
  
  let param = useParams()

  const [productData, setProductData] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/buy/item/${param.id}/api`)
      console.log(res.data.data)

      if(res.status == 200) {
        setProductData(await res.data.data)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='w-full h-full rounded-2xl shadow-xl bg-white'>
                <div className='md:p-7 p-2'>
                    {/* <table className='w-full'>
                        <thead>
                            <tr className='font-semibold'>
                                <th className='text-start'>Products</th>
                                <th className='text-center md:table-cell hidden'>Price</th>
                                <th className='text-center md:table-cell hidden'>Quantity</th>
                                <th className='text-center md:table-cell hidden'>Total Price</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                              
                              <tr
                                className={`relative`}
                              >
                                  
                                  <td>
                                      <Link href={""} title={productData.name} className='cursor-pointer flex items-center sm:gap-4 gap-2 py-5 group'>
                                          <span className='flex rounded-xl !h-fit p-1 sm:!w-[220px] w-[190px] overflow-hidden'>
                                              <Image src={productData.imgURL[0]} className='w-full h-full object-cover' alt='pikachu' width={100} height={100} />

                                          </span>
                                          <span className='w-full'>
                                              <h2 className='font-semibold tracking-[-1px] md:w-[60%] w-full line-clamp-2 my-2 sm:text-[16px] text-[15px] transition-all group-hover:text-orangeClr'>
                                                  {productData.name}
                                              </h2>


                                              <p className='sm:text-[15px] text-[13px] mt-[10px]'>Color: <span className='font-semibold'>Black</span></p>
                                              <p className='sm:text-[15px] text-[13px]'>Category: <span className='font-semibold'>{productData.category}</span></p>


                                              <span className='text-[13px] items-center gap-2 py-3 md:flex hidden'>
                                                  <div className='flex'>
                                                      <GoStarFill />
                                                      <GoStarFill />
                                                      <GoStarFill />
                                                      <GoStarFill />
                                                      <GoStarFill />
                                                  </div>
                                                  <p className='text-gray-600  content-center'>10000+ sold</p>
                                              </span>

                                              <span className='md:hidden block mt-1'>
                                                  <h5 className='font-medium'>
                                                      <span className='text-[15px]'> Price: </span>
                                                      <span className='font-bold text-[17px] text-orangeClr'>PKR {productData.price}</span>
                                                  </h5>
                                              </span>
                                          </span>
                                      </Link>
                                  </td>

                                  <td className='p-5 text-center md:table-cell hidden'>
                                      <span className='content-center'>
                                          <h3 className='font-bold'>{productData.price}</h3>
                                      </span>
                                  </td>

                                  <td className='p-5 text-center md:table-cell hidden'>
                                      <span className='content-center'>
                                          <h3 className='font-bold'>{productData.price}</h3>
                                      </span>
                                  </td>
                                  
                              </tr>

                            }    
                            
                        </tbody>

                    </table>
                     */}
                </div>


            </div>
    </div>
  )
}