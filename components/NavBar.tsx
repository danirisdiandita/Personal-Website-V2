"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()

  const baseLinkClasses =
    "inline-flex items-center rounded-full border-2 border-black px-4 py-2 shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"

  const getLinkClasses = (active: boolean) =>
    active
      ? `${baseLinkClasses} bg-black text-[#ffeb3b]`
      : `${baseLinkClasses} bg-white text-black`

  const isArticles = pathname === "/articles" || pathname.startsWith("/articles/")
  const isProjects = pathname === "/projects" || pathname.startsWith("/projects/")

  return (
    <div className="flex w-full justify-center px-4 py-4">
      <nav
        aria-label="Main navigation"
        className="w-full max-w-3xl rounded-3xl border-[3px] border-black bg-white px-4 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
      >
        <ul className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">
          <li>
            <Link href="/" className={getLinkClasses(pathname === "/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/articles" className={getLinkClasses(isArticles)}>
              Articles
            </Link>
          </li>
          <li>
            <Link href="/projects" className={getLinkClasses(isProjects)}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar