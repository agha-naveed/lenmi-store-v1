"use client";

import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import ProductCard from "@/app/components/products-cards/ProductCard";
import { CiFilter } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { useSearchQuery } from "@/app/components/SearchContext";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";


export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { query, setQuery } = useSearchQuery();
  const [toggleFilter, setToggleFilter] = useState(false);

  // ✅ Extract Filters from URL
  const [category, setCategory] = useState(searchParams.get("category") || "");
  // const [shippedOverseas, setShippedOverseas] = useState(
  //   searchParams.get("shippedOverseas") === "true"
  // );
  // const [minPrice, setMinPrice] = useState(
  //   Number(searchParams.get("minPrice")) || 0
  // );
  // const [maxPrice, setMaxPrice] = useState(
  //   Number(searchParams.get("maxPrice")) || 0
  // );
  // const [rating, setRating] = useState(Number(searchParams.get("rating")) || 0);
  const [warrantyType, setWarrantyType] = useState(
    searchParams.get("warrantyType") || ""
  );
  
  const [color, setColor] = useState(searchParams.get("color") || "");

  // ✅ Update URL When Filters Change
  const updateFilters = (key: string, value: string | number | boolean) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value.toString());
    } else {
      params.delete(key);
    }

    router.push(`/product-search?${params.toString()}`);
  };

  // ✅ Fetch Data Based on Query Parameters
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/product-search/api/?${searchParams.toString()}`);
      setQuery(await res.data.data);
      console.log("searchquery: "+JSON.stringify(await res.data.data))
    };

    fetchData();
  }, [searchParams]);
  

  return (
    <>
      <div className="container mx-auto py-3 md:flex grid md:gap-14 gap-5 font-opensans">
        <button
          onClick={() => setToggleFilter(!toggleFilter)}
          className="md:hidden w-fit text-white px-4 py-2 rounded-3xl bg-slate-800 flex gap-1 ml-2"
        >
          <CiFilter className="text-2xl" />
          <span>Filter</span>
        </button>

        {/* 🏷️ Sidebar Filters */}
        <aside
          className={`p-3 md:w-[250px] sm:w-[70%] w-full md:h-auto transition-all ${
            toggleFilter ? "left-0" : "left-[-100%]"
          } md:shadow-none shadow-xl shadow-black min-h-screen flex flex-col md:relative md:left-0 fixed top-0 bg-white z-30 select-none`}
        >
          <IoMdCloseCircle
            onClick={() => setToggleFilter(!toggleFilter)}
            className="absolute right-2 md:hidden block text-3xl"
          />

          {/* 📌 Category */}
          <div className="grid gap-1 py-5 border-t-2">
            <span className="font-semibold">Category</span>
            <select
              value={category}
              onChange={(e) => {
                updateFilters("category", e.target.value);
                setCategory(e.target.value)
              }}
              className="bg-transparent cursor-pointer border-none outline-none text-gray-600 text-[14px]"
            >
              <option value="all" defaultChecked>All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="grocery">Grocery</option>
              <option value="fashion">Fashion</option>
            </select>
          </div>

          {/* 🚚 Shipped Overseas */}
          <div className="grid gap-1 py-5 border-t-2">
            <span className="font-semibold">Shipped From</span>
            <div className="text-gray-600 flex cursor-pointer text-[14px] w-fit">
              <input
                id="shipping-overseas"
                type="checkbox"
                onChange={(e) => updateFilters("shippedOverseas", e.target.checked)}
              />
              <label htmlFor="shipping-overseas" className="ml-2 cursor-pointer">Overseas</label>
            </div>
          </div>

          {/* 💰 Price */}
          <div className="grid gap-1 py-5 border-t-2">
            <span className="font-semibold">Price</span>
            <div className="text-gray-600 flex gap-2 cursor-pointer font-medium mt-1 text-[14px] w-fit">

              <input
                type="number"
                // value={minPrice}
                onChange={(e) => updateFilters("minPrice", Number(e.target.value))}
                className="border border-gray-600 rounded-md w-20 px-2 py-[6px]"
                min={0}
                placeholder="Min"
              />
              <span className="text-xl content-center text-gray-600">-</span>
              <input
                type="number"
                // value={maxPrice}
                onChange={(e) => updateFilters("maxPrice", Number(e.target.value))}
                className="border border-gray-600 rounded-md w-20 px-2 py-[6px]"
                min={0}
                placeholder="Max"
              />
            </div>
          </div>

          {/* ⭐ Rating */}
          <div className="grid gap-1 py-5 border-t-2">
            <span className="font-semibold">Rating</span>
            <input
              type="number"
              // value={rating}
              onChange={(e) => updateFilters("rating", Number(e.target.value))}
              className="border border-gray-600 rounded-md w-20 px-2 py-[6px]"
              min={0}
              max={5}
              placeholder="Rating"
            />
          </div>

          {/* 🛡️ Warranty Type */}
          <div className="grid gap-1 py-5 border-t-2">
            <span className="font-semibold">Warranty Type</span>
            <select
              value={warrantyType}
              onChange={(e) => {
                updateFilters("warrantyType", e.target.value)
                setWarrantyType(e.target.value)
              }}
              className="bg-transparent cursor-pointer border-none outline-none text-gray-600 text-[14px]"
            >
              <option value="">Any</option>
              <option value="no-warranty">No Warranty</option>
              <option value="seller-warranty">Seller Warranty</option>
              <option value="brand-warranty">Brand Warranty</option>
            </select>
          </div>

          {/* 🎨 Color Filter */}
          <div className="grid gap-1 py-5 border-t-2">
            <span className="font-semibold">Color Family</span>

            <div className="flex gap-2">
              <input
                checked={color == "black"}
                name="color-checkbox"
                id="product-black-clr"
                type="checkbox"
                onChange={() => {
                  setColor('black')
                  updateFilters("color", color === "black" ? "" : "black")
                }}
              />
              <label htmlFor="product-black-clr" className="text-gray-600 flex cursor-pointer text-[14px] w-fit">Black</label>
            </div>

            <div className="flex gap-2">
              <input
                checked={color == "white"}
                name="color-checkbox"
                id="product-white-clr"
                type="checkbox"
                onChange={() => {setColor('white'); updateFilters("color", color === "white" ? "" : "white")}}
              />
              <label htmlFor="product-white-clr" className="text-gray-600 flex cursor-pointer text-[14px] w-fit">White</label>
            </div>
            
            <div className="flex gap-2">
              <input
                checked={color == "multicolor"}
                id="product-multi-clr"
                type="checkbox"
                name="color-checkbox"
                onChange={() => {
                  updateFilters("color", color === "multicolor" ? "" : "multicolor");
                  setColor("multicolor")
                }}
              />
              <label htmlFor="product-multi-clr" className="text-gray-600 flex cursor-pointer text-[14px] w-fit">Multicolor
              </label>
            </div>
            
          </div>
        </aside>

        {/* 📦 Product Results */}
        <main className="w-full">
          <div className="w-full h-full product-search-items flex flex-wrap md:justify-start justify-center">
            {query && Array.isArray(query) ? (
              query.length == 0 ?
              <div className="w-full h-full content-center text-center">
                <h2 className="font-semibold text-5xl">404!</h2>
                <span className="font-medium">No Data Found!</span>
              </div>
              :
              query.map((item: unknown, index: number) => (
                <ProductCard key={`search-items-${index}`} data={item} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
