"use client";
import React from "react";

export default function page() {
 

  return (
    <div className="container mx-auto font-opensans">

      <section>
            <div className="w-[80%] h-full mt-5 rounded-2xl shadow-xl bg-white md:p-7 p-2">
                <h4 className="mb-5 text-[18px] font-semibold">Delivery Details</h4>
                
                <div className="flex flex-wrap gap-3 mb-3">
                  <div className="grid gap-1">
                      <label htmlFor="">Recipient's Name</label>
                      <input type="text" className="border h-9 px-3 rounded-lg" />
                  </div>

                  <div className="grid gap-1">
                      <label htmlFor="">Phone Number</label>
                      <input type="number" min={11} className="border h-9 px-3 rounded-lg" />
                  </div>

                  <div className="grid gap-1 w-44">
                    <label htmlFor="">District</label>
                    <select name="" id="" className="h-9 p-2 rounded-lg cursor-pointer">
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

                <div className="grid gap-1">
                  <label htmlFor="">Full Address</label>
                  <textarea name="" id="" className="border border-zinc-400 rounded-lg w-[80%] h-20 py-2 px-3"></textarea>
                </div>
                <button type="submit"
                  className="bg-slate-800
                  text-white
                  py-2 px-6
                  rounded-lg
                  transition-all
                  hover:bg-slate-900
                  mt-3
                  "
                >
                  Submit
                </button>
            </div>
        </section>

    </div>
  );
}
