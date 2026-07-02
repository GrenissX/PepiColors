import type { Directive } from 'vue'

// Uso: <section v-reveal> ... </section>
// Añade la clase "reveal" al montar y "reveal-visible" cuando entra en pantalla.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 },
)

export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('reveal')
    observer.observe(el)
  },
}
