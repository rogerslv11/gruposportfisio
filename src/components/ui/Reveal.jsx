import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

/**
 * Scroll-reveal wrapper powered by GSAP + ScrollTrigger.
 * - Animates the element (or its [data-rv] children when `stagger` is set).
 * - Skipped entirely when the user prefers reduced motion (content stays visible).
 * - Falls back gracefully: if JS fails, nothing is hidden because the initial
 *   state is only set by GSAP at runtime.
 */
export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  y = 26,
  delay = 0,
  duration = 0.75,
  stagger,
  once = true,
  start = 'top 85%',
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const targets = stagger ? el.querySelectorAll('[data-rv]') : el
    if (stagger && targets.length === 0) return

    const anim = gsap.fromTo(
      targets,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        stagger: stagger || 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      },
    )

    return () => {
      anim.scrollTrigger && anim.scrollTrigger.kill()
      anim.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stagger])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
