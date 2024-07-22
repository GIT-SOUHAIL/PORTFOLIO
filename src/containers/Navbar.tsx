'use client'
import Link from "next/link";
import { SheetNav } from "@/components/sheet-nav/Sheet-Nav";
import { motion} from "framer-motion";


export const Navbar = () => {

  
  return (
    <section id="nav" className="font-hero-font px-[2rem] mb-[50px]">
      <motion.div
      initial={{y:-70}}
      animate={{y:0}}
      transition={{duration:0.8}}
      className=" flex justify-between items-center ">

  
      <Link href={"#home"}>
        <p className="flex flex-col text-[12px] md:text-[16px] ">Open for offers and <span>collaborations  —</span> </p>
      </Link>

      <nav className=" md:flex gap-[2rem] ">
      <div className=" md:hidden">
        {/* i add this sheet nav for mobile view  */}
        <SheetNav />
      </div>
        <h1 className=" hidden md:block">SOUHAIL MOUGRANE</h1>
      </nav>
  

      <div>
      <Link href={"#home"}>
       <p className="flex flex-col text-[12px] md:text-[16px] ">Portfolio <span>—  Vol1</span> </p>
      </Link>
      </div>

      </motion.div>
    </section>
  );
};
