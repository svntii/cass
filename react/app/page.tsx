"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { ChatUISVG } from "@/components/icons/chatui-svg"


export default function HomePage() {
  const { theme } = useTheme()
  
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <ChatUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

      <div className="mt-2 text-4xl font-bold">Agora</div>

      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-pink-500 p-2 font-semibold"
        href="/login"
      >
        Start Chatting
      </Link>
    </div>
  )
}
