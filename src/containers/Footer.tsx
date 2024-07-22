"use client";

// import Footer from "@/components/Footer2";

import { useEffect } from "react";

import Lenis from "lenis";
import Footer from "../components/Footers/Footerpart";


export default function Footersection() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="">
              <Footer />
    </main>
  );
}
