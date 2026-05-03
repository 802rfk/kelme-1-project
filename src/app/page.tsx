'use client'
import { useEffect, useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import HeroSection from '@/components/ui/HeroSection'
import TechSection from '@/components/ui/TechSection'
import FooterSection from '@/components/ui/FooterSection'

const Scene3D = dynamic(() => import('@/components/canvas/Scene3D'), { ssr: false })

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenis.on('scroll', ScrollTrigger.update)
    const rafCallback = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.destroy()
      gsap.ticker.remove(rafCallback)
    }
  }, [])
  return (
    <main ref={containerRef} className="relative bg-white text-[#1A1A1A]">
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <TechSection />
        <FooterSection />
      </div>
    </main>
  )
}