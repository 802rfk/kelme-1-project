'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TechCardProps {
  number: string
  title: string
  description: string
  delay?: number
}

function TechCard({ number, title, description, delay = 0 }: TechCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    gsap.fromTo(cardRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        delay: delay,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [delay])

  return (
    <div 
      ref={cardRef}
      className="mb-12 opacity-0"
    >
      <span className="text-sm font-medium text-[#1A1A1A]/40 tracking-widest">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-light mt-2 mb-3 text-[#1A1A1A]">
        {title}
      </h3>
      <p className="text-base font-light text-[#1A1A1A]/70 leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  )
}

export default function TechSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título de sección
      gsap.fromTo('.tech-title',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tech-title',
            start: 'top 80%'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="tech-title text-4xl md:text-5xl lg:text-6xl font-light mb-16 opacity-0 text-[#1A1A1A]">
          Tecnología
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Tarjetas técnicas a la izquierda */}
          <div className="space-y-8">
            <TechCard 
              number="01"
              title="Microfiber de Alta Densidad"
              description="Material sintético premium que ofrece durabilidad excepcional y confort superior en cada partido."
              delay={0.1}
            />
            <TechCard 
              number="02"
              title="Estabilidad Multi-Terreno"
              description="Suela diseñada para adaptarse a superficies de césped natural y artificial con máxima tracción."
              delay={0.2}
            />
            <TechCard 
              number="03"
              title="Sistema de Ajuste Precision"
              description="Cordones estratégicamente posicionados para un ajuste personalizado y perfecto al pie."
              delay={0.3}
            />
            <TechCard 
              number="04"
              title="Talonera Ergonómica"
              description="Diseño anatómico que brinda soporte y estabilidad durante movimientos rápidos y cambios de dirección."
              delay={0.4}
            />
          </div>

          {/* Espacio para interacción 3D a la derecha */}
          <div className="hidden lg:block relative">
            <div className="sticky top-1/2 -translate-y-1/2">
              <div className="text-center">
                <p className="text-sm font-light text-[#1A1A1A]/50 tracking-widest uppercase mb-4">
                  Interactúa con el modelo
                </p>
                <p className="text-base font-light text-[#1A1A1A]/70">
                  Usa el ratón para rotar y hacer zoom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
