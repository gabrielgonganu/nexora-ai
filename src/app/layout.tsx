import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geist = Geist({subsets:["latin"],variable:"--font-geist",display:"swap"});
const mono = Geist_Mono({subsets:["latin"],variable:"--font-geist-mono",display:"swap"});
export const metadata:Metadata = {title:{default:"NEXORA AI — Intelligence in Motion",template:"%s | NEXORA AI"},description:"NEXORA AI is a fictional bilingual portfolio experience exploring intelligent workflow automation, business insights and connected interfaces.",icons:{icon:"/nexora-mark.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>}
