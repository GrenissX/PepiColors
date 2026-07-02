<script setup lang="ts">
import { reactive, ref } from 'vue'

interface Bead {
  id: number
  x: number
  y: number
  size: number
  color: string
  tx: string
  popped: boolean
}

interface Prize {
  emoji: string
  text: string
}

const colors = ['#FF4FA0', '#B18CFF', '#5FE0BE', '#FFC93C', '#FF8FC6', '#8FD9FF']

const prizes: Prize[] = [
  { emoji: '🖊️', text: '¡Tu cucharada trajo esferos de gel para tu cartuchera!' },
  { emoji: '💇‍♀️', text: 'Salieron piezas de peines y accesorios para el cabello.' },
  { emoji: '💄', text: '¡Premio de belleza! Te llevas un kit de maquillaje mini.' },
  { emoji: '🧴', text: 'Tu cucharada trae skincare: mascarilla y crema facial.' },
  { emoji: '🎀', text: 'Salieron moños y ganchos para completar tu look.' },
  { emoji: '🌸', text: '¡Aroma sorpresa! Un perfumito se sumó a tu pedido.' },
]

let uid = 0
function makeBead(): Bead {
  return {
    id: uid++,
    x: 6 + Math.random() * 88,
    y: 30 + Math.random() * 62,
    size: 8 + Math.random() * 10,
    color: colors[Math.floor(Math.random() * colors.length)],
    tx: `${(Math.random() * 80 - 40).toFixed(0)}px`,
    popped: false,
  }
}

const beads = reactive<Bead[]>(Array.from({ length: 46 }, makeBead))
const scooping = ref(false)
const disabled = ref(false)
const showResult = ref(false)
const result = ref<Prize>(prizes[0])

function scoop() {
  if (disabled.value) return
  disabled.value = true
  scooping.value = true
  showResult.value = false

  const available = beads.filter((b) => !b.popped)
  const count = 5 + Math.floor(Math.random() * 4)
  const chosen = available.sort(() => Math.random() - 0.5).slice(0, count)
  chosen.forEach((b) => (b.popped = true))

  setTimeout(() => {
    result.value = prizes[Math.floor(Math.random() * prizes.length)]
    showResult.value = true
    scooping.value = false
  }, 550)

  setTimeout(() => {
    chosen.forEach((b) => {
      const idx = beads.indexOf(b)
      if (idx !== -1) beads.splice(idx, 1, makeBead())
    })
    disabled.value = false
  }, 1000)
}
</script>

<template>
  <div class="scoop-widget" :class="{ scooping }">
    <div class="bowl">
      <div class="bowl-shine"></div>
      <div class="beads">
        <span
          v-for="bead in beads"
          :key="bead.id"
          class="bead"
          :class="{ pop: bead.popped }"
          :style="{
            '--s': bead.size + 'px',
            '--bc': bead.color,
            '--tx': bead.tx,
            left: bead.x + '%',
            top: bead.y + '%',
          }"
        ></span>
      </div>
      <div class="spoon">
        <div class="spoon-handle"></div>
        <div class="spoon-head"></div>
      </div>
    </div>

    <button class="scoop-btn" :disabled="disabled" @click="scoop">
      <span>{{ disabled ? 'Sacando...' : 'Sacar una cucharada' }}</span>
    </button>

    <Transition name="pop-in">
      <div v-if="showResult" class="result-card" role="status" aria-live="polite">
        <span class="result-emoji">{{ result.emoji }}</span>
        <p class="result-text">{{ result.text }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.scoop-widget {
  position: relative;
  width: min(380px, 88vw);
}

.bowl {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 0.72;
  background: linear-gradient(180deg, #ffd65c, var(--yellow-bowl));
  border-radius: 0 0 50% 50% / 0 0 65% 65%;
  border-top: 8px solid #ffe79b;
  overflow: hidden;
  box-shadow: var(--shadow-card), inset 0 -14px 24px rgba(0, 0, 0, 0.08);
}

.bowl-shine {
  position: absolute;
  top: 6%;
  left: 8%;
  width: 34%;
  height: 20%;
  background: rgba(255, 255, 255, 0.45);
  border-radius: 50%;
  filter: blur(2px);
}

.beads {
  position: absolute;
  inset: 0;
}

.bead {
  position: absolute;
  width: var(--s, 14px);
  height: var(--s, 14px);
  border-radius: 50%;
  background: var(--bc, var(--pink-hot));
  box-shadow:
    inset -2px -2px 3px rgba(0, 0, 0, 0.18),
    inset 2px 2px 2px rgba(255, 255, 255, 0.4);
  transition:
    transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.5s ease;
}
.bead.pop {
  transform: translate(var(--tx, 0), -160px) rotate(180deg) scale(0.6);
  opacity: 0;
}

.spoon {
  position: absolute;
  right: 6%;
  bottom: -6%;
  width: 34%;
  transform-origin: 70% 90%;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.spoon-handle {
  width: 14%;
  height: 70px;
  margin: 0 auto;
  background: linear-gradient(180deg, #ff8fc6, var(--pink-hot));
  border-radius: 8px;
}
.spoon-head {
  width: 100%;
  aspect-ratio: 1.4 / 1;
  margin-top: -6px;
  background: linear-gradient(180deg, #ffafd6, var(--pink-hot));
  border-radius: 50%;
  border: 3px solid #fff;
}
.scoop-widget.scooping .spoon {
  transform: translateY(-46px) rotate(-24deg);
}

.scoop-btn {
  display: block;
  width: 100%;
  margin-top: 1.4rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  padding: 0.9em 1em;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, var(--lavender), var(--pink-hot));
  box-shadow: 0 10px 22px -8px rgba(177, 140, 255, 0.6);
  transition: transform 0.15s ease;
}
.scoop-btn:hover { transform: translateY(-2px); }
.scoop-btn:disabled { opacity: 0.7; cursor: default; transform: none; }

.result-card {
  margin-top: 1rem;
  background: #fff;
  border-radius: var(--radius-md);
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: var(--shadow-card);
}
.result-emoji { font-size: 2rem; }
.result-text { margin: 0; font-weight: 600; color: var(--plum); font-size: 0.95rem; }

/* Vue <Transition name="pop-in"> hooks */
.pop-in-enter-active { transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
.pop-in-leave-active { transition: opacity 0.2s ease; }
.pop-in-enter-from { opacity: 0; transform: translateY(8px) scale(0.96); }
.pop-in-leave-to { opacity: 0; }
</style>
