'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FooterSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada para el CTA
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Animación para los botones
      gsap.fromTo('.cta-button',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.cta-container',
            start: 'top 85%'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20"
    >
      <div className="text-center px-4">
        <div ref={ctaRef} className="opacity-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-[#1A1A1A]">
            Elige tu medida
          </h2>
          
          <div className="cta-container flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cta-button px-8 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] font-light tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
              ELEGIR TALLA
            </button>
            <button className="cta-button px-8 py-4 bg-[#1A1A1A] text-white font-light tracking-widest hover:bg-[#333] transition-all duration-300">
              COMPRAR AHORA
            </button>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#1A1A1A]/10">
          <p className="text-sm font-light text-[#1A1A1A]/40 tracking-widest">
            KELME NEO M G
          </p>
        </div>
      </div>
    </section>
  )
}
