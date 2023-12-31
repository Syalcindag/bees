import React from "react"
import Benefit from "./components/Benefit"
import Featured from "./components/Featured"
import Hero from "./components/Hero"
import Info from "./components/Info"

export const metadata = {
  title: 'Home Page',
}

export default function Home() {
  return (
    <>
      <Hero/>
      <Info/>
      <Featured/>
      <Benefit/>
    </>
  )
}
