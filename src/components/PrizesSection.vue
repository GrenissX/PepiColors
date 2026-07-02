<script setup lang="ts">
import { ref } from 'vue'
import { prizeItems } from '../data/prizes'

const track = ref<HTMLElement | null>(null)

function scrollByCards(dir: 1 | -1) {
  if (!track.value) return
  const firstCard = track.value.querySelector('.prize-card') as HTMLElement | null
  const cardWidth = firstCard?.offsetWidth ?? 150
  track.value.scrollBy({ left: (cardWidth + 16) * 3 * dir, behavior: 'smooth' })
}

function tilt(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  card.style.transform = `perspective(600px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`
}
function resetTilt(e: MouseEvent) {
  ;(e.currentTarget as HTMLElement).style.transform = ''
}
</script>

<template>
  <section class="prizes" id="premios" v-reveal>
    <div class="section-head">
      <p class="eyebrow">La cucharada trae</p>
      <h2>Premios que puedes encontrar</h2>
      <p class="section-sub">
        Desliza para ver los {{ prizeItems.length }}+ premios que pueden salir en tu cucharada.
      </p>
    </div>

    <div class="carousel">
      <button class="carousel-arrow left" aria-label="Ver premios anteriores" @click="scrollByCards(-1)">‹</button>

      <div class="carousel-track" ref="track">
        <div
          class="prize-card"
          v-for="prize in prizeItems"
          :key="prize.name"
          @mousemove="tilt"
          @mouseleave="resetTilt"
        >
          <span class="prize-icon" :style="{ '--c': prize.color }">{{ prize.icon }}</span>
          <h3>{{ prize.name }}</h3>
          <p>{{ prize.gridText }}</p>
        </div>
      </div>

      <button class="carousel-arrow right" aria-label="Ver más premios" @click="scrollByCards(1)">›</button>
    </div>

    <p class="carousel-hint">👉 desliza para ver todos los premios</p>
  </section>
</template>

<style scoped>
.prizes { padding: 2rem 0 5rem; max-width: var(--container); margin: 0 auto; }
.section-head { padding: 0 1.5rem; }

.carousel {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0 1.5rem;
}

.carousel-track {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0.5rem 0.2rem 1rem;
  scrollbar-width: none;
  -webkit-mask-image: linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent);
  mask-image: linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent);
}
.carousel-track::-webkit-scrollbar { display: none; }

.prize-card {
  scroll-snap-align: start;
  flex: 0 0 150px;
  background: #fff;
  border-radius: var(--radius-md);
  padding: 1.3rem 1rem;
  text-align: center;
  box-shadow: 0 8px 24px -14px rgba(62, 33, 64, 0.18);
  transition: transform 0.15s ease;
  will-change: transform;
}
.prize-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--c) 18%, white);
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
}
.prize-card h3 { font-size: 0.92rem; margin-bottom: 0.25em; }
.prize-card p { font-size: 0.78rem; margin: 0; }

.carousel-arrow {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #fff;
  box-shadow: var(--shadow-card);
  font-size: 1.4rem;
  line-height: 1;
  color: var(--pink-deep);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, transform 0.15s ease;
}
.carousel-arrow:hover { background: var(--pink-soft); transform: scale(1.05); }

.carousel-hint {
  text-align: center;
  font-size: 0.82rem;
  color: var(--plum-soft);
  margin: 0.4rem 0 0;
}

@media (max-width: 640px) {
  .carousel-arrow { display: none; }
  .carousel { padding: 0 1rem; }
}
</style>
