import { Send , User2 } from 'lucide-react'
import Link from 'next/link'

export default function Header(){
    return(
       <div className='w-full shadow-lg p-4 flex justify-between items-center bg-zinc-950/50 backdrop-blur-xl top-0 left-0'>
            <Link href="/" className="flex items-center text-2xl font-bold">
                <Send className='mr-2' />
                FakBork | 

            </Link>
            <div>
                <Link href="/me" className='p-2 border-zinc-300 border inline-block rounded-lg hover:shadow-xl'>
                <User2 />
                </Link>
            </div>
       </div>
    )
}