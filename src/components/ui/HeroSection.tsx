'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada para el título
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: 'power3.out',
          delay: 0.5
        }
      )

      // Animación para el subtítulo
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.8
        }
      )

      // Animación del hint de scroll
      gsap.fromTo(scrollHintRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 1.5
        }
      )

      // Animación de pulso para el hint
      gsap.to(scrollHintRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center"
      style={{ minHeight: '100vh' }}
    >
      {/* Capa semi-transparente para legibilidad */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      
      <div className="relative z-10 text-center px-4">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#1A1A1A] mb-4"
          style={{ opacity: 0 }}
        >
          Kelme Neo M G
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl font-light text-[#1A1A1A]/70 tracking-wide"
          style={{ opacity: 0 }}
        >
          Precisión. Potencia. Rendimiento.
        </p>
      </div>

      <div 
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        style={{ opacity: 0 }}
      >
        <p className="text-sm font-light text-[#1A1A1A]/50 tracking-widest uppercase">
          Scroll para explorar
        </p>
        <div className="mt-2 animate-bounce">
          <svg 
            className="w-6 h-6 mx-auto text-[#1A1A1A]/50" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
