import Image from 'next/image'
import { Bungee_Spice } from 'next/font/google'
const bs =  Bungee_Spice({
  subsets: ['latin'],
  weight: '400',
})
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className={bs.className}>palta</h1>
     <Image
      className='rotate'
      alt="imagen palta"
      src="https://www.pngmart.com/files/15/Avocado-Half-PNG-Transparent.png"
      width={600}
      height={600}>
      </Image>
    </main>
  )
}
