
import { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import { ReactNode } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })


interface RootLayoutProps {
  children: ReactNode
  params: {
    locale: string
  }
}


export const viewport: Viewport = {
  themeColor: "#000000"
}
const session = false;


export default async function RootLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  const cookieStore = cookies()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
            <div className="bg-background text-foreground flex h-dvh flex-col items-center overflow-x-auto">
              {session ? /* <GlobalState>{children}</GlobalState> */ children : children}
            </div>
      </body>
    </html>
  )
}
