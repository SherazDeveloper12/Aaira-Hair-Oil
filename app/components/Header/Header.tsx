'use client'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';


import { toggleCart } from '@/app/store/slices/cart';
import { useRouter } from 'next/dist/client/components/navigation';
import { Package, ShoppingCart } from 'lucide-react';

export default function Header() {
    const router = useRouter();
    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.cart.items);
  return (
    <header className="flex bg-white h-12 lg:h-24 w-full items-center justify-between shadow-md  px-4 lg:px-8   sticky top-0 z-50">
        <div
            onClick={() => router.push('/')}>
            <img src="/logo.png" alt="Logo" className="h-8 lg:h-16 cursor-pointer" />
        </div>
        <div className="hidden lg:flex" ><Navigation /></div>
        <div className="flex gap-2 lg:gap-4">
          
            <button className="flex justify-between items-center gap-2 cursor-pointer text-textColor    hover:text-primary    rounded-full  p-1 px-2" onClick={() => router.push('/order')}>
                <Package className='size-5 md:size-6'  />
            </button>
              <button
             className="relative flex justify-between items-center gap-1 lg:gap-2 cursor-pointer text-textColor    hover:text-primary    rounded-full  p-1 px-2"  onClick={() => dispatch(toggleCart())}>
                <ShoppingCart className='size-5 md:size-6'   />
                {items.length > 0 && (
                    <span className="absolute -top-1 md:-top-2 -right-1 md:-right-2 bg-primary text-white p-1 md:p-2  text-xs md:text-xs rounded-full h-3 md:h-5 w-3 md:w-5 flex items-center justify-center">
                        {items.length}
                    </span>
                )}
            </button>
        </div>
    </header>
  )
}

function Navigation() {
    const router = useRouter();
    const navItems = [
        {"label": "Home", "href": "/"},
        {"label": "Shop", "href": "/shop"},
        {"label": "Aaira Hair Oil", "href": "/#product"},
        {"label": "Benefits", "href": "/#benefits"},
        {"label": "About us", "href": "/#About"},
       
    ];
  return (
    <div className="flex">
        {navItems.map((item, index) => (
         
            <a href={item.href} key={index} className=" text-textColor  flex items-center justify-center  cursor-pointe  hover:text-primary p-5 "  >
                {item.label}
            </a>
            
        ))}
    </div>
  )
}
