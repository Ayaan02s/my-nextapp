"use client"
import React, { useRef } from 'react';
import { ShoppingCart} from "lucide-react";
import {XCircle} from 'lucide-react';
import Link from 'next/link';
const Header = () => {
  const toggelCart = ()=>{

  }
  const ref:any = useRef()
  return (
    <div className='flex justify-between items-center px-6 bg-cyan-700 text-white'>
        <h1 className='text-2xl font-semibold px-3'>logo</h1>
        <ul className='flex gap-4'>
            <li className='text-sm hover:opacity-70'> Home </li>
            <li className='text-sm hover:opacity-70'> Contect ue </li>
            <li className='text-sm hover:opacity-70'> About us </li>
        </ul>
        <div className= 'items-center px-3' onClick={toggelCart}>
          <Link href="">
          <ShoppingCart/>
          </Link>
           </div>
           <div className='sideBar absolute top-0 right-0 transition-transform translate-x-full  bg-blue-300 p-12 ' ref={ref} >

              <h2 className=' text-lg font-bold '>shoping cart </h2>
              <span className='absolute top-2 right-2 cursor-pointer' onClick={toggelCart}> <XCircle/> </span>

           </div>
    </div>
  )
}

export default Header