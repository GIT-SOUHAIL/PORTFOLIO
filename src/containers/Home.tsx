'use client'
import TypingAnimation from "@/components/magicui/typing-animation"
import Image from "next/image"
import {motion} from 'framer-motion'
import { CardContainer, CardItem } from "@/components/ui/3d-card"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowDownToLine } from "lucide-react"
import Link from "next/link"
import SplitText from "@/components/animata/text/split-text"
import SwapText from "@/components/animata/text/swap-text"






export const Homesection = () => {


    return (
        <>
        <section id="home" className="relative font-hero-font mb-[80px] z-10 px-[1rem] sm:px-[2rem] " >
          <div className=" md:w-full text-[50px] sm:text-[80px] lg:text-[100px] xl:text-[130px] text-black/80 font-normal space-y-[0rem] md:space-y-[3.5rem] z-50">
           <TypingAnimation text="CREATIVE" className="" />
           {/* */}
           <div className=" relative">
            <div className=" absolute right-0 lg:-top-5 ">
            <SplitText text="FRONT END &"  className=" right-0 "/>               
            </div>
           </div>

           <TypingAnimation text="WEBFLOW" className=" text-start absolute left-[3rem] sm:left-[15rem] md:left-[18rem] lg:left-[18rem] top-[10rem] sm:top-[15.5rem] md:top-[13.5rem]" />
           <TypingAnimation text="DEVELOPER" className="text-end absolute top-[15rem]  sm:top-[23rem] right-[25px] " />
          </div>
          <div className="absolute top-[15rem] sm:top-[0rem] -z-10 ml-[1.5rem] ">
            <CardContainer>
              <CardContainer>
              <CardItem>
              <Image src={"/SOUHAIL.png"} width={350} height={500} alt="SOUHAIL" className="min-h-[350px] grayscale hover:grayscale-0 blur-md hover:blur-0 rounded-lg transition duration-700  -z-20"  priority/>
              </CardItem>
              </CardContainer> 
              </CardContainer>
          </div>
          <motion.div
          initial={{y:150}}
          animate={{y:0}}
          transition={{duration:0.7}}
          className="flex flex-col md:flex-row gap-[2rem] justify-between items-center mt-[87vh] sm:mt-[44vh] md:mt-[50vh] lg:mt-[40vh] xl:mt-[65vh]">
            <p className="flex flex-col">Passionate about crafting <span className="">unforgettable experiences.</span></p>
            <a href="/cv/souhail mougrane cv .pdf" download={true} className="xl:mr-[4rem] group">
            <Button variant={"outline"} className="flex items-center justify-between gap-4 group">
            <span><SwapText initialText='DOWNLOAD CV' finalText='LETS DOWNLOAD' textClassName='text-black/50 group-hover:text-white' /></span>
            <ArrowDownToLine width={20} height={20} className="stroke-black/50  group-hover:stroke-white "/>
            </Button>
            </a>
            <Link href={"#about"}>           
            <Button variant={"outline"} className="group ">
            <ArrowDown className=" stroke-black/50  group-hover:stroke-white "/>
            </Button>
            </Link>
          </motion.div>
        </section>
        </>
    )
}