
import { FooterLink } from '@/constants/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { buttonVariants } from '../ui/button'
import SwapText from '../animata/text/swap-text'

export default function Content() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='flex flex-col justify-between  md:mt-[1rem] px-[1rem] sm:px-[2rem] mt-[5rem] sm:mt-5 '>
        <div className='flex justify-between items-center'>
        
        <a href={"#home"}>
        <div className=" hidden md:flex flex-col text-[12px] md:text-[16px] ">Open for offers and <span>collaborations  —</span> </div>
        </a>

       <div className='flex gap-[6rem] md:gap-[4rem] mr-[7rem] md:mr-0'>
          {FooterLink.map((item, index) => (
            <a href={item.link} target='_blank' key={index}>
              <div className="flex flex-col text-[12px] md:text-[16px]  ">
                <div className='flex items-center hover:text-yellow-500'>
                  <Image className='fill-black' src={item.icon} width={20} height={20} alt="icon" />
                  <span className='ml-2'>{item.title}</span>
                </div>
              </div>
            </a>
          ))}
       </div>

       <div>
       <a href={"#home"}>
        <div className="flex flex-col text-[12px] md:text-[16px] ">Portfolio <span>—  Vol1</span> </div>
       </a>
       </div>

       </div>

       <div className='text-[60px] md:text-[100px] lg:text-[120px] xl:text-[200px] text-center md:-space-y-[5rem] py-[2rem] selection:bg-yellow-400 selection:text-white  '>
          <div className='mt-10 md:mt-0'>SOUHAIL</div>
          <div>MOUGRANE</div>
       </div> 
       <div className='text-center sm:-mt-[3rem]' >
       <a href="mailto:souhailmagran63@gmail.com" target='_blank' className={ cn( buttonVariants({variant:'outline'}) , 'text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-center bg-yellow-500' ) }>
        <SwapText initialText='Contact Me' finalText='Lets Connect' textClassName='text-white' />
       </a>
       </div>

       <div className='mt-[4rem] md:mt-[2rem]'>
        <div className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-center'>Copyright © {year} Souhail Mougrane</div>
       </div>
    </div>
  )
}

