"use client"
import React from 'react'

export default function HeroSection() {
  return (
    <main className="cursor-pointer" onClick={() => window.scrollTo({ top: document.getElementById('product')?.offsetTop, behavior: 'smooth' })}>
            <img src="/bannerimg.png" alt="Hero Image" />
          </main>
  )
}
