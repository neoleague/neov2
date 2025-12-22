import { useEffect, useState } from "react";
import logo from "@/src/assets/Neo-logo.png";
import SubSection from "./SubSection.tsx";
// Static sponsor imports (explicit so runtime doesn't depend on import.meta.globEager)
import s_codecrafters from "@/src/assets/sponsor/CodeCrafters.io full logo full text (Dark text).png";
import s_incogni from "@/src/assets/sponsor/Incogni_logo_black_better_quality.png";
import s_logo3 from "@/src/assets/sponsor/Logo-3.jpg";
import s_nexos from "@/src/assets/sponsor/nexos-ai-logo-MAIN-black-horizontal.png";
import s_nordpass from "@/src/assets/sponsor/nordpass vertical (1).png";
import s_nordvpn from "@/src/assets/sponsor/NordVPN_Logo_RGB_Primary_Black (1).png";
import s_saily from "@/src/assets/sponsor/saily-logo-black (3).png";
import s_sobeys from "@/src/assets/sponsor/Sobeys_logo.svg.png";
import wimpys from "@/src/assets/sponsor/Wimpys.png";
import twice from "@/src/assets/sponsor/twicethedeal.jpg";
import popeyes from "@/src/assets/sponsor/popeyes.jpg";
import eddies from "@/src/assets/sponsor/fasteddies.jpg";

