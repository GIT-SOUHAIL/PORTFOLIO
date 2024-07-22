import { cn } from "@/lib/utils";

import TypingText from "../text/typing-text";
import Image from "next/image";

export function CardsSectionDemo() {
  const features = [
    {
      title: "programming language",
      description:
        "JavaScript is essential for web development as it allows developers to manipulate elements on a webpage dynamically.",
      icon: "/icons/javascript.svg",
    },
    {
      title: "library for building user interfaces",
      description:
        "React allows developers to create reusable UI components can be easily integrated into their applications.",
      icon: "/icons/react.svg",
    },
    {
      title: "programming language",
      description:
        "TypeScript allows developers to define types for variables, function parameters, and return values.",
      icon: "/icons/typescript.svg",
    },
    {
      title: "Next is the React Framework",
      description: "Next is the React Framework that allows you to build your application with React components and server-side rendering.",
      icon: "/icons/nextjs.svg",
    },
    {
      title: "Software Development",
      description: "git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
      icon: "/icons/git.svg",
    },
    {
      title: "redux library",
      description:
        "redux is a predictable state container for React applications. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
      icon: "/icons/redux.svg",
    },
    {
      title: "Vite Compiler",
      description:
        "Vite is a fast frontend build tool, designed for the modern web. It's an alternative to webpack, rollup, and parcel.",
      icon: "/icons/vitejs.svg",
    },
    {
      title: "Software Development",
      description: "github is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
      icon: "/icons/github.svg",
    },
  ];
  return (
    <div className=" pt-[15rem]">
        <div className=" text-center text-black text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px]  md:mt-[3rem] ">
            <TypingText text="FEATURES" className="" />
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   relative z-50 py-10 max-w-7xl mx-auto">

      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <Image className="fill-black" src={icon} width={30} height={30} alt="icon" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-yellow-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
