'use client';

import Image from 'next/image'
import { Bungee_Spice } from 'next/font/google'
import React from 'react';
const bs =  Bungee_Spice({
  subsets: ['latin'],
  weight: '400',
})
export default function Home() {
  const [hide, setHide] = React.useState(true);

  function handleClick() {
    setHide(!hide);
  }
  return (
    <main>
      <div className='palta-container'>
        <h1 className={bs.className}>palta</h1>
        <Image
          id='palta'
          className={hide ? 'hide' : 'rotate'}
          alt='imagen palta'
          src='https://www.pngmart.com/files/15/Avocado-Half-PNG-Transparent.png'
          width={600}
          height={600}>
        </Image>
        <button className={'action-button ' + bs.className} onClick={handleClick}>click aqui</button>  
      </div>
    </main>
  )
}
