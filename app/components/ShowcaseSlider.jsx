"use client";
import React, { useState } from "react";
import { Crosshair, Target, Box } from "lucide-react";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    title: "Diztoversity",
    industry: "Education / Community Platform",
    description:
      "Diztoversity is a platform designed to bring together educational resources and community-driven learning. The client wanted a professional, modern, and mobile-friendly website to showcase their vision and provide a smooth experience for visitors.",
    objective:
      "Create a responsive, user-friendly website Build a clean, minimal design with strong brand messaging Ensure smooth navigation across devices Optimize for performance and SEO.",
    results: [
      "Delivered a fully responsive website with a modern UI/UX.",
      "Improved usability and faster page load times.",
      "Clear presentation of mission and services.",
      "Enhanced brand credibility and online presence.",
    ],
    image: "https://i.ibb.co/27sW37qZ/Screenshot-2025-10-07-034243.png",
    bgColor: "bg-[rgb(142,173,213)]",
    // result:
    //   "This project successfully transformed the client’s e-commerce platform into a scalable, user-friendly solution, driving significant growth and efficiency during high-demand period.",
  },
  {
    title: "Hunk Toofan Project",
    industry: "E-commerce / Retail",
    description:
      "The Hunk Toofan project aimed to create a modern e-commerce-style website that is visually appealing and highly interactive. The client wanted a platform that not only looks premium but also delivers a seamless user journey.",
    objective:
      "Design an elegant, modern website with intuitive navigation Optimize site performance for faster load times	Ensure mobile-first design for better reach	Provide easy content management for client updates.",
    results: [
      "Successfully launched a visually engaging and responsive site.",
      "Received positive customer feedback on usability and design.",
      "Increased user engagement with smoother browsing experience.",
      "Delivered project on time with high client satisfaction",
    ],
    image: "https://i.ibb.co/CD0Qknv/Screenshot-2025-10-07-034916.png",
    bgColor: "bg-[rgb(212,255,230)]",
    // result:
    //   "This project successfully transformed the client’s e-commerce platform into a scalable, user-friendly solution, driving significant growth and efficiency during high-demand period.",
  },
  {
    title: "Medilife Health Care",
    industry: "Healthcare / Medical Services",
    description:
      "Medilife Health Care is a global healthcare service provider. They needed a professional online presence to communicate their wide range of services and credibility in the healthcare industry. The project focused on building trust, clarity, and accessibility for patients and partners.",
    objective:
      "Build a professional and trustworthy healthcare website	Ensure responsive design across all devices	Present complex medical information clearly and simply	Improve accessibility and ease of navigation.",
    results: [
      "Delivered a fast, responsive website optimized for patients and partners.",
      "Clear service presentation leading to improved patient inquiries.",
      "Strengthened online credibility and trust.",
      "Enhanced client visibility and user engagement online.",
    ],
    image: "https://i.ibb.co/Xx2yqhh8/Screenshot-2025-10-07-035315.png",
    bgColor: "bg-[hsl(303,88%,86%)]",
    // result:
    //   "This project successfully transformed the client’s e-commerce platform into a scalable, user-friendly solution, driving significant growth and efficiency during high-demand period.",
  },
  {
    title: "LaunchNest",
    industry: "SaaS / Startup Platform",
    description:
      "LaunchNest is a modern SaaS landing page built to help startups showcase their product with a clean, high-converting design. The client wanted a fast, responsive, and visually appealing website with smooth animations and clear messaging.",
    objective:
      "Create a responsive, minimal, and user-friendly landing page Ensure smooth navigation, strong brand identity, and optimized performance.",
    results: [
      "Delivered a fully responsive website with a modern SaaS UI.",
      "Improved speed, usability, and user engagement.",
      "Clear presentation of product features and value.",
      "Enhanced brand credibility and online presence.",
    ],
    image: "https://i.ibb.co/6GWvX3J/Screenshot-2025-11-20-181855.png",
    bgColor: "bg-[rgb(142,173,213)]",
    // result:
    //   "This project successfully transformed the client’s e-commerce platform into a scalable, user-friendly solution, driving significant growth and efficiency during high-demand period.",
  },
  {
    title: "Socialable",
    industry: "Social Media / Community Platform",
    description:
      "Socialable is a dynamic community platform designed for engaging social interaction. The client wanted a modern, responsive web app with intuitive UI and seamless performance.",
    objective:
      "Build a responsive, user-centric platform with strong branding, smooth navigation across devices, and optimized load times.",
    results: [
      "Successfully delivered a fully responsive web app with clean, modern UI.",
      "Enhanced user engagement with intuitive interactions and fast performance.",
      "Clear presentation of community features and brand identity.",
    ],
    image: "https://i.ibb.co/bjPn9mkw/Screenshot-2025-11-20-182115.png",
    bgColor: "bg-[rgb(212,255,230)]",
    // result:
    //   "This project successfully transformed the client’s e-commerce platform into a scalable, user-friendly solution, driving significant growth and efficiency during high-demand period.",
  },
  {
    title: "SaaS New Template",
    industry: "SaaS / Digital Services",
    description:
      "SaaS New Template is a sleek SaaS website template crafted to deliver a polished brand presence. The client aimed for a modern, responsive site showcasing services, features, and pricing with clarity and style.",
    objective:
      "Develop a fully responsive, brand-aligned landing page with clear messaging, intuitive navigation, and optimized performance for all devices.",
    results: [
      "Delivered a high-quality SaaS template with modern UI.",
      "Smooth cross-device experience and fast loading.",
      "Clear feature, service and pricing presentation.",
      "Strengthened brand identity and online appeal.",
    ],
    image: "https://i.ibb.co/vx9g7LhC/Screenshot-2025-11-20-182502.png",
    bgColor: "bg-[hsl(303,88%,86%)]",
    // result:
    //   "This project successfully transformed the client’s e-commerce platform into a scalable, user-friendly solution, driving significant growth and efficiency during high-demand period.",
  },
];

