import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// useIsomorphicLayoutEffect avoids SSR warnings and runs after paint on client.
export const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useEffect : useEffect

/**
 * Small helper to build scoped GSAP contexts that auto-revert on unmount.
 * Returns a ref to attach to the scope element.
 */
export function useGsapContext(setup, deps = []) {
  const scope = useRef(null)
  useEffect(() => {
    if (!scope.current) return
    const ctx = gsap.context(setup, scope)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return scope
}
