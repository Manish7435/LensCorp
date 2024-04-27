'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';


export const Navebar = () => {

  const router = usePathname()
  
  const navItems = ["MakeMyWeb.","Home","Company", "Blogs"]

  const splittedRouter = router.split('/')
 
  return (

      <div className={`text-black sm:font-extralight bg-white w-full text-[16px] items-center flex justify-between sm:px-28 sm:py-2  fixed z-40 `}>
        <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"} alt='lens' height={70} width={80}/>
        <ul className='sm:block hidden'>
          <li className='flex justify-between font-semibold '> 
            <div className='flex gap-8'>
              {navItems.map((nav)=>{
                return (
                <Link href= { nav === "Home"? '/':`/${nav.toLowerCase()}`} key={nav}>
                      <div className={(splittedRouter[1] === nav.toLowerCase())? 'text-[#55F85C]':''}  > {nav}</div>
                </Link>
                )
              })}
            </div>
          </li>
        </ul>
      </div>
  )
}
