"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  // useSpring,
  // useVelocity,
} from "framer-motion";
import webimg1 from "@/src/assets/event/e4.jpg";
import webimg2 from "@/src/assets/event/e5.jpg";

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll(); // Removed target and offset to track global scroll

  // const scrollVelocity = useVelocity(scrollY);
  // const smoothVelocity = useSpring(scrollVelocity, {
  //   damping: 50,
  //   stiffness: 400,
  // });

  // const velocityFactor = useTransform(
  //   smoothVelocity,
  //   [-1000, 0, 1000],
  //   [-1, 0, 1],
  //   {
  //     clamp: false,
  //   }
  // );

  // Adjusted transform values for more noticeable movement
  const x1 = useTransform(scrollY, [0, 1000], [-600, 0]); // Linear movement based on scroll
  const x2 = useTransform(scrollY, [0, 1000], [600, 0]); // Linear movement based on scroll
  const rotate1 = useTransform(scrollY, [0, 1000], [25, 0]); // Rotation based on scroll
  const rotate2 = useTransform(scrollY, [0, 1000], [-25, 0]); // Rotation based on scroll

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-24 overflow-hidden relative"
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-[#065f46] mb-8 leading-tight">
            Turn your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#065f46] to-[#34D399]">
              passion to life.
            </span>
          </h2>

          {/* Prominent date/time under the hero heading (clean, no box) */}
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#065f46] to-[#34D399]">
                  November 22–23, 2025
                </span>
              </div>
              <div className="h-1 w-28 mx-auto my-3 bg-linear-to-r from-[#34D399] to-[#10B981] rounded-full opacity-80" />
              <div className="text-sm md:text-base text-[#065f46]/75">
                Nov 22 — 8:00 PM – 11:00 PM &nbsp;•&nbsp; Nov 23 — 8:00 AM –
                5:00 PM
              </div>
            </div>
          </div>

          <p className="text-[#065f46]/70 text-lg max-w-2xl mx-auto">
            This is where you will take any idea you're excited about, figure
            out how to bring it to life, and share it with the world. Working
            with your team of ten allows you to learn from each other, and build
            something that you're proud of.
          </p>

          <div className="mt-12 md:mt-16">
            <div className="relative inline-block">
              <p className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#34D399] via-[#10B981] to-[#34D399] bg-size-200 animate-gradient-x tracking-tight">
                5k+ in prizes
              </p>
              <span className="absolute -inset-2 bg-linear-to-r from-[#34D399]/20 via-[#10B981]/20 to-[#34D399]/20 rounded-2xl blur-xl -z-10 animate-pulse"></span>
              <span className="absolute -inset-1 border-2 border-[#34D399]/30 rounded-xl blur-sm"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Images Section with Enhanced Animation */}
      <motion.div
        className="relative h-[70vh] mb-48"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: 1000,
          }}
        >
          <motion.div
            style={{
              x: x1,
              rotateY: rotate1,
              z: 100,
            }}
            className="absolute w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={webimg1}
              alt="Decorative"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute z-75 font-bold text-[#065f46] text-center transform -translate-x-1/2 left-1/2 w-full max-w-[800px]">
            <span
              className="text-transparent text-6xl bg-clip-text bg-linear-to-r from-[#065f46] via-[#34D399] to-[#065f46] 
                        bg-size-200 animate-gradient-x tracking-tight hover:scale-105 transition-transform duration-300"
            >
              wrdsb dev summit
            </span>
            <br />
            <span className="text-4xl inline-block mt-4 font-extrabold tracking-widest bg-linear-to-r from-[#065f46] to-[#34D399] text-transparent bg-clip-text">
              26.10.24
            </span>
            <br />
            <div className="text-2xl mt-4 font-medium tracking-wide text-[#065f46]/80 animate-pulse flex flex-col xl:flex-row items-center justify-center gap-2">
              <span>100 Participants • 10 Schools</span>
              <span className="hidden xl:inline">•</span>
              <i>100 Handmade Sandwiches</i>
            </div>
          </div>
          <motion.div
            style={{
              x: x2,
              rotateY: rotate2,
              z: 50,
            }}
            className="absolute w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={webimg2}
              alt="Decorative"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Info Sections */}
      <div className="container mx-auto px-4 space-y-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-[#34D399] mb-4">Remember!</div>
          <h3 className="text-4xl md:text-6xl font-bold text-[#065f46] mb-6">
            Not just a hackathon.
          </h3>
          <p className="text-[#065f46]/70 text-lg">
            We're a community of developers who are passionate about building
            things that matter. We're not a hackathon, we're a movement with new
            systems and implementations that will change the future of building
            forever.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-[#34D399]">Experience</div>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-[#065f46] mb-6">
            What to Expect
          </h3>
          <p className="text-[#065f46]/70 text-lg">
            The event brings together student teams of 6–10 members who will
            collaborate to design, develop, and present original projects.
            Throughout the day there will be short, skill-based mini-games and
            challenges where teams can earn additional judging points. Teams
            will be evaluated by a panel of judges based on creativity,
            technical execution, user experience, and impact. The event will
            conclude with final demonstrations where top projects are showcased
            and awarded.
          </p>
        </div>
      </div>
    </section>
  );
}
