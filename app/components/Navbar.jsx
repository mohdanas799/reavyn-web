"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/casestudies" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  // { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0b0cf7] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 w-[206px] h-[62px] text-xl font-bold">
          <img src="/Reavyn.svg" alt=""className="px-2 py-1" />          
        </Link>

        {/* Desktop Menu */}
        <div className="hidden  md:flex gap-8 items-center ">
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              // whileHover={{ scale: 1.1, color: "" }}
              // transition={{ type: "spring", stiffness: 300 }}
              className=""
            >
              <Link href={link.href} className=" transition">
                {link.name}
              </Link>
            </motion.div>
          ))}
         
        </div>
         <Link
            href="/contact"
            className="bg-blue-600 max-md:hidden hover:bg-blue-700 px-4 py-2 ml-20 rounded-lg font-medium transition"
          >
            Get in Touch
          </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg "
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-[#0A0B0C99] px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="block py-2  transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-center transition"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
