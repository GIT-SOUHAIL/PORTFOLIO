import { HeroParallax } from "@/components/ui/hero-parallax";
import { LibProjects } from "@/lib/lib-projects";
import { cn } from "@/lib/utils";
import { interprojects } from "@/types/interfaces";
import { urlForImage } from "@lib/image";



const fetchdata = async () => {

  const datas : interprojects[] = await LibProjects()
  const data = datas.map( val => ({   
    title: val.project,
    link: val.link,
    thumbnail: "/SOUHAIL-BG.png"
  }))
  return data
}


export const Projectssection = async ()  => {
     
    const data = await fetchdata()
    console.log(data)

    return (
         <section id="project" className=" relative z-10  mt-[5rem] px-[2rem]">
           <HeroParallax products={products} />
         </section>
    )
}



export const products = [
  {
    title: "FAST FOOD ",
    link: "https://food-project-puce.vercel.app",
    thumbnail:
      "/assets/food-1.png",
  },
  {
    title: "NIKE",
    link: "https://nike-peoject.vercel.app",
    thumbnail:
      "/assets/nike-2.png",
  },
  {
    title: "TRAVEL",
    link: "https://travel-project-amber.vercel.app",
    thumbnail:
      "/assets/travel-1.png",
  },
 
  {
    title: "Ecommerce project",
    link: "https://top-top-ecommerce.vercel.app",
    thumbnail:
      "/assets/top-1.png",
  },
  {
    title: "TRAVEL",
    link: "https://travel-project-amber.vercel.app",
    thumbnail:
       "/assets/top-2.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://travel-project-amber.vercel.app",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
 
  {
    title: "Ecommerce project",
    link: "https://top-top-ecommerce.vercel.app",
    thumbnail:
      "/assets/top-1.png",
  },
  {
    title: "TRAVEL PROJECT ",
    link: "https://travel-project-amber.vercel.app",
    thumbnail:
      "/assets/travel-3.png",
  },
  {
    title: "NIKE",
    link: "https://nike-peoject.vercel.app",
    thumbnail:
      "/assets/nike-2.png",
  },
  {
    title: "SmartBridge",
    link: "https://top-top-ecommerce.vercel.app",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://travel-project-amber.vercel.app",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
 
  {
    title: "NIKE",
    link: "https://nike-peoject.vercel.app",
    thumbnail:
      "/assets/nike-1.png",
  },
  {
    title: "TOP TOP Ecommerce",
    link: "https://top-top-ecommerce.vercel.app",
    thumbnail:
      "/assets/top-3.png",
  },
  {
    title: "FAST FOOD",
    link: "https://food-project-puce.vercel.app",
    thumbnail:
      "/assets/food-1.png",
  },
  {
    title: "TRAVEL PROJECT",
    link: "https://travel-project-amber.vercel.app",
    thumbnail:
      "/assets/travel-3.png",
  },
];