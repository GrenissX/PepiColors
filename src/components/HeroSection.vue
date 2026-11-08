<script setup lang="ts">
import { CONTACT, PACKS, money } from '../composables/useConfig'
import ScoopWidget from './ScoopWidget.vue'

const items = ['Esferos', 'Peines', 'Maquillaje mini', 'Stickers', 'Diademas', 'Skincare', 'Squishys', 'Cápsulas sorpresa']
</script>

<template>
  <section class="hero" id="top">
    <span class="blob blob-pink"></span>
    <span class="blob blob-lav"></span>

    <div class="hero-inner">
      <div class="hero-copy">
        <p class="pill">✨ Pedidos personalizados a domicilio</p>
        <h1>
          <span class="l1">Cada cucharada</span>
          <span class="l2">es una sorpresa</span>
        </h1>
        <p class="hero-sub">
          Metemos la mano al tazón y sacamos tu pedido: esferos, peines, maquillaje mini y muchos
          premios más. Tú eliges la cantidad, la suerte elige tus tesoros.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary btn-lg" href="#pedido">Armar mi pedido</a>
          <a class="btn btn-ghost btn-lg" href="#como-funciona">Ver cómo funciona</a>
        </div>
        <p class="hero-note">Desde <strong>{{ money(PACKS[0]?.price ?? 0) }}</strong> la cucharada · Envíos a todo Colombia · {{ CONTACT.phoneDisplay }}</p>
      </div>

      <div class="hero-visual">
        <span class="chip c1">💅</span><span class="chip c2">🎀</span>
        <span class="chip c3">🧸</span><span class="chip c4">✨</span>
        <ScoopWidget />
        <svg class="sticker" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="58" fill="var(--yellow-bowl)" />
          <path id="stk" d="M60,60 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" fill="none" />
          <text font-size="11.5" font-weight="700" fill="var(--plum)" letter-spacing="1.6" font-family="Baloo 2, sans-serif">
            <textPath href="#stk">HECHO A MANO CON AMOR ·  HECHO A MANO ·</textPath>
          </text>
          <text x="60" y="72" text-anchor="middle" font-size="32">🥄</text>
        </svg>
      </div>
    </div>

    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <template v-for="g in 2" :key="g">
          <span v-for="item in items" :key="item">{{ item }} <i>✦</i></span>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; padding: 4rem 1.5rem 0; overflow: hidden; }

.blob { position: absolute; pointer-events: none; z-index: 0; }
.blob-pink {
  top: -120px; right: -140px; width: 620px; height: 620px;
  background: var(--pink-soft);
  border-radius: 62% 38% 55% 45% / 48% 58% 42% 52%;
}
.blob-lav {
  bottom: 40px; left: -160px; width: 420px; height: 420px;
  background: color-mix(in srgb, var(--lavender) 28%, white);
  border-radius: 45% 55% 40% 60% / 55% 40% 60% 45%;
}

.hero-inner {
  position: relative; z-index: 1;
  max-width: var(--container); margin: 0 auto;
  display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: center;
  padding-bottom: 5rem;
}

.pill {
  display: inline-block; margin: 0 0 1.2rem; padding: 0.4em 1em;
  background: #fff; border-radius: 999px;
  font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--pink-deep);
  box-shadow: 0 6px 16px -8px rgba(226, 47, 135, 0.4);
}

.hero h1 { font-weight: 800; line-height: 0.98; letter-spacing: -0.02em; margin: 0 0 1.2rem; }
.l1, .l2 { display: block; font-size: clamp(2.8rem, 7.2vw, 5.4rem); }
.l1 { color: var(--pink-deep); }
.l2 {
  width: fit-content; color: var(--plum);
  padding: 0 0.2em; margin: 0.05em 0 0 -0.1em;
  background: linear-gradient(transparent 55%, var(--yellow-bowl) 55% 92%, transparent 92%);
  transform: rotate(-1.5deg);
}

.hero-sub { font-size: 1.12rem; max-width: 46ch; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin: 1.8rem 0 1.2rem; }
.hero-note { font-size: 0.92rem; }
.hero-note strong { color: var(--pink-deep); }

.hero-visual { position: relative; display: flex; justify-content: center; }
.hero-visual :deep(.scoop-widget) { animation: float 5s ease-in-out infinite; }

.sticker {
  position: absolute; right: -4%; top: -9%; width: 118px; height: 118px;
  animation: spin 18s linear infinite; filter: drop-shadow(0 8px 14px rgba(62, 33, 64, 0.2));
}
.chip {
  position: absolute; z-index: 2; width: 54px; height: 54px; border-radius: 50%;
  display: grid; place-items: center; font-size: 1.6rem; background: #fff;
  box-shadow: var(--shadow-card); animation: float 4s ease-in-out infinite;
}
.c1 { left: -2%; top: 8%; } .c2 { left: -6%; bottom: 30%; animation-delay: -1s; }
.c3 { right: -4%; bottom: 22%; animation-delay: -2s; } .c4 { right: 14%; bottom: -4%; animation-delay: -3s; }

.marquee {
  position: relative; z-index: 2; margin: 0 -2rem; padding: 0.9rem 0;
  background: var(--pink-deep); color: #fff; transform: rotate(-1.4deg); overflow: hidden;
}
.marquee-track { display: flex; width: max-content; animation: scroll 28s linear infinite; }
.marquee-track span { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; padding: 0 1.2rem; white-space: nowrap; }
.marquee-track i { font-style: normal; color: var(--yellow-bowl); margin-left: 1.2rem; }

@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes scroll { to { transform: translateX(-50%); } }

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; text-align: center; }
  .l2 { margin-inline: auto; }
  .hero-sub { margin-inline: auto; }
  .hero-actions { justify-content: center; }
  .sticker { width: 92px; height: 92px; right: 2%; }
}
</style>
