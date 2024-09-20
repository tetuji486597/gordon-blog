import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop} from 'react-icons/fa'

export default function Navbar({ source }) {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
          <Image
            src={source}
            width={100}
            height={100}
            alt="logo"
          />
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href="/" className="text-white/90 no-underline hover:text-white">Gordon Jin</Link>
            </h1>
            <div>
                <FaYoutube>
                </FaYoutube>
                <FaTwitter>
                </FaTwitter>
                <FaGithub></FaGithub>
                <FaLaptop></FaLaptop>
            </div>
        </div>
    </nav>
  )
}
