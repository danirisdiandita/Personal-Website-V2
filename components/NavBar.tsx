"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()

  const isArticles = pathname === "/articles" || pathname.startsWith("/articles/")
  const isProducts = pathname === "/products" || pathname.startsWith("/products/")
  const isExperiences = pathname === "/experiences" || pathname.startsWith("/experiences/")

  // Mobile: Simple stacked buttons style
  const mobileLinkClasses = (active: boolean) =>
    `block w-full border-2 border-black py-3 text-center text-xs font-bold uppercase tracking-wider transition-all ${active
      ? 'bg-black text-[#ffeb3b] shadow-[4px_4px_0_0_rgba(0,0,0,1)]'
      : 'bg-white text-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_0_rgba(0,0,0,1)]'
    }`

  // Desktop: Original pill style
  const desktopLinkClasses = (active: boolean) =>
    `inline-flex items-center justify-center rounded-full border-2 border-black px-4 py-2 text-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 ${active ? 'bg-black text-[#ffeb3b]' : 'bg-white text-black'
    }`

  return (
    <>
      {/* Mobile Navigation - Stacked Cards */}
      <div className="flex w-full flex-col gap-2 px-4 py-4 sm:hidden">
        <Link href="/" className={mobileLinkClasses(pathname === "/")}>
          Home
        </Link>
        <Link href="/articles" className={mobileLinkClasses(isArticles)}>
          Articles
        </Link>
        <Link href="/products" className={mobileLinkClasses(isProducts)}>
          Products
        </Link>
        <Link href="/experiences" className={mobileLinkClasses(isExperiences)}>
          Experiences
        </Link>
      </div>

      {/* Desktop Navigation - Original Style */}
      <div className="hidden w-full justify-center px-4 py-4 sm:flex">
        <nav
          aria-label="Main navigation"
          className="w-full max-w-3xl rounded-3xl border-[3px] border-black bg-white px-4 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
        >
          <ul className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">
            <li>
              <Link href="/" className={desktopLinkClasses(pathname === "/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/articles" className={desktopLinkClasses(isArticles)}>
                Articles
              </Link>
            </li>
            <li>
              <Link href="/products" className={desktopLinkClasses(isProducts)}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/experiences" className={desktopLinkClasses(isExperiences)}>
                Experiences
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavBar