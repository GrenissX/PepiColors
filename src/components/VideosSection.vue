<script setup lang="ts">
import { onMounted } from 'vue'
import { CONTACT, LATEST_POSTS } from '../composables/useConfig'

const colors = ['var(--pink-hot)', 'var(--lavender)', 'var(--mint)']

type IgWindow = Window & { instgrm?: { Embeds: { process: () => void } } }

// Carga el script oficial de Instagram una sola vez y le pide que convierta los enlaces en videos.
onMounted(() => {
  const w = window as IgWindow
  if (w.instgrm) return w.instgrm.Embeds.process()
  if (document.getElementById('ig-embed-script')) return
  const s = document.createElement('script')
  s.id = 'ig-embed-script'
  s.async = true
  s.src = 'https://www.instagram.com/embed.js'
  s.onload = () => w.instgrm?.Embeds.process()
  document.body.appendChild(s)
})
</script>

<template>
  <section class="latest" id="videos" v-reveal>
    <div class="section-head">
      <p class="eyebrow">En Instagram</p>
      <h2>Mira lo último de Pepi</h2>
      <p class="section-sub">Nuestras publicaciones más recientes. Síguenos para no perderte ninguna.</p>
    </div>

    <div class="videos">
      <div class="video-card" v-for="(url, i) in LATEST_POSTS" :key="url" :style="{ '--c': colors[i % colors.length] }">
        <span class="badge">📸 Instagram</span>
        <blockquote class="instagram-media" :data-instgrm-permalink="url" data-instgrm-version="14">
          <a :href="url" target="_blank" rel="noopener">Ver publicación en Instagram</a>
        </blockquote>
      </div>
    </div>

    <div class="follow">
      <a class="btn btn-primary" :href="CONTACT.instagramHref" target="_blank" rel="noopener">Seguir a {{ CONTACT.instagramHandle }}</a>
      <a class="btn btn-ghost" :href="CONTACT.tiktokHref" target="_blank" rel="noopener">Ver nuestro TikTok</a>
    </div>
  </section>
</template>

<style scoped>
.latest { padding: 1rem 1.5rem 5rem; max-width: var(--container); margin: 0 auto; }
.latest h2 { font-size: clamp(1.9rem, 4vw, 2.8rem); font-weight: 800; }

.videos { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 1.4rem; align-items: start; }
.video-card {
  position: relative;
  padding: 0.8rem;
  border-radius: var(--radius-lg);
  background: #fff;
  border: 4px solid var(--c);
  box-shadow: 8px 8px 0 var(--c), 0 20px 30px -18px rgba(62, 33, 64, 0.4);
  transition: transform 0.2s ease;
}
.video-card:hover { transform: rotate(0) translateY(-6px); }
.badge {
  position: absolute; top: -17px; left: 1.2rem; z-index: 2;
  padding: 0.3em 1em; border-radius: 999px;
  background: var(--plum); color: #fff;
  font-family: var(--font-display); font-weight: 600; font-size: 0.85rem;
}
.video-card:nth-child(odd) { transform: rotate(-1deg); }
.video-card:nth-child(even) { transform: rotate(1deg); }

/* El script de Instagram reemplaza el blockquote por un iframe; ajustamos su ancho mínimo para móviles */
.video-card :deep(.instagram-media) { min-width: 0 !important; width: 100% !important; max-width: 100% !important; margin: 0 !important; }
.video-card blockquote { margin: 0; padding: 2rem 1rem; background: #fff; border-radius: var(--radius-md); text-align: center; font-weight: 600; }
.video-card blockquote a { color: var(--pink-deep); }

.follow { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 2.4rem; }
</style>
