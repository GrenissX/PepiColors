<script setup lang="ts">
const steps = [
  {
    title: 'Nos cuentas qué te gusta',
    text: 'Llenas el formulario con tus datos y tus gustos: colores, estilo, para quién es el pedido.',
  },
  {
    title: 'Armamos tu cucharada',
    text: 'Preparamos tu tazón a mano y sacamos la cucharada que define tus premios.',
  },
  {
    title: 'Te llega tu sorpresa',
    text: 'Empacamos todo con cariño y lo enviamos a la puerta de tu casa.',
  },
]
</script>

<template>
  <section class="how" id="como-funciona" v-reveal>
    <div class="section-head">
      <p class="eyebrow">El proceso</p>
      <h2>Así arma tu cucharada</h2>
    </div>

    <ol class="how-steps">
      <li class="how-step" v-for="(step, i) in steps" :key="step.title">
        <span class="how-index">{{ i + 1 }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.how { padding: 5rem 1.5rem; max-width: var(--container); margin: 0 auto; }
.how h2 { font-size: clamp(1.8rem, 3vw, 2.4rem); }

.how-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
}
.how-step {
  background: var(--bg-soft);
  border-radius: var(--radius-lg);
  padding: 2rem 1.6rem;
  box-shadow: 0 8px 24px -14px rgba(62, 33, 64, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.how-step:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px -14px rgba(62, 33, 64, 0.25);
}
.how-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--pink-soft);
  color: var(--pink-deep);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}
.how-step h3 { font-size: 1.15rem; }
.how-step p { font-size: 0.95rem; margin: 0; }

@media (max-width: 800px) {
  .how-steps { grid-template-columns: 1fr; }
}
</style>
