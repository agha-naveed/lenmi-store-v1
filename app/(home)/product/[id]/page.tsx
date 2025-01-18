'use client'

import { useState, useRef } from 'react';
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

export default function page() {

  const [quantity, setQuantity] = useState(1)
  const [zoom, setZoom] = useState<number>(1);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const imageRef = useRef<HTMLImageElement>(null);


  const handleMouseMove = (event: any) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const zoomLevel = 1.3;

    setZoom(zoomLevel);
    setOffset({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };


  return (
    <section className='container mx-auto grid xl:grid-cols-[auto_auto] grid-col-[auto] py-10 xl:justify-between justify-center justify-items-center gap-5'>

      <div className='md:flex grid border xl:border-transparent rounded-xl border-black xl:w-full w-fit h-fit xl:gap-5 gap-3'>
        
        <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='w-[400px] h-[400px] p-3 overflow-hidden cursor-pointer border border-gray-400 rounded-xl'>
          <Image ref={imageRef} src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' style={{transform: `scale(${zoom})`, transformOrigin: `${offset.x}px ${offset.y}px`, transition: 'tranform 0.2s ease-out'}} width={200} height={200} className='w-full h-full object-contain' />
        </div>

        <div className='w-fit p-6 h-auto'>
          <h2 className='font-opensans font-semibold text-2xl'>Mens Cotton Jacket</h2>
          
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
              <span className='font-semibold text-orangeClr'>Men's Clothing</span>
            </div>
          </div>

          <div className='flex gap-[6px] my-2 items-end'>
            <span className='font-opensans font-bold text-[32px]'>PKR 55.99</span>
            <span className='text-gray-700 line-through relative bottom-[6px]'>PKR 999</span>
          </div>

          <div className='grid'>
            <span className='my-2'>Color: Black</span>
            <div className='flex gap-1'>
              <div className='w-[70px] h-[70px] cursor-pointer border p-[3px]'>
                <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
              </div>
              <div className='w-[70px] h-[70px] cursor-pointer border border-gray-300 p-[3px]'>
                <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
              </div>
              <div className='w-[70px] h-[70px] cursor-pointer border border-gray-300 p-[3px]'>
                <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
              </div>
              <div className='w-[70px] h-[70px] cursor-pointer border border-gray-300 p-[3px]'>
                <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
              </div>
            </div>
          </div>

        </div>

      </div>


      <div className='font-opensans w-[370px] h-fit border border-black rounded-lg'>
        <div className='flex items-center justify-between  py-3 px-4'>
          <span className='font-semibold text-[15px]'>Ship to</span>
          <span className='flex gap-[2px] items-center font-medium text-[15px]'>
            <MdLocationOn />
            Pakistan
          </span>
        </div>

        <div className='md:flex'>
          <div>
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

          <div>
            <div className='px-4 py-3'>
              <span className='font-bold'>Quantity</span>
              <div>
                <button className='px-1 py-[6px] w-9 text-[22px]' onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>-</button>
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