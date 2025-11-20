"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Crosshair, Target, Box } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import Service2 from "../components/servicecomponents/Service2";
import WhyChooseUs from "../components/servicecomponents/WhyChooseUs";
import CaseStudySlider from "../components/CaseStudySlider";
import CTASection from "../components/CTASection";
import WebsiteService from "../components/servicecomponents/WebsiteService";
import WhatWeOffer from "../components/servicecomponents/WhatWeOffer";
import TeamSection from "../components/aboutcomponents/TeamSection";
import CoreValues from "../components/aboutcomponents/CoreValues";
import ShowcaseSection from "../components/ShowcaseSlider";

export default function PortfolioClient() {
  const canvasRef = useRef(null);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setContentLoaded(true);
  }, []);

  // Background dots animation
  useEffect(() => {
    if (!contentLoaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, [contentLoaded]);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">
        {/* Background Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Overlay Gradient (optional for depth) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto mt-20 text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 20,
            }}
            transition={{ duration: 0.8 }}
            className="bg-white text-black font-medium text-sm md:text-base rounded-3xl shadow-lg inline-flex items-center justify-center px-6 py-2 mb-8"
          >
            Our Portfolio of Excellence 
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 20,
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-7xl max-md:text-4xl font-bold leading-tight mb-6"
          >
            Explore the innovative projects that define Reavyn
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 10,
            }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-300 mb-10 leading-relaxed"
          >
            From AI integrations to custom apps, see how we deliver results.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: contentLoaded ? 1 : 0,
              y: contentLoaded ? 0 : 30,
            }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="inline-block bg-gradient-to-r hover:bg-[#564AFF] border-2 border-[#756BFF] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
          >
            Request a Strategy
          </motion.a>
        </div>
      </section>

      <ShowcaseSection />

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <p className="text-gray-400 text-base mb-1">
            Designed to the last detail.
          </p>
          <h2 className="text-2xl max-md:text-4xl font-bold mb-6">
            Full Project Gallery
          </h2>
          <p className="max-w-4xl  text-4xl text-gray-200 mb-12">
            Explore our collection of digital solutions — a fusion of
            cutting-edge development and refined design, each crafted to elevate
            standards and inspire progress.
          </p>

          {/* Project Card */}
          <div className="bg-[#8EADD5]  max-md:h-[84rem] text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="absolute ">
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                Diztoversity
              </h3>
              <p className="text-gray-600 mb-4 max-md:w-75">
                Client Industry: Education / Community Platform
              </p>
            </div>
            <div className="absolute ml-[50rem] w-75 max-md:relative max-md:ml-0 max-md:w-50 max-md:mt-24 ">
              <img src="https://i.ibb.co/5qX9whG/Frame-192.png" alt="" />
            </div>
            {/* Image */}
            <div className="flex-shrink-0 mt-20 max-md:mt-2">
              <img
                src="https://i.ibb.co/27sW37qZ/Screenshot-2025-10-07-034243.png"
                alt=""
                className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[425px]  max-md:h-[340px]"
              />
            </div>

            {/* Content */}
            <div className="flex  mt-20  max-md:mt-3">
              <div className="reative">
                <h4 className="font-semibold mb-1 flex  max-md: gap-2 text-2xl">
                  <Target /> Project Description
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  Diztoversity is a platform designed to bring together
                  educational resources and community-driven learning. The
                  client wanted a professional, modern, and mobile-friendly
                  website to showcase their vision and provide a smooth
                  experience for visitors.
                </p>

                <h4 className="font-semibold mb-1 flex gap-2 text-2xl">
                  <Crosshair /> Objective
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  Create a responsive, user-friendly website Build a clean,
                  minimal design with strong brand messaging Ensure smooth
                  navigation across devices Optimize for performance and SEO.
                </p>
              </div>
              <div className="ml-5  max-md:absolute  max-md:mt-[30rem]  max-md:w-[280px]  max-md:-m-1">
                <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                  <Box /> Result
                </h4>
                {/* <p className="ml-8">{projects[current].result}</p> */}
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Delivered a fully responsive website with a modern UI/UX.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>Improved usability and faster page load times.</span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>Clear presentation of mission and services.</span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>Enhanced brand credibility and online presence.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#D4FFE6] max-md:h-[85rem] mt-10 text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="absolute ">
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                Hunk Toofan Project
              </h3>
              <p className="text-gray-600 mb-4 max-md:w-75">
                Client Industry: E-commerce / Retail
              </p>
            </div>
            <div className="absolute ml-[50rem] w-75 max-md:relative max-md:ml-0 max-md:w-50 max-md:mt-20 ">
              <img src="https://i.ibb.co/5qX9whG/Frame-192.png" alt="" />
            </div>
            {/* Image */}
            <div className="flex-shrink-0 mt-20 max-md:mt-2">
              <img
                src="https://i.ibb.co/CD0Qknv/Screenshot-2025-10-07-034916.png"
                alt=""
                className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[425px]  max-md:h-[340px]"
              />
            </div>

            {/* Content */}
            <div className="flex  mt-20  max-md:mt-1">
              <div className="reative">
                <h4 className="font-semibold mb-1 flex  max-md: gap-2 text-2xl">
                  <Target /> Project Description
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  The Hunk Toofan project aimed to create a modern
                  e-commerce-style website that is visually appealing and highly
                  interactive. The client wanted a platform that not only looks
                  premium but also delivers a seamless user journey.
                </p>

                <h4 className="font-semibold mb-1 flex gap-2 text-2xl">
                  <Crosshair /> Objective
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  Design an elegant, modern website with intuitive navigation
                  Optimize site performance for faster load times Ensure
                  mobile-first design for better reach Provide easy content
                  management for client updates.
                </p>
              </div>
              <div className="ml-5  max-md:absolute  max-md:mt-[30rem]  max-md:w-[280px]  max-md:-m-1">
                <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                  <Box /> Result
                </h4>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Successfully launched a visually engaging and responsive
                      site.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Received positive customer feedback on usability and
                      design.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Increased user engagement with smoother browsing
                      experience.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Delivered project on time with high client satisfaction
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#FBBEF8]  max-md:h-[90rem] mt-10 text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="absolute ">
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                Medilife Health Care
              </h3>
              <p className="text-gray-600 mb-4 max-md:w-75">
                Client Industry: Healthcare / Medical Services
              </p>
            </div>
            <div className="absolute ml-[50rem] w-75 max-md:relative max-md:ml-0 max-md:w-50 max-md:mt-24 ">
              <img src="https://i.ibb.co/5qX9whG/Frame-192.png" alt="" />
            </div>
            {/* Image */}
            <div className="flex-shrink-0 mt-20 max-md:mt-2">
              <img
                src="https://i.ibb.co/Xx2yqhh8/Screenshot-2025-10-07-035315.png"
                alt=""
                className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[425px]  max-md:h-[340px]"
              />
            </div>

            {/* Content */}
            <div className="flex  mt-20  max-md:mt-3">
              <div className="reative">
                <h4 className="font-semibold mb-1 flex  max-md: gap-2 text-2xl">
                  <Target /> Project Description
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  Medilife Health Care is a global healthcare service provider.
                  They needed a professional online presence to communicate
                  their wide range of services and credibility in the healthcare
                  industry. The project focused on building trust, clarity, and
                  accessibility for patients and partners.
                </p>

                <h4 className="font-semibold mb-1 flex gap-2 text-2xl">
                  <Crosshair /> Objective
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  Build a professional and trustworthy healthcare website Ensure
                  responsive design across all devices Present complex medical
                  information clearly and simply Improve accessibility and ease
                  of navigation.
                </p>
              </div>
              <div className="ml-5  max-md:absolute  max-md:mt-[33rem]  max-md:w-[280px]  max-md:-m-1">
                <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                  <Box /> Result
                </h4>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Delivered a fast, responsive website optimized for
                      patients and partners.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Clear service presentation leading to improved patient
                      inquiries.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>Strengthened online credibility and trust.</span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Enhanced client visibility and user engagement online.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#8EADD5]  max-md:h-[84rem] mt-10 text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="absolute ">
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                LaunchNest
              </h3>
              <p className="text-gray-600 mb-4 max-md:w-75">
                Client Industry: SaaS / Startup Platform
              </p>
            </div>
            <div className="absolute ml-[50rem] w-75 max-md:relative max-md:ml-0 max-md:w-50 max-md:mt-24 ">
              <img src="https://i.ibb.co/5qX9whG/Frame-192.png" alt="" />
            </div>
            {/* Image */}
            <div className="flex-shrink-0 mt-20 max-md:mt-2">
              <img
                src="https://i.ibb.co/6GWvX3J/Screenshot-2025-11-20-181855.png"
                alt=""
                className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[425px]  max-md:h-[340px]"
              />
            </div>

            {/* Content */}
            <div className="flex  mt-20  max-md:mt-3">
              <div className="reative">
                <h4 className="font-semibold mb-1 flex  max-md: gap-2 text-2xl">
                  <Target /> Project Description
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  LaunchNest is a modern SaaS landing page built to help
                  startups showcase their product with a clean, high-converting
                  design. The client wanted a fast, responsive, and visually
                  appealing website with smooth animations and clear messaging.
                </p>

                <h4 className="font-semibold mb-1 flex gap-2 text-2xl">
                  <Crosshair /> Objective
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  Create a responsive, minimal, and user-friendly landing page
                  Ensure smooth navigation, strong brand identity, and optimized
                  performance.
                </p>
              </div>
              <div className="ml-5  max-md:absolute  max-md:mt-[30rem]  max-md:w-[280px]  max-md:-m-1">
                <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                  <Box /> Result
                </h4>
                {/* <p className="ml-8">{projects[current].result}</p> */}
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Delivered a fully responsive website with a modern SaaS
                      UI.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>Improved speed, usability, and user engagement.</span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Clear presentation of product features and value.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>Enhanced brand credibility and online presence.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#D4FFE6] max-md:h-[85rem] mt-10 text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="absolute ">
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                Socialable
              </h3>
              <p className="text-gray-600 mb-4 max-md:w-75">
                Client Industry: Social Media / Community Platform
              </p>
            </div>
            <div className="absolute ml-[50rem] w-75 max-md:relative max-md:ml-0 max-md:w-50 max-md:mt-20 ">
              <img src="https://i.ibb.co/5qX9whG/Frame-192.png" alt="" />
            </div>
            {/* Image */}
            <div className="flex-shrink-0 mt-20 max-md:mt-2">
              <img
                src="https://i.ibb.co/bjPn9mkw/Screenshot-2025-11-20-182115.png"
                alt=""
                className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[425px]  max-md:h-[340px]"
              />
            </div>

            {/* Content */}
            <div className="flex  mt-20  max-md:mt-1">
              <div className="reative">
                <h4 className="font-semibold mb-1 flex  max-md: gap-2 text-2xl">
                  <Target /> Project Description
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  Socialable is a dynamic community platform designed for
                  engaging social interaction. The client wanted a modern,
                  responsive web app with intuitive UI and seamless performance.
                </p>

                <h4 className="font-semibold mb-1 flex gap-2 text-2xl">
                  <Crosshair /> Objective
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  Build a responsive, user-centric platform with strong
                  branding, smooth navigation across devices, and optimized load
                  times.
                </p>
              </div>
              <div className="ml-5  max-md:absolute  max-md:mt-[30rem]  max-md:w-[280px]  max-md:-m-1">
                <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                  <Box /> Result
                </h4>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Successfully delivered a fully responsive web app with
                      clean, modern UI.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Clear presentation of community features and brand
                      identity.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Enhanced user engagement with intuitive interactions and
                      fast performance.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#FBBEF8]  max-md:h-[90rem] mt-10 text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="absolute ">
              <h3 className="text-3xl max-md:text-2xl font-semibold">
                SaaS New Template
              </h3>
              <p className="text-gray-600 mb-4 max-md:w-75">
                Client Industry: SaaS / Digital Services
              </p>
            </div>
            <div className="absolute ml-[50rem] w-75 max-md:relative max-md:ml-0 max-md:w-50 max-md:mt-24 ">
              <img src="https://i.ibb.co/5qX9whG/Frame-192.png" alt="" />
            </div>
            {/* Image */}
            <div className="flex-shrink-0 mt-20 max-md:mt-2">
              <img
                src="https://i.ibb.co/vx9g7LhC/Screenshot-2025-11-20-182502.png"
                alt=""
                className="rounded-lg shadow-md w-[418px] h-[502px] max-md:w-[425px]  max-md:h-[340px]"
              />
            </div>

            {/* Content */}
            <div className="flex  mt-20  max-md:mt-3">
              <div className="reative">
                <h4 className="font-semibold mb-1 flex  max-md: gap-2 text-2xl">
                  <Target /> Project Description
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  SaaS New Template is a sleek SaaS website template crafted to
                  deliver a polished brand presence. The client aimed for a
                  modern, responsive site showcasing services, features, and
                  pricing with clarity and style.
                </p>

                <h4 className="font-semibold mb-1 flex gap-2 text-2xl">
                  <Crosshair /> Objective
                </h4>
                <p className="text-gray-700 mb-3 ml-8 w-[230px] text-md">
                  Develop a fully responsive, brand-aligned landing page with
                  clear messaging, intuitive navigation, and optimized
                  performance for all devices.
                </p>
              </div>
              <div className="ml-5  max-md:absolute  max-md:mt-[33rem]  max-md:w-[280px]  max-md:-m-1">
                <h4 className="font-semibold mb-2 flex text-2xl gap-2">
                  <Box /> Result
                </h4>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Delivered a high-quality SaaS template with modern UI.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Smooth cross-device experience and fast loading.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>
                      Clear feature, service and pricing presentation.
                    </span>
                  </li>
                  <li className="flex items-start ml-8 mt-2 gap-2">
                    <FaCheckCircle className="text-black mt-1  min-w-5" />
                    <span>Strengthened brand identity and online appeal.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CaseStudySlider />

      <section className="relative w-full py-16 px-6 text-center text-white bg-gradient-to-b from-[#0d0d0d] to-[#111]">
        <div className="max-w-4xl mx-auto">
          {/* Small Top Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl mb-1 max-md:text-xl font-bold text-gray-300"
          >
            Inspired? Let's Collaborate
          </motion.p>

          {/* Big Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl max-md:text-4xl leading-snug mb-8"
          >
            Bring your vision to life with our expertise.
          </motion.h2>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium 
                     bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg hover:opacity-90 transition"
          >
            Discuss Project →
          </motion.a>
        </div>
      </section>
    </>
  );
}
