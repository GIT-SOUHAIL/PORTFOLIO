import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLink } from "@/constants/constants"
import Link from "next/link"


export const SheetNav = ()=> {

  return ( 
  <Sheet >
  <SheetTrigger className="">Click</SheetTrigger>
  <SheetContent className="bg-[#e8e8e8]"  side={"bottom"}>
    <SheetHeader >
      <SheetTitle className="mt-5 text-black font-normal ">Hi I — m Souhail this is my portfolio</SheetTitle>
      <SheetDescription>
        <div className="md:hidden flex gap-[1.5rem] justify-between mx-auto py-4 text-[15px] ">
        {NavLink.map((val, key) => (
          <Link href={val.link} key={key} className="text-black">
            {val.title}
          </Link>
        ))}
        </div> 
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}