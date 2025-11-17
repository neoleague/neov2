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
              <div className="text-sm md:text-base text-[#065f46]/75 flex items-center gap-4 justify-center">
                <span>Nov 22 — 8:00 AM – 11:00 PM</span>
                <span className="text-zinc-400">•</span>
                <span className="font-medium"> Nov 23 — Online</span>
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
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch justify-center max-w-4xl mx-auto">
                <div className="flex flex-col items-center justify-center p-4 hover:scale-105 transition">
                  <div className="text-sm font-medium uppercase text-zinc-400 tracking-wider">
                    1st place
                  </div>
                  <div className="mt-2 text-4xl md:text-5xl font-extrabold text-[#065f46]">
                    $1,000
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 hover:scale-105 transition">
                  <div className="text-sm font-medium uppercase text-zinc-400 tracking-wider">
                    2nd place
                  </div>
                  <div className="mt-2 text-3xl md:text-4xl font-extrabold text-[#065f46]">
                    $300
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 hover:scale-105 transition">
                  <div className="text-sm font-medium uppercase text-zinc-400 tracking-wider">
                    3rd place
                  </div>
                  <div className="mt-2 text-3xl md:text-4xl font-extrabold text-[#065f46]">
                    $200
                  </div>
                </div>
              </div>
              <span className="absolute -left-8 -bottom-6 block h-28 w-52 rounded-full opacity-12 blur-3xl bg-gradient-to-r from-[#065f46] to-[#10B981]" />
            </div>
          </div>
        </div>
      </div>

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
