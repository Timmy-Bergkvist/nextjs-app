'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import "leaflet/dist/leaflet.css";

const Map = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function Home(){

  return (
      <Map />
  )
}
