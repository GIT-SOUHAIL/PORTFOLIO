import FlippingCard from "@/components/animata/list/flipping-cards"
import TypingText from "@/components/animata/text/typing-text"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"



import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import Link from "next/link"

  
  export function Processsection() {
    return (
      <section className="mt-[5rem] space-y-10 flex flex-col px-[1rem] ">
        <div className="text-black text-center lg:mr-10 text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] ">
        <TypingText text="PROCESS" className="" />
      </div>
      <div className=" relative z-50 flex flex-col md:flex-row gap-[10rem] px-[2rem] items-center  "> 

      <Accordion type="single" collapsible className="md:w-[47%]  ">
      <AccordionItem value="item-1">
          <AccordionTrigger>inspiration to build my resume?</AccordionTrigger>
          <AccordionContent>
          i take my inspiration to build this portfolio from great webflow
          developer when i saw what she builded so i decide to build like her
          but i add my idea in this portfolio
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>duration i take for build this portfolio?</AccordionTrigger>
          <AccordionContent>
          I took one week to build a superb portfolio using modern style and the latest technology.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Tools i use for front end to bulid my resume?</AccordionTrigger>
          <AccordionContent>
          <ul>
            <li>Framework: <span className="text-yellow-500">Next.js</span></li>
            <li>Programming Language: <span className="text-yellow-500">TypeScript</span></li>
            <li>UI/UX Design: <span className="text-yellow-500">Tailwind CSS, Shadcn UI</span> </li>
            <li>For icons: <span className="text-yellow-500">Lucide react</span></li>
          </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Tools i use for back end to bulid my resume?</AccordionTrigger>
          <AccordionContent>
            <ul className="mb-[5px]">
              <li>For Back End : <span className="text-yellow-500">SANITY IO</span></li>
            </ul>
            <p>Sanity.io is a flexible, fully customizable, and scalable headless CMS(Content Management System).
              It allows developers to manage content through a structured API, making it suitable for building
              both simple blogs and complex applications requiring structured content management.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>responsive?</AccordionTrigger>
          <AccordionContent>
          portfolio is responsive and built with a focus on usability.
          It showcases my work and skills clearly, using Next.js, TypeScript, 
          Tailwind CSS, and Shadcn UI for intuitive user experience
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Tools i use to styled this project?</AccordionTrigger>
          <AccordionContent>
          this two tools is great tools for add a masterpiece style to your website
            <ul className="text-yellow-500">
              <li>Tailwindcss</li>
              <li>Shadsn ui</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>which tools i use for animation?</AccordionTrigger>
          <AccordionContent>
           i use both of this tools to add more user experience 
            <ul className="text-yellow-500">
             <li>Framer Motion</li>
             <li>Lenis for smooth scroll</li>
             </ul>

          </AccordionContent>
        </AccordionItem>
      </Accordion>
       <div>
       <FlippingCard
  list={[
    {
      font: 'FRONT',
      title: 'D'
    },
    {
      font: 'END',
      title: 'E'
    },
    {
      font: 'DEVELOPER',
      title: 'V'
    },
    {
      font: 'WEB',
      title: 'F'
    },
    {
      font: 'FLOW',
      title: 'L'
    },
    {
      font: 'DEVELOPER',
      title: 'W'
    }
  ]}
 />
       </div>
        </div>
        <VelocityScroll text="FRONT-END DEVELOPER" className=" text-[30px] md:text-[50px] text-center  mt-[5rem] " />  
      </section>
    )
  }

