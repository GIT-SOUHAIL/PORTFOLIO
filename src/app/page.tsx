
import { Aboutsection } from "@/containers/About";
import { Homesection } from "@/containers/Home";
import { Navbar } from "@/containers/Navbar";
import { Processsection } from "@/containers/Process";
import { Projectssection } from "@/containers/Projects";
import Footersection from "@/containers/Footer";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { CardsSectionDemo } from "@/components/animata/cards/Cards";



export default function Home() {
  return (
    <main  className="pt-5  bg-[#e8e8e8] selection:bg-black/50 selection:text-white w-screen -z-40"> 

         <div className="relative h-[200vh] sm:h-[70vh] md:h-[80vh] lg:h-[65vh] xl:h-screen w-full -mt-[1rem]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
         <div className=" fixed top-5 w-screen ms:w-full ">
         <Navbar />
         <Homesection />
         </div>
         </div>
         <div className=" relative z-50">
         <Aboutsection />
         <div  className="relative min-h-[200vh] md:h-fit" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
         <div className=" fixed bottom-0 w-full">
         <CardsSectionDemo/> 
         </div>
         </div> 
         <Processsection />
         <Projectssection/>
         <GridPattern
           width={50}
           height={50}
           x={-1}
           y={-1}
           className={cn(
             "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
      />
        </div>    

         <div  className="relative min-h-[200vh] md:h-fit" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
         <div className=" fixed bottom-[10vh] md:bottom-0 w-full">
          <Footersection />
         </div>
         </div>  
    </main>
  );
}
