"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { ChatUISVG } from "@/components/icons/chatui-svg"
import { FaChurch, FaGlobe, FaWheelchair, FaTransgender } from "react-icons/fa";

export default function HomePage() {
  const { theme } = useTheme()
  
  return (
    <div className="flex size-full flex-col items-center justify-center relative z-10">
      
      <div>
        <ChatUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

     
      <div className="mt-2 text-4xl font-bold">Select Dicussion Topic</div>

      <Link
        className="mt-4 flex w-[500px] items-center justify-center rounded-md bg-gradient-to-r from-pink-400 to-purple-500 p-2 font-semibold"
        href="/chat"
      >
        <FaChurch className="mr-2" /> Religion
      </Link>
      <Link
        className="mt-4 flex w-[500px] items-center justify-center rounded-md bg-gradient-to-r from-pink-400 to-purple-500 p-2 font-semibold"
        href="/chat"
      >
        <FaGlobe className="mr-2" /> Culture
      </Link>
      <Link
        className="mt-4 flex w-[500px] items-center justify-center rounded-md bg-gradient-to-r from-pink-400 to-purple-500 p-2 font-semibold"
        href="/chat"
      >
         <FaWheelchair className="mr-2" /> Disability
      </Link>
      <Link
        className="mt-4 flex w-[500px] items-center justify-center rounded-md bg-gradient-to-r from-pink-400 to-purple-500 p-2 font-semibold"
        href="/chat"
      >
        <FaTransgender className="mr-2" /> Gender
      </Link>
    </div>
  )
}