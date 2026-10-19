import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function Counter({ value, suffix = '', duration = 1.6, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const num = parseFloat(value)
    if (Number.isNaN(num) || prefersReducedMotion()) {
      el.textContent = String(value)
      return
    }
    const obj = { v: 0 }
    const anim = gsap.to(obj, {
      v: num,
      duration,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => {
        el.textContent = String(Math.round(obj.v))
      },
    })
    return () => {
      anim.scrollTrigger && anim.scrollTrigger.kill()
      anim.kill()
    }
  }, [value, duration])

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  )
}
