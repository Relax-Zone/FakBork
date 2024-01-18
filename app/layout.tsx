import './globals.css'
import Header from './components/Header'

export default function Page({children} : any){
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="max-w-xl min-h-screen shadow mx-auto p-4"></div>
        {children}
      </body>
    </html>
  )
}
