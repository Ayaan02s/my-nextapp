"use client";
import Hero from "@/components/hero";
import Section from "@/components/section";
import Image from "next/image";
import { useState } from "react";

export default function Home(){
  const [color , setColor] = useState("sky")

  return(
    <div>  
      <div className="flex flex-wrap justify-center bg-slate-200 rounded-xl py-2 px-4 gap-4 text-white"
      style={{backgroundColor: color }}>

        <button className="py-1 px-3 bg-yellow-400 rounded-2xl "
         onClick={()=> setColor("yellow")}
          style={{backgroundColor: color }}>
          yellow</button>

        <button className="py-1 px-3 bg-black rounded-2xl " 
        onClick={()=> setColor ("black")}
        style={{backgroundColor: color }}>
          black</button>

        <button className="py-1 px-3 bg-blue-400 rounded-2xl " 
         style={{backgroundColor: color }}

        onClick={()=> setColor("blue")}>
          blue</button>
        <button className="py-1 px-3 bg-red-400 rounded-2xl " 
        onClick={()=>{"yellow"}}>
          red</button>
      </div>
      <Hero/>
      <Section/>
       </div>
  )
}
