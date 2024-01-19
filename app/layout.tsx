import './globals.css'
import Header from './components/Header'
import { Kanit } from 'next/font/google'

const font = Kanit({weight:"400",preload:false})

export default function Page({children} : any){
  return (
    <html lang="en">
      <body className={`min-h-screen ${font.className} bg-zinc-900 text-white`}>
        <Header />
        <div className="max-w-lg shadow mx-auto p-4 bg-zinc-950/50">
        {children}
        </div>
      </body>
    </html>
  )
}