const SponsorGallery: React.FC = () => {
  const images = [
    s_codecrafters,
    s_incogni,
    s_logo3,
    s_sobeys,
    s_nexos,
    s_nordpass,
    s_nordvpn,
    s_saily,
    wimpys,
    twice,
    popeyes,
    eddies,
  ];

  // Map image source -> href and rel attributes for sponsor links
  const linkMap: Record<string, string> = {
    [s_nordvpn]: "https://nordvpn.com/hackathons",
    [s_incogni]: "https://incogni.com/",
    [s_nordpass]: "https://nordpass.com/",
    [s_saily]: "https://saily.com/",
    [s_nexos]: "https://nexos.ai/",
    [s_logo3]: "https://nordprotect.com/",
  };

  const relMap: Record<string, string> = {
    // NordVPN requested to be marked as nofollow/sponsored
    [s_nordvpn]: "nofollow sponsored noopener noreferrer",
  };

  // Layout: first row = 3 items, second row = 4 items
  const firstRow = images.slice(0, 3);
  // show exactly 4 items on second row (slice 3..7)
  const secondRow = images.slice(3, 7);
  const thirdRow = images.slice(7, 12);

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
        {firstRow.map((src, i) => {
          const href = linkMap[src as unknown as string];
          const rel = relMap[src as unknown as string] || "noopener noreferrer";
          return (
            <div
              key={`r1-${i}`}
              className="group flex items-center justify-center p-3 rounded-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-full h-20 bg-transparent rounded-md">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel={rel}
                    className="w-full flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={`sponsor-${i}`}
                      className="max-h-16 object-contain filter grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </a>
                ) : (
                  <img
                    src={src}
                    alt={`sponsor-${i}`}
                    className="max-h-16 object-contain filter grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-4 gap-6 w-full max-w-4xl">
        {secondRow.map((src, i) => {
          const href = linkMap[src as unknown as string];
          const rel = relMap[src as unknown as string] || "noopener noreferrer";
          return (
            <div
              key={`r2-${i}`}
              className="group flex items-center justify-center p-3 rounded-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-full h-20 bg-transparent rounded-md">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel={rel}
                    className="w-full flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={`sponsor-${i + 3}`}
                      className="max-h-16 object-contain filter grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </a>
                ) : (
                  <img
                    src={src}
                    alt={`sponsor-${i + 3}`}
                    className="max-h-16 object-contain filter grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-5 gap-6 w-full max-w-4xl">
        {thirdRow.map((src, i) => {
          const href = linkMap[src as unknown as string];
          const rel = relMap[src as unknown as string] || "noopener noreferrer";
          return (
            <div
              key={`r3-${i}`}
              className="group flex items-center justify-center p-3 rounded-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-full h-20 bg-transparent rounded-md">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel={rel}
                    className="w-full flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={`sponsor-${i + 7}`}
                      className="max-h-16 object-contain filter grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </a>
                ) : (
                  <img
                    src={src}
                    alt={`sponsor-${i + 7}`}
                    className="max-h-16 object-contain filter grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
import neobuild1 from "@/src/assets/n1.png";
import neobuild2 from "@/src/assets/n2.png";
import sponsorPDF from "@/src/assets/pdf/sponsor.pdf";
// Import team member photos from head2 folder
import ahmadPhoto from "@/src/assets/head2/Ahmad.jpg";
import aidenPhoto from "@/src/assets/head2/Aiden.jpg";
import allanPhoto from "@/src/assets/head2/allan.jpg";
import asadPhoto from "@/src/assets/head2/asad.jpg";
import erfanPhoto from "@/src/assets/head2/Erfan.jpg";
import ethanPhoto from "@/src/assets/head2/Ethan.jpg";
import evanPhoto from "@/src/assets/head2/Evan.jpg";
import neevPhoto from "@/src/assets/head2/Neev.jpg";
import timPhoto from "@/src/assets/head2/Tim Yu.png";
import vjPhoto from "@/src/assets/head2/Vj.jpg";

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      {/* Intro animation */}
      <div className={`intro-container ${isLoaded ? "fade-out" : ""}`}>
        <div className="wave-effect" />
        <div className="relative z-10 flex items-center justify-center">
          <img src={logo} alt="Neo Developer League" className="neo-logo" />
        </div>
      </div>

      {/* Main content */}
      <div
        className={`content absolute inset-0 ${
          isLoaded ? "loaded" : ""
        } overflow-y-auto pt-12`}
      >
        <div className="min-h-screen bg-linear-to-b from-white via-[#D1FAE5] to-[#C4EDE0] bg-local">
          {/* Hero Section */}
          <section className="relative h-screen overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left side - Text Content */}
              <div className="flex-1 px-4 sm:px-6 md:pl-16 flex items-center justify-center">
                <div className="max-w-2xl">
                  <h1 className="font-manrope font-extrabold md:font-bold text-6xl sm:text-6xl md:text-7xl lg:text-7xl text-[#065f46] leading-tight mb-4 md:mb-8 text-center md:text-left">
                    Inspiring the next <br className="hidden md:block" />
                    <span className="pt-3 relative inline-block">
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-[#065f46] via-[#34D399] to-[#065f46] bg-size-200 animate-gradient-x">
                        generation of engineers.
                      </span>
                      <span className="absolute -inset-1 border border-[#34D399]/10 rounded-lg blur-xs"></span>
                    </span>
                  </h1>

                  {/* Apply Now Button */}
                  <div className="mt-14 flex justify-center md:justify-start">
                    <button
                      className="relative group cursor-pointer"
                      onClick={() => {
                        // Open external Google Form in a new tab instead of navigating to /login
                        window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLSfLrKikS5WNOfr71obqevBct0RDAe1Jcl4Je_-pldauetQRdg/viewform?usp=dialog",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <div
                        className="relative px-12 py-4 bg-[#065f46] text-white rounded-md font-semibold text-lg
                                    overflow-hidden transition-all duration-300
                                    group-hover:bg-[#0b8065]"
                      >
                        <span className="relative z-10 text-lg md:text-xl font-bold">
                          Apply Now
                        </span>
                        <div
                          className="absolute inset-0 bg-linear-to-r from-[#34D399] to-[#6ee7b7]
                                      opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        ></div>
                      </div>
                      {/* <div
                        className="absolute -inset-[2px] bg-linear-to-r from-[#34D399] to-[#6ee7b7]
                                    rounded-lg opacity-75 blur group-hover:opacity-100 transition-opacity duration-300
                                    -z-10"
                      ></div>
                      <span
                        className="absolute top-0 left-0 px-2 py-1 text-xs text-white bg-[#065f46] rounded-sm
                                     transform -translate-y-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Coming Soon
                      </span> */}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side - Large Logo */}
              <div className="flex-1 relative flex items-center justify-center md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Neo Logo"
                    className="w-[90%] h-[90%] object-contain animate-pulse"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(52, 211, 153, 0.3))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-[#065f46] rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-[#065f46] rounded-full animate-scroll"></div>
              </div>
            </div>
          </section>

          {/* Welcome Section with Updated Media Flow */}
          <SubSection />

          {/* Location Section */}
          <section className="max-w-7xl mx-auto my-12 px-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-[#34D399]/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                <div className="w-full h-56 md:h-full md:max-w-[85%] md:mx-auto">
                  <iframe
                    title="Accelerator Centre map"
                    src="https://www.google.com/maps?q=295+Hagey+Blvd+Waterloo+ON+N2L+6R5&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-manrope font-bold text-[#065f46] mb-2">
                    Accelerator Centre
                  </h3>
                  <p className="text-sm text-[#065f46]/80 mb-4">
                    295 Hagey Blvd, Waterloo, ON N2L 6R5
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=295+Hagey+Blvd+Waterloo+ON+N2L+6R5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-[#065f46] text-white rounded-md font-semibold hover:bg-[#0b8065] transition-colors text-sm"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sponsors Section (under map) */}
          <section className="max-w-7xl mx-auto my-8 px-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-[#34D399]/8 p-6">
              <h3 className="text-2xl md:text-3xl font-manrope font-extrabold tracking-wide text-[#065f46] mb-4 text-center">
                Sponsors
              </h3>
              <div className="w-full">
                <SponsorGallery />
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="max-w-7xl mx-auto my-12 px-6">
            <div className="p-6">
              <h3 className="text-2xl md:text-3xl font-manrope font-extrabold tracking-wide text-[#065f46] mb-6 text-center">
                Team
              </h3>
              <div className="flex flex-nowrap justify-center items-center gap-4 md:gap-5 overflow-x-auto">
                {[
                  { photo: evanPhoto, name: "Evan Zhou" },
                  { photo: allanPhoto, name: "Allan Wang" },
                  { photo: aidenPhoto, name: "Aiden Lim" },
                  { photo: erfanPhoto, name: "Erfan Nezhad-Ahmadi" },
                  { photo: ethanPhoto, name: "Ethan Won" },
                  { photo: vjPhoto, name: "Vijay Vijayaraja" },
                  { photo: asadPhoto, name: "Asad Farishta" },
                  { photo: neevPhoto, name: "Neev Prajapati" },
                  { photo: ahmadPhoto, name: "Ahmad Sultan" },
                  { photo: timPhoto, name: "Tim Yu" },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center flex-shrink-0"
                  >
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#34D399]/20 shadow-lg transition-all duration-300 group-hover:border-[#34D399]/60 group-hover:scale-105 group-hover:shadow-xl">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <p className="mt-2 text-xs font-manrope font-semibold text-[#065f46] text-center whitespace-nowrap">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative px-8 md:px-16 py-12 backdrop-blur-xs border-t border-[#34D399]/10 overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0 opacity-45">
              <img
                src={neobuild1}
                alt=""
                className="absolute right-0 bottom-0 w-48 h-auto transform rotate-12 translate-x-12 translate-y-6"
              />
              <img
                src={neobuild2}
                alt=""
                className="absolute left-0 top-0 w-48 h-auto transform -rotate-12 -translate-x-12 -translate-y-6"
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div className="space-y-4">
                  <img
                    src={logo}
                    alt="Neo Logo"
                    className="w-12 h-12 hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-sm text-[#065f46]/70">
                    building the next generation of tech leaders through
                    competitive programming.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-manrope font-semibold text-[#065f46] mb-4 relative">
                    Quick Links
                    <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-linear-to-r from-[#34D399] to-transparent"></span>
                  </h3>
                  <ul className="space-y-2">
                    {["vlog", "sponsorship", "discord"].map((link) => (
                      <li key={link}>
                        <a
                          href={
                            link === "discord"
                              ? "#"
                              : link === "sponsorship"
                              ? sponsorPDF
                              : "https://www.youtube.com/watch?v=IMnJ1tvQV2c"
                          }
                          onClick={(e) =>
                            link === "discord" && e.preventDefault()
                          }
                          aria-disabled={link === "discord" ? "true" : "false"}
                          target="_blank"
                          className={`text-sm text-[#065f46]/70 hover:text-[#34D399] transition-colors relative group flex items-center ${
                            link === "discord" ? "cursor-not-allowed" : ""
                          }`}
                        >
                          <span className="absolute -left-4 w-2 h-2 bg-[#34D399] rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="font-manrope font-semibold text-[#065f46] mb-4 relative">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-linear-to-r from-[#34D399] to-transparent"></span>
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="mailto:info@neoleague.dev"
                        className="flex items-center space-x-2 text-sm text-[#065f46]/70 hover:text-[#34D399] transition-colors group"
                      >
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>info@neoleague.dev</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/neodevleague"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm text-[#065f46]/70 hover:text-[#34D399] transition-colors group"
                      >
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span>neodevleague</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-4 border-t border-[#34D399]/10 text-center">
                <p className="text-sm text-[#065f46]/70">
                  © neo developer league 2025
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
