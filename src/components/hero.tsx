import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
const Hero = () => {
    const [Num , SetNum] = useState(1)
    const inc=()=>{SetNum (Num +1)}
    const dec=()=>{SetNum(Num -1)}
   

  return (
    <div className="flex justify-between mx-auto px-6 py-4 bg-slate-100">
        <section> 
          <h1 className="text-3xl font-semibold p-4 max-w-lg mt-24"> TOP MODEL COLLECTION - FASHION STORE DESIGN </h1>
          <p className="max-w-lg px-6"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odio praesentium animi? Beatae, 
            distinctio? Totam quos nulla soluta explicabo minus dicta facere.</p>
        </section>

      <section className="m-4">
        <Image 
        src="/pic1.jpg" 
        height={400} 
        width={400} 
        alt="model">
        </Image>

        <div className="mt-4 space-x-4 ml-4">
          <h1 className="font-bold text-center mb-3"> Price: $199 </h1>
        <button className="px-4 border-zinc-500 border-2 m-2" onClick={dec}>-</button> 
        <span>{Num}</span> 
        <button className="px-4 border-zinc-500 border-2 m-2" onClick={inc}>+</button>

        <button className="py-2 px-4 bg-slate-800 rounded-xl
        hover:opacity-80 text-white items-center mx-auto "> Add to cart </button>
        </div>
      </section>
    </div>
  )
}

export default Hero