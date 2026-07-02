<script setup lang="ts">
const prizes = [
  { icon: '🖊️', name: 'Esferos', text: 'Lapiceros decorados y de gel de colores.', color: 'var(--pink-hot)' },
  { icon: '💇‍♀️', name: 'Peines', text: 'Peines y accesorios para el cabello.', color: 'var(--lavender)' },
  { icon: '💄', name: 'Maquillaje', text: 'Labiales, brillos y kits de maquillaje mini.', color: 'var(--mint)' },
  { icon: '🧴', name: 'Skincare', text: 'Mascarillas, cremas y cuidado facial.', color: 'var(--yellow-bowl)' },
  { icon: '🎀', name: 'Accesorios', text: 'Moños, ganchos y detalles para el look.', color: 'var(--pink-hot)' },
  { icon: '🌸', name: 'Perfumitos', text: 'Fragancias suaves y mini perfumes.', color: 'var(--lavender)' },
]

function tilt(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  card.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`
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
        Cada tazón está lleno de piezas distintas: entre más figuritas iguales saques, mejor premio te llevas.
      </p>
    </div>

    <div class="prize-grid">
      <div
        class="prize-card"
        v-for="prize in prizes"
        :key="prize.name"
        @mousemove="tilt"
        @mouseleave="resetTilt"
      >
        <span class="prize-icon" :style="{ '--c': prize.color }">{{ prize.icon }}</span>
        <h3>{{ prize.name }}</h3>
        <p>{{ prize.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prizes { padding: 2rem 1.5rem 5rem; max-width: var(--container); margin: 0 auto; }
.prize-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem; }
.prize-card {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 1.8rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 24px -14px rgba(62, 33, 64, 0.18);
  transition: transform 0.15s ease;
  will-change: transform;
}
.prize-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--c) 18%, white);
  font-size: 1.6rem;
  margin-bottom: 0.9rem;
}
.prize-card h3 { font-size: 1.05rem; margin-bottom: 0.3em; }
.prize-card p { font-size: 0.9rem; margin: 0; }

@media (max-width: 800px) { .prize-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 520px) { .prize-grid { grid-template-columns: 1fr; } }
</style>
