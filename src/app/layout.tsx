import { ReactQueryProvider } from "@/providers/reactquery-provider"
import "@/styles/globals.css"
import { type Metadata } from "next"
import Header from "./_components/header"
import { Iceland } from "@next/font/google"
import GridPattern from "@/components/magicui/grid-pattern"

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

const iceland = Iceland({
  subsets: ["latin"],
  weight: "400",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactQueryProvider>
      <html lang="en" className={`${iceland.className}`}>
        <body className="relative bg-[url('/images/background.png')] bg-cover bg-fixed bg-center">
          <GridPattern
            width={18}
            height={18}
            x={-1}
            y={-1}
            className="stroke-white/10"
          />
          <div className="absolute inset-0 z-0 bg-black opacity-45"></div>
          <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col">
            <Header />
            {children}
          </div>
        </body>
      </html>
    </ReactQueryProvider>
  )
}