export default function ShowcaseSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-left max-md:text-sm uppercase tracking-wide text-gray-500">
            Featured Projects
          </p>
          <h2 className="text-5xl max-md:text-4xl text-left font-bold mt-2">
            Showcase of Innovation
          </h2>
          <p className="text-gray-300 mt-4 max-w-3xl  text-left text-3xl max-md:text-xl">
            We take pride in delivering high-impact digital solutions, blending
            advanced development and design to redefine industry standards.
          </p>
        </div>

        {/* Card */}
        <div
          className={` ${projects[current].bgColor}  text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6`}
        >
          <div className="max-md:sticky max-md:-top-24 max-md:bg-opacity-80 max-md:z-10 max-md:pt-2 max-md:pb-2">
            <div className="absolute max-md:relative  ">
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                {projects[current].title}
              </h3>
              <p className="text-gray-600 mb-4 max-md:w-75">
                Client Industry: {projects[current].industry}
              </p>
            </div>
            <div className="absolute ml-[50rem] w-75 max-md:relative max-md:ml-0 max-md:w-50 max-md:-mt-1 ">
              <img src="https://i.ibb.co/5qX9whG/Frame-192.png" alt="" />
            </div>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 mt-20 max-md:hidden max-md:mt-2 -ml-6">
            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[425px]  max-md:h-[340px]"
            />
          </div>

          {/* Content */}
          <div className="flex  mt-20 max-md:mt-1 max-md:overflow-y-auto max-md:overflow-x-hidden max-md:h-full max-md:max-h-[360px] max-md:-p-16 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {/* Image */}
            <div className="flex-shrink-0 mt-20 max-md:flex hidden max-md:mt-2">
              <img
                src={projects[current].image}
                alt={projects[current].title}
                className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[275px]  max-md:h-[440px]"
              />
            </div>
            <div className="reative max-md:absolte max-md:-ml-[273px] max-md:mt-[30rem]">
              <h4 className="font-semibold mb-1 flex  max-md: gap-2 text-2xl">
                <Target className="mt-1" /> Project Description
              </h4>
              <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                {projects[current].description}
              </p>

              <h4 className="font-semibold mb-1 max-md flex gap-2 text-2xl">
                <Crosshair className="mt-1" /> Objective
              </h4>
              <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                {projects[current].objective}
              </p>
            </div>
            <div className="ml-5  max-md:relative  max-md:mt-[63rem]  max-md:-ml-[263px] max-md:w-[800px]   max-md:-m-1">
              <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                <Box className="mt-1" /> Result
              </h4>
              <p className="ml-8">{projects[current].result}</p>
              <ul className="space-y-2 text-gray-800">
                {projects[current].results.map((result, idx) => (
                  <li key={idx} className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1 min-w-5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* See All */}
        <div className="text-left mt-7">
          <a
            href="/portfolio"
            className="bg-[#564AFF] cursor-pointer text-white px-6 py-3 rounded-lg  transition"
          >
            See All →
          </a>
        </div>

        {/* Bottom Navigation */}
        <div className=" flex justify-center cursor-pointer items-end text-right gap-6 -mt-8 ml-[65rem]  max-md:ml-[13rem]">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
