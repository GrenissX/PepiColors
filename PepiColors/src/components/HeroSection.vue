<script setup lang="ts">
import { FORM_URL, CONTACT } from '../composables/useConfig'
import ScoopWidget from './ScoopWidget.vue'
</script>

<template>
  <section class="hero" id="top">
    <div class="hero-glow"></div>
    <div class="hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">✨ Pedidos personalizados a domicilio</p>
        <h1>Cada cucharada<br /> es una sorpresa</h1>
        <p class="hero-sub">
          Metemos la mano al tazón y sacamos tu pedido: esferos, peines, maquillaje mini y muchos
          premios más. Tú eliges tu estilo, la suerte elige tus tesoros.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" :href="FORM_URL" target="_blank" rel="noopener">Solicitar ahora</a>
          <a class="btn btn-ghost" href="#como-funciona">Ver cómo funciona ↓</a>
        </div>
        <p class="hero-note">📞 Pedidos al {{ CONTACT.phoneDisplay }} · Envíos a todo el país</p>
      </div>

      <div class="hero-visual">
        <ScoopWidget />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 4rem 1.5rem 3rem;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -20%;
  left: 50%;
  width: 900px;
  height: 900px;
  transform: translateX(-50%);
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 79, 160, 0.16), transparent 60%),
    radial-gradient(circle at 70% 60%, rgba(177, 140, 255, 0.14), transparent 60%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 3rem;
  align-items: center;
}

.hero h1 {
  font-size: clamp(2.4rem, 4.6vw, 3.6rem);
  color: var(--pink-deep);
}
.hero-sub { font-size: 1.08rem; max-width: 46ch; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin: 1.6rem 0 1.2rem; }
.hero-note { font-size: 0.92rem; color: var(--plum-soft); }

.hero-visual {
  display: flex;
  justify-content: center;
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-visual { animation: none; }
}

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; text-align: center; }
  .hero-actions { justify-content: center; }
  .hero-note { text-align: center; }
}
</style>
