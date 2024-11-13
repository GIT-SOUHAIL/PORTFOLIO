
import TypingText from "@/components/animata/text/typing-text"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"



export const Aboutsection = () => {
      
    
    return(
         <section id="about" className=" relative z-10  px-[2rem] pb-[5rem]" >
          <VelocityScroll text="SOUHAIL MOUGRANE" className=" text-[30px] md:text-[50px] text-center  mt-[1rem] " />   
         <div className="mt-[3.2rem] flex flex-col gap-[3rem]">
           <h2 className="text-black text-center text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] ">
            <TypingText text="ABOUT" delay={44} className="" />
            </h2>
          </div> 
          <div  className="flex flex-col md:flex-row justify-between mt-[5rem] gap-[1rem] md:px-[1.2rem] ">
          <div>
            <DirectionAwareHover imageUrl={"/SOUHAIL.png"} className="w-full h-full rounded-lg">
            <p className="font-bold text-xl ">SOUHAIL</p>
            <p className="font-bold text-xl text-yellow-500">MOUGRANE</p>
            </DirectionAwareHover>
            </div>
           <div className=" md:w-[450px] lg:w-[630px] xl:w-[700px] text-black/70  ">
             <p className="">I m Souhail, a Skilled Full Stack Developer specializing in React.js,
                TypeScript, and Next.js Node.js , Exoress, Mongodb. I have a strong passion for modern design
                principles and utilize Tailwind CSS and Shadcn UI to create intuitive
                and responsive web applications. My expertise lies in translating design
                concepts into functional user interfaces that prioritize both usability
                and visual appeal. I am experienced in optimizing front end performance
                and ensuring cross-browser compatibility, delivering solutions that exceed
                client expectations.I thrive in collaborative environments, leveraging my
                dedication to clean code and continuous learning to contribute effectively to team success
                </p>
                <p className="mt-[1rem]">
                With over 1 years of  hands-on experience in Webflow, I bring a unique blend of design and
               development skills to every project. My goal is to deliver digital experiences that not only
               engage and inspire but also achieve tangible results for my clients. When working on websites,
               I place a strong emphasis on crafting unique layouts, captivating interactions, and good use of
               typography, blend together these elements to create a seamless user experience that leaves a lasting impression
                </p>
          </div>
        </div>         
        </section>
    )
    
    
}