<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Stat {
  target: number
  suffix: string
  label: string
  display: string
}

const stats = ref<Stat[]>([
  { target: 2.3, suffix: 'K+', label: 'seguidoras', display: '0' },
  { target: 10.6, suffix: 'K', label: 'me gusta', display: '0' },
  { target: 100, suffix: '%', label: 'pedidos personalizados', display: '0' },
])

const rootEl = ref<HTMLElement | null>(null)
let animated = false

function animateStats() {
  if (animated) return
  animated = true
  const duration = 1200
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    stats.value.forEach((stat) => {
      const value = stat.target * progress
      stat.display = stat.target % 1 === 0 ? Math.round(value).toString() : value.toFixed(1)
    })
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateStats()
        observer.disconnect()
      }
    },
    { threshold: 0.4 },
  )
  if (rootEl.value) observer.observe(rootEl.value)
})
</script>

<template>
  <section class="stats" ref="rootEl">
    <div class="stats-inner">
      <div class="stat" v-for="stat in stats" :key="stat.label">
        <span class="stat-num">{{ stat.display }}{{ stat.suffix }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  background: linear-gradient(135deg, var(--pink-hot), var(--pink-deep));
  padding: 2.2rem 1.5rem;
}
.stats-inner {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.stat-num {
  display: block;
  font-family: var(--font-display);
  font-size: 1.9rem;
  font-weight: 700;
  color: #fff;
  font-variant-numeric: tabular-nums;
}
.stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  letter-spacing: 0.02em;
}
</style>
