<script setup lang="ts">
import { FORM_URL } from '../composables/useConfig'
</script>

<template>
  <section class="cta-band" v-reveal>
    <div class="cta-band-inner">
      <h2>¿Lista para tu cucharada de la suerte?</h2>
      <p>Cuéntanos qué te gusta y arma tu pedido personalizado hoy mismo.</p>
      <a class="btn btn-primary btn-lg" :href="FORM_URL" target="_blank" rel="noopener">Solicitar ahora</a>
    </div>
  </section>
</template>

<style scoped>
.cta-band {
  margin: 0 1.5rem 5rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(135deg, var(--lavender), var(--pink-hot));
  border-radius: var(--radius-lg);
  padding: 3.2rem 2rem;
  text-align: center;
}
.cta-band-inner { max-width: 520px; margin: 0 auto; }
.cta-band h2 { color: #fff; font-size: clamp(1.6rem, 3vw, 2.1rem); }
.cta-band p { color: rgba(255, 255, 255, 0.9); }
.cta-band .btn-primary { background: #fff; color: var(--pink-deep); box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.2); }
</style>
