<script setup lang="ts">
import { CONTACT, LATEST_VIDEOS } from '../composables/useConfig'

const colors = ['var(--pink-hot)', 'var(--lavender)', 'var(--mint)']

// El id del video es el número al final del enlace de TikTok
const videos = LATEST_VIDEOS.flatMap((v) => {
  const id = v.url.match(/video\/(\d+)/)?.[1]
  return id ? [{ ...v, id }] : []
})
</script>

<template>
  <section class="latest" id="videos" v-reveal>
    <div class="section-head">
      <p class="eyebrow">En TikTok</p>
      <h2>Nuestros videos más vistos</h2>
      <p class="section-sub">Los favoritos de la gente. Síguenos para ver cada video nuevo.</p>
    </div>

    <div class="videos">
      <div class="video-card" v-for="(v, i) in videos" :key="v.id" :style="{ '--c': colors[i % colors.length] }">
        <span class="badge">🎵 TikTok</span>
        <span v-if="v.views" class="badge views">👁️ {{ v.views }} vistas</span>

        <iframe
          class="player"
          :src="`https://www.tiktok.com/embed/v2/${v.id}`"
          title="Video de Pepi Colors en TikTok"
          loading="lazy"
          scrolling="no"
          allow="encrypted-media; fullscreen"
          allowfullscreen
        ></iframe>

        <a class="watch" :href="v.url" target="_blank" rel="noopener">Ver en TikTok</a>
      </div>
    </div>

    <div class="follow">
      <a class="btn btn-primary" :href="CONTACT.tiktokHref" target="_blank" rel="noopener">Seguir a {{ CONTACT.tiktokHandle }}</a>
      <a class="btn btn-ghost" :href="CONTACT.instagramHref" target="_blank" rel="noopener">Ver nuestro Instagram</a>
    </div>
  </section>
</template>

<style scoped>
.latest { padding: 1rem 1.5rem 5rem; max-width: var(--container); margin: 0 auto; }
.latest h2 { font-size: clamp(1.9rem, 4vw, 2.8rem); font-weight: 800; }

.videos { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 1.6rem; align-items: start; }
.video-card {
  position: relative;
  padding: 0.8rem 0.8rem 0.4rem;
  border-radius: var(--radius-lg);
  background: #fff;
  border: 4px solid var(--c);
  box-shadow: 8px 8px 0 var(--c), 0 20px 30px -18px rgba(62, 33, 64, 0.4);
  transition: transform 0.2s ease;
}
.video-card:nth-child(odd) { transform: rotate(-1deg); }
.video-card:nth-child(even) { transform: rotate(1deg); }
.video-card:hover { transform: rotate(0) translateY(-6px); }

.badge {
  position: absolute; top: -17px; left: 1.2rem; z-index: 2;
  padding: 0.3em 1em; border-radius: 999px;
  background: var(--plum); color: #fff;
  font-family: var(--font-display); font-weight: 600; font-size: 0.85rem;
}
.badge.views { left: auto; right: 1.2rem; background: var(--yellow-bowl); color: var(--plum); }

.player { display: block; width: 100%; height: 740px; border: 0; border-radius: var(--radius-md); background: var(--bg); }
.watch { display: block; text-align: center; padding: 0.7rem 0; font-family: var(--font-display); font-weight: 600; color: var(--pink-deep); }
.watch:hover { text-decoration: underline; }

.follow { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 2.6rem; }
</style>
