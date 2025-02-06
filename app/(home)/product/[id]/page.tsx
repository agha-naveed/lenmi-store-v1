'use client'

import { useState, useRef, useEffect, useInsertionEffect } from 'react';
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import clothes from '@/images/clothes_render.png'
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import axios from 'axios';
import { useParams } from 'next/navigation';

export default function page() {

  
  const param = useParams()
  const [fetchData, setFetchData] = useState<any>({})
  const [images, setImages] = useState<string[]>([])
  const [selectImage, setSelectImages] = useState<number>(0)
  
  const [showMore, setShowMore] = useState<boolean>(false)
  
  useInsertionEffect(() => {
    const gettingData = async () => {
      const res = await axios.get(`/product/${param.id}/api`)
      let datas = await res.data.data
      if(res.status === 200) {
        setFetchData(await datas)
        setImages(datas.imgURL)
      }
      else {
        console.log("Nhi")
      }
      
    }
    gettingData()
  }, [])


  const [quantity, setQuantity] = useState(1)
  const [zoom, setZoom] = useState<number>(1);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const imageRef = useRef<HTMLImageElement>(null);


  const handleMouseMove = (event: any) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / 1.3;
    const mouseY = event.clientY - rect.top;
    const zoomLevel = 1.4;

    setZoom(zoomLevel);
    setOffset({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };


  return (
    <section className='container mx-auto grid xl:grid-cols-[auto_auto] grid-col-[auto] py-10 sm:px-0 px-4 xl:justify-between justify-center justify-items-center gap-4'>

      <div className='grid gap-10'>
        <div className='md:flex grid sm:border xl:border-transparent rounded-xl md:border-black md:w-full w-fit h-fit xl:gap-5 gap-3 justify-items-center'>
          
          <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='md:w-[400px] md:h-[400px] w-[300px] h-auto p-3 overflow-hidden cursor-pointer border border-gray-400 rounded-xl'>
            {
              images[selectImage] && images[selectImage].trim() !== "" ?
                <img ref={imageRef}
                src={images[selectImage]}
                alt='Jacket' style={{transform: `scale(${zoom})`, transformOrigin: `${offset.x}px ${offset.y}px`, transition: 'tranform 0.3s ease-out'}} width={1000} height={1000} className='w-full h-full object-contain' />
              : <h2>Loading...</h2>
            }
          </div>

          <div className='sm:w-fit sm:p-6 p-2 h-auto w-[90%]'>
            
            <h2 className='font-opensans font-semibold text-2xl'>{fetchData?.name}</h2>

            <div className='mt-3 mb-5 flex flex-col gap-1'>
              <div className='flex gap-3'>
                <div className='flex gap-1 items-center'>
                  <span>Rating:</span>
                  <span className='flex text-orangeClr'>
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                  </span>
                </div>
                <div>|</div>
                <div className='font-opensans'>
                  10000+ Sold
                </div>
              </div>

              <div className='flex gap-1 font-opensans items-center'>
                Category:
                <span className='font-semibold text-orangeClr'>{fetchData?.category}</span>
              </div>
            </div>

            <div className='flex gap-[6px] my-2 items-end'>
              <span className='font-opensans font-bold text-[32px]'>PKR {fetchData?.price}</span>
              <span className='text-gray-700 line-through relative bottom-[6px]'>PKR 999</span>
            </div>

            <div className='grid'>
              <span className='my-2'>Color: Black</span>
              <div className='flex gap-1'>
                {
                  images ?
                  <>
                    {
                      images.map((image, index) => {
                        return (
                          <div key={`product-small-image-${index}`} className='w-[70px] h-[70px] cursor-pointer border p-[3px]' onClick={() => {
                            setSelectImages(index)
                          }}>
                            <Image src={image} alt='' width={200} height={200} className='w-full h-full object-cover' />
                          </div>
                        )
                      })
                    }
                  </>
                  :
                  <span> Loading... </span>
                }
              </div>
            </div>

          </div>

        </div>
        
        <div className='grid gap-2 relative lg:place-self-start place-self-center'>
          <span className='text-xl font-semibold'>Description:</span>
          <div className={`xl:w-[880px] w-[92vw] pb-5 ${showMore ? "h-auto" : "h-[400px]"} overflow-hidden border border-black rounded-md`} dangerouslySetInnerHTML={{ __html: fetchData.description }} />
          <button
            className='animate-up_down absolute bottom-[6px] bg-slate-800 hover:bg-slate-900 transition-all left-1/2 w-fit rounded-full flex py-2 sm:px-[18px] px-3 justify-center items-center gap-1 text-white'
            onClick={() => setShowMore(!showMore)}
            title={`${showMore ? "Click to Collapse" : "Click to show full details"}`}
            >
            <IoIosArrowDown className={`text-[15px] ${showMore ? "rotate-[180deg]" : ""}`} />
            <span>{showMore ? "Show Less" : "Show More"}</span>
          </button>
        </div>
      </div>

      <div className='font-opensans xl:w-[370px] w-full h-fit border border-black rounded-lg'>

        <div className='flex items-center justify-between sm:w-full w-[80%] py-3 px-4'>
          <span className='font-semibold text-[15px]'>Ship to</span>
          <span className='flex gap-[2px] items-center font-medium text-[15px]'>
            <MdLocationOn />
            Pakistan
          </span>
        </div>

        <div className='xl:grid sm:flex grid w-full'>
          <div className='w-full'>
            <div className='w-full text-center p-2 h-14 bg-gradient-to-t from-transparent to-lightPeachClr'>
              <span className='text-[15px] font-bold tracking-[-1px]'>Lenmi Store Commitment</span>
            </div>

            <div className='grid gap-1'>
              <Link href={""} className='flex px-8 justify-between items-center py-3' title='Delivery Details'>
                <div className='grid gap-1'>
                  <span className='font-bold text-[15px] text-black tracking-[-1px]'>
                    Free Shipping
                  </span>
                  <span className='text-gray-600'>
                    Delivery: <span className='font-bold text-black'>Aug 29 - Sep 04</span>
                  </span>
                </div>
                <span><IoIosArrowForward /></span>
              </Link>

              <div className='grid gap-[6px] px-8 py-3'>
                <h5 className='text-black font-bold text-[16px] tracking-[-1px]'>Security & Privacy</h5>
                <p className='text-gray-600 font-normal text-[12px] text-justify'>Safe payments: we do not share your personal details with any third parties without your consent. Secure personal details: We protect your privacy and keep your personal details safe and secure.</p>
              </div>
              <div className='px-4'>
                <div className='w-full h-[1px] border-b-2 border-b-gray-300'></div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='px-4 py-3'>
              <span className='font-bold'>Quantity</span>
              <div>
                <button className={`px-1 py-[6px] w-9 text-[22px] ${quantity == 1 ? "text-gray-400" : "text-black"}`} onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>-</button>
                <input className='p-1 font-medium text-center' type="number" placeholder='1' readOnly value={quantity} min={1} max={10} />
                <button className='p-[6px] w-9 text-[22px]' onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            
            <div className='grid p-4 gap-2'>
              <button className='h-11 bg-slate-800 transition-all hover:bg-slate-900 text-white font-bold rounded-3xl'>Buy Now</button>
              <button className='h-11 bg-slate-300 text-slate-800 transition-all hover:border hover:border-slate-800 hover:bg-transparent font-bold rounded-3xl'>Add to cart</button>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}