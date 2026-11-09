<script setup lang="ts">
import { prizeItems, type PrizeItem } from '../data/prizes'

// Dos filas con premios distintos que se mueven en direcciones opuestas
const half = Math.ceil(prizeItems.length / 2)
const rows: PrizeItem[][] = [prizeItems.slice(0, half), prizeItems.slice(half)]
</script>

<template>
  <section class="prizes" id="premios" v-reveal>
    <div class="section-head">
      <p class="eyebrow">La cucharada trae</p>
      <h2>Premios que puedes encontrar</h2>
      <p class="section-sub">Más de {{ prizeItems.length }} premios pueden salir en tu cucharada. ¿Cuál te tocará?</p>
    </div>

    <div class="band" role="region" aria-label="Premios que pueden salir en tu cucharada">
      <div class="row" v-for="(row, r) in rows" :key="r" aria-hidden="true">
        <div class="track" :class="{ reverse: r === 1 }">
          <template v-for="g in 2" :key="g">
            <span class="chip" v-for="p in row" :key="`${g}-${p.name}`" :title="p.gridText" :style="{ '--c': p.color }">
              <span class="chip-icon">{{ p.icon }}</span>{{ p.name }}
            </span>
          </template>
        </div>
      </div>

      <ul class="sr-only">
        <li v-for="p in prizeItems" :key="p.name">{{ p.name }}: {{ p.gridText }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.prizes { padding: 2rem 0 6rem; overflow: hidden; }
.section-head { padding: 0 1.5rem; }

.band {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem -3rem 0;
  padding: 1.8rem 0;
  background: linear-gradient(135deg, var(--pink-hot), var(--pink-deep));
  transform: rotate(1.2deg);
  overflow: hidden;
}
.row { overflow: hidden; }

.track {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: scroll 60s linear infinite;
}
.track.reverse { animation-direction: reverse; animation-duration: 70s; }
.band:hover .track { animation-play-state: paused; }

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 1.3rem 0.45rem 0.45rem;
  background: #fff;
  border-radius: 999px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--plum);
  white-space: nowrap;
  box-shadow: 0 8px 16px -10px rgba(62, 33, 64, 0.6);
}
.chip-icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--c) 28%, white);
  font-size: 1.3rem;
}

.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@keyframes scroll { to { transform: translateX(-50%); } }

/* Con "reducir movimiento" activado, las filas se pueden deslizar a mano */
@media (prefers-reduced-motion: reduce) {
  .track { animation: none; }
  .row { overflow-x: auto; }
}
</style>
