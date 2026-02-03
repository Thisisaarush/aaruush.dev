"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  return (
    <nav className="flex items-center justify-between mb-12 text-sm relative">
      <Link href="/">
        <Image
          src={"/aarush-tanwar-logo.svg"}
          alt="aarush tanwar"
          width={30}
          height={30}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-accent transition-colors duration-150"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="text-accent transition-colors duration-150 hover:underline hover:underline-offset-4 flex items-center gap-2 group"
        >
          <p>Contact</p>
          <ArrowUpRight
            size={14}
            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-150"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 hover:text-accent transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 mt-2 w-48 bg-black border border-accent/20 p-4 flex flex-col gap-4 md:hidden z-50"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-accent transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-accent transition-colors duration-150 hover:underline hover:underline-offset-4 flex items-center gap-2 group"
          >
            <p>Contact</p>
            <ArrowUpRight
              size={14}
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-150"
            />
          </Link>
        </div>
      )}
    </nav>
  )
}
