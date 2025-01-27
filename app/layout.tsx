"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import './globals.css'


const links = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot passsword', href: '/forgot-password' }
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
   const pathN = usePathname();

  return (
    <html lang="en">
      <body>
       
        <header>Header</header>
        {
          links.map(link => {
            const isActive = pathN.startsWith(link.href);
           return (
            <Link className={isActive ? "text-red-300" : "font-bold" } href={link.href} key={link.name}> {link.name} </Link>
           )
            
            
          })

        }
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  )
}