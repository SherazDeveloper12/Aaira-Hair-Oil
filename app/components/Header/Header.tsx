'use client'
import React from 'react'
import ShoppingCartSignIcon from '@iconify-react/el/shopping-cart-sign';
import UserSolidIcon from '@iconify-react/mynaui/user-solid';
import { useAppDataProvider } from '@/app/context/Context';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@/app/store/slices/cart';
import { useRouter } from 'next/dist/client/components/navigation';
import { Package, ShoppingCart } from 'lucide-react';
export default function Header() {
    const router = useRouter();
    const dispatch = useDispatch();
  return (
    <header className="flex bg-white h-12 lg:h-24 w-full items-center justify-between shadow-md  px-4 lg:px-8   sticky top-0 z-50">
        <div
            onClick={() => router.push('/')}>
            <img src="/logo.png" alt="Logo" className="h-8 lg:h-16 cursor-pointer" />
        </div>
        <div className="hidden lg:flex" ><Navigation /></div>
        <div className="flex gap-2 lg:gap-4">
            <button className="flex justify-between items-center gap-1 lg:gap-2 cursor-pointer text-textColor    hover:text-primary    rounded-full  p-1 px-2"  onClick={() => dispatch(toggleCart())}>
                <ShoppingCart height='2em'  />
            </button>
            <button className="flex justify-between items-center gap-2 cursor-pointer text-textColor    hover:text-primary    rounded-full  p-1 px-2" onClick={() => router.push('/order')}>
                <Package height='2em'  />
            </button>
        </div>
    </header>
  )
}

function Navigation() {
    const router = useRouter();
    const navItems = [
        {"label": "Home", "href": "/"},
        {"label": "Shop", "href": "#product"},
        {"label": "Our Benefits", "href": "#benefits"},
        {"label": "About us", "href": "#About-us"},
        {"label": "Contact", "href": "#contact"},
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
