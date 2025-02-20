'use client'

import { useState, useRef, useEffect, useInsertionEffect, ChangeEvent } from 'react';
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowDown, IoIosStar } from "react-icons/io";
import Link from 'next/link';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useCart } from '@/app/components/CartProvider';
import { IoClose, IoCloseCircle } from "react-icons/io5";
import jethalal from '@/images/jethalal.jpeg'
import ProductReviews from '@/app/components/ProductReviews';

export default function page() {

  const param = useParams()
  

  // --------- Review ---------

  // ---------- Review Image -------------


  let [selectedImage, setSelectedImage] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);



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


  let [btnVisible, setBtnVisible] = useState<boolean>(false)
  let [fetchReviews, setFetchReviews] = useState<any>([])
  
  let [rating, setRating] = useState(0)
  let [ratingClicked, setRatingClicked] = useState(0)
  
  let txtAreaRef = useRef<any>(null)

  async function onSubmit() {

    let data = txtAreaRef.current?.value

    try {
      const checkDuplication = await axios.post(`/product/${param.id}/api`)


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


    // ---------- Review Image Ended -------------

      try {
        const res = await axios.patch(`/product/${param.id}/api`, {data, rating: ratingClicked, images: uploadedUrls})
      }
      catch(err) {
        alert("Only one Review per Product")
      }
    } catch(err) {
      alert("Duplicate Entry")
    }
  }

  // --------- Review Ended ---------

  function checkHeight() {
    let h_desc = document.getElementById("description_h")
    if(h_desc) {
      if(h_desc?.offsetHeight < 400) {
        setBtnVisible(false)
      }
      else {
        setBtnVisible(true)
      }
    }
  }
  

  const { length, setLength } = useCart()

  const [openReview, setOpenReview] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [dp, setDp] = useState<any>()

  const [quantity, setQuantity] = useState(1)
  
  const [fetchData, setFetchData] = useState<any>({})
  const [images, setImages] = useState<string[]>([])
  const [selectImage, setSelectImages] = useState<number>(0)
  
  const [showMore, setShowMore] = useState<boolean>(false)
  
  useInsertionEffect(() => {
    const gettingData = async () => {
      const res = await axios.get(`/product/${param.id}/api`)
      let datas = await res.data.data
      
      if(res.status === 200) {
        setDp(await res.data.userData)
        setFetchData(await datas)
        setImages(datas.imgURL)
        setIsLogin(await res.data.login)
        setFetchReviews(await res.data.reviews)
      }
      else {
        console.log("Nhi")
      }
      
    }
    gettingData()
  }, [])

  useEffect(() => {
    checkHeight()
  }, [fetchData])


  const postData = async () => {
    let sendDetail = {
      id: fetchData._id,
      quantity
    }
    const data = await axios.post(`/cart/api`, sendDetail)
    setLength(length + 1)
  }


  const [zoom, setZoom] = useState<number>(1);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const imageRef = useRef<HTMLImageElement>(null);


  const handleMouseMove = (event: any) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / 1.3;
    const mouseY = event.clientY - rect.top;
    const zoomLevel = 1.35;

    setZoom(zoomLevel);
    setOffset({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };


  return (
    <div>
      <section className='container mx-auto grid xl:grid-cols-[auto_auto] grid-col-[auto] py-10 sm:px-0 px-4 xl:justify-between justify-center justify-items-center gap-4'>

        {/* Product Details */}
        <div className='grid gap-10'>
          <div className='md:flex grid sm:border xl:border-transparent rounded-xl md:border-black md:w-full w-fit h-fit xl:gap-5 gap-3 justify-items-center'>
            
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='md:w-[400px] md:h-[400px] w-[300px] h-auto overflow-hidden cursor-pointer border border-gray-400 rounded-xl'>
              {
                images[selectImage] && images[selectImage].trim() !== "" ?
                  <img ref={imageRef}
                  src={images[selectImage]}
                  alt='Jacket' style={{transform: `scale(${zoom})`, transformOrigin: `${offset.x}px ${offset.y}px`, transition: 'tranform 0.3s ease-out'}} width={500} height={500} className='w-full h-full object-contain' />
                : <h2 className='h-full w-full flex justify-center items-center'>Loading...</h2>
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
                            <div key={`product-small-image-${index}`} className={`w-[70px] h-[70px] cursor-pointer border p-[3px] ${selectImage == index ? "border-black" : ""}`} onClick={() => {
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
            <div id='description_h' className={`xl:w-[880px] w-[92vw] px-5 pt-4 pb-5 ${showMore ? "h-auto" : "max-h-[400px] h-fit"} overflow-hidden border border-black rounded-md`} dangerouslySetInnerHTML={{ __html: fetchData.description }} />
            <button
              className={`animate-up_down absolute bottom-[6px] bg-slate-800 hover:bg-slate-900 transition-all left-1/2 w-fit rounded-full flex py-2 sm:px-[18px] px-3 justify-center items-center gap-1 text-white ${btnVisible ? "block" : "hidden"}`}
              onClick={() => setShowMore(!showMore)}
              title={`${showMore ? "Click to Collapse" : "Click to show full details"}`}
              >
              <IoIosArrowDown className={`text-[15px] ${showMore ? "rotate-[180deg]" : ""}`} />
              <span>{showMore ? "Show Less" : "Show More"}</span>
            </button>
          </div>
        </div>

        {/* Side Buy & Shipping Detail */}
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
                <button
                  className='h-11 bg-slate-300 text-slate-800 transition-all hover:border hover:border-slate-800 hover:bg-transparent font-bold rounded-3xl'
                  onClick={() => postData()}
                >
                  Add to cart</button>
              </div>
            </div>
          </div>

        </div>


        {/* Review */}
        <section className='justify-self-start'>
          <div>
            <button className='py-2 px-6 bg-slate-400 rounded-full' onClick={() => setOpenReview(true)}>
              Add a Review
            </button>


            
            <div className={`w-full h-full bg-zinc-800/50 backdrop-blur-[5px] fixed top-0 left-0 z-[200]
              ${openReview ? "block" : "hidden"}`}>
              <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                
                
                <div className={`md:w-[550px] w-[90vmin] h-fit bg-white shadow-xl rounded-lg p-4 font-opensans flex flex-col gap-3 overflow-hidden`}>
                  <div className='flex justify-between items-center'>
                      <button className='w-7 h-7 flex justify-center items-center text-xl rounded-full' title='Cancel' onClick={() => setOpenReview(false)}>
                          <IoClose />
                      </button>

                      <span className='font-semibold content-center'>Product Review</span>

                      <button className='bg-slate-800 transition-all text-white px-4 py-1 rounded-full hover:bg-slate-900' title='Post your Review' onClick={() => onSubmit()}>Post</button>
                  </div>

                  <div className='flex gap-4'>
                      <div className='w-14 h-14 rounded-full overflow-hidden'>
                          {
                            dp ?
                            <Image src={dp?.profile_pic}
                                alt='DP'
                                className='w-full
                                    h-full
                                    object-cover
                                '
                                width={200}
                                height={200}
                            />
                            :
                            <Image src={jethalal}
                              alt='DP'
                              className='w-full
                                  h-full
                                  object-cover
                            '/>
                          }
                      </div>
                      <div className='grid self-center'>
                          <span className='font-semibold text-[18px] h-[25px]'>{dp?.first_name} {dp?.last_name}</span>
                          <p className='text-[15px] text-zinc-800 h-[20px] font-medium cursor-pointer' title='Your Review will be display Publicly'>
                              Posting Publicly
                              <span className='ml-1 text-[14px] font-semibold relative -top-[1px]'>ⓘ</span>
                          </p>
                      </div>
                  </div>

                  <div className='w-full mb-2 justify-center flex md:gap-6 gap-3 sm:text-4xl text-[27px] md:px-10 px-4 text-zinc-700'>
                      
                      <IoIosStar
                          className={`
                              cursor-pointer
                              ${ratingClicked >= 1 ? "text-orangeClr" : ""}
                              ${rating > 0 && rating <=5 ? "text-orangeClr" : ""}
                          `}
                          onMouseOver={() => setRating(1)} 
                          onMouseLeave={() => setRating(0)}
                          onClick={() => setRatingClicked(1)}
                      />
                      
                      <IoIosStar
                          className={`
                              cursor-pointer
                              ${ratingClicked >= 2 ? "text-orangeClr" : ""}
                              ${rating > 1 && rating <=5 ? "text-orangeClr" : ""}
                          `}
                          onMouseOver={() => setRating(2)} 
                          onMouseLeave={() => setRating(0)}
                          onClick={() => setRatingClicked(2)}
                      />
                      
                      <IoIosStar
                          className={`
                              cursor-pointer
                              ${ratingClicked >= 3 ? "text-orangeClr" : ""}
                              ${rating > 2 && rating <=5 ? "text-orangeClr" : ""}
                          `}
                          onMouseOver={() => setRating(3)} 
                          onMouseLeave={() => setRating(0)}
                          onClick={() => setRatingClicked(3)}
                      />
                      
                      <IoIosStar
                          className={`
                              cursor-pointer
                              ${ratingClicked >= 4 ? "text-orangeClr" : ""}
                              ${rating > 3 && rating <=5 ? "text-orangeClr" : ""}
                          `}
                          onMouseOver={() => setRating(4)} 
                          onMouseLeave={() => setRating(0)}
                          onClick={() => setRatingClicked(4)}
                      />
                      
                      <IoIosStar
                          className={`
                              cursor-pointer
                              ${ratingClicked >= 5 ? "text-orangeClr" : ""}
                              ${rating > 4 && rating <=5 ? "text-orangeClr" : ""}
                          `}
                          onMouseOver={() => setRating(5)} 
                          onMouseLeave={() => setRating(0)}
                          onClick={() => setRatingClicked(5)}
                      />
                      
                  </div>

                  <textarea className='review-txtarea border-t w-full h-[155px] resize-none rounded-[8px] py-2 px-3 outline-none' ref={txtAreaRef} placeholder='How was the product?'></textarea>
                  
                  <div className='h-fit content-end grid gap-2'>
                    <div className='flex gap-2'>
                      {selectedImage.map((imgs, index) => (
                        <div
                          key={`${imgs}-${index}`}
                          className="flex justify-center items-center w-[100px] h-[100px] border border-gray-500 rounded-lg overflow-hidden relative"
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
                    </div>
                    
                    <label htmlFor="review-img" className='cursor-pointer border border-slate-800 text-slate-800 w-fit py-[6px] px-3 rounded-full'>
                      Add Photo
                      <input type="file"
                        name=""
                        className='hidden'
                        id="review-img"
                        accept="image/*"
                        disabled={selectedImage.length === 3}
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>


              </div>
            </div>

          </div>

        </section>

      </section>


      
      <div className='w-full py-5 border-r'>
        {
          fetchReviews.map((item:any, index:number) => {
            return (
              <ProductReviews key={`product-review-${index}`} data={item} />
            )
          })
        }
      </div>


    </div>
  )
}