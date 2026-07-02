<script setup lang="ts">
import { ref } from 'vue'
import { FORM_URL } from '../composables/useConfig'

const isOpen = ref(false)
function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <a class="brand" href="#top">
        <span class="brand-badge">
        <img src="/logo.png" alt="Logo" class="brand-logo">
          </span>
        <span class="brand-name">
        Pepi Colors
        </span>
      </a>

      <nav class="nav-links" aria-label="Navegación principal">
        <a href="#como-funciona">Cómo funciona</a>
        <a href="#premios">Premios</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a class="btn btn-primary btn-nav" :href="FORM_URL" target="_blank" rel="noopener">Solicitar ahora</a>

      <button
        class="nav-toggle"
        :aria-expanded="isOpen"
        aria-label="Abrir menú"
        @click="isOpen = !isOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <Transition name="slide-down">
      <div v-if="isOpen" class="nav-mobile">
        <a href="#como-funciona" @click="closeMenu">Cómo funciona</a>
        <a href="#premios" @click="closeMenu">Premios</a>
        <a href="#contacto" @click="closeMenu">Contacto</a>
        <a class="btn btn-primary" :href="FORM_URL" target="_blank" rel="noopener" @click="closeMenu">Solicitar ahora</a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 243, 249, 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(226, 47, 135, 0.1);
}
.nav-inner {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0.9rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.brand { display: flex; align-items: center; gap: 0.6rem; margin-right: auto; }
.brand-badge { width: 38px; height: 38px; }
.brand-star { width: 100%; height: 100%; }
.brand-name { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; color: var(--pink-deep); }

.nav-links { display: flex; gap: 1.8rem; font-weight: 600; }
.nav-links a { color: var(--plum-soft); transition: color 0.15s ease; }
.nav-links a:hover { color: var(--pink-deep); }

.btn-nav { padding: 0.6em 1.3em; font-size: 0.92rem; }

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.nav-toggle span { width: 24px; height: 3px; border-radius: 3px; background: var(--plum); }

.nav-mobile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1.5rem 1.2rem;
  font-weight: 600;
}
.nav-mobile a { color: var(--plum-soft); }
.nav-mobile .btn { align-self: flex-start; }

.slide-down-enter-active, .slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 840px) {
  .nav-links { display: none; }
  .btn-nav { display: none; }
  .nav-toggle { display: flex; }
}
</style>
