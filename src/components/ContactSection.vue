<script setup lang="ts">
import { CONTACT } from '../composables/useConfig'
</script>

<template>
  <section class="contact" id="contacto" v-reveal>
    <div class="contact-inner">
      <div class="contact-info">
        <p class="eyebrow">Hablemos</p>
        <h2>Contacto y redes</h2>
        <p class="section-sub">Escríbenos, síguenos o deja tu pedido directamente con el formulario.</p>

        <ul class="contact-list">
          <li>
            <span class="contact-icon">📞</span>
            <div><span class="contact-label">Pedidos y WhatsApp</span><span class="contact-value">{{ CONTACT.phoneDisplay }}</span></div>
          </li>
          <li>
            <span class="contact-icon">📍</span>
            <div><span class="contact-label">Envíos</span><span class="contact-value">A todo Colombia</span></div>
          </li>
        </ul>

        <div class="social-row">
          <a class="social-btn" :href="CONTACT.tiktokHref" target="_blank" rel="noopener" aria-label="TikTok de Pepi Colors">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M16.6 5.82c-1-.88-1.6-2.13-1.6-3.5h-3.13v13.4c0 1.62-1.32 2.93-2.93 2.93a2.93 2.93 0 0 1 0-5.86c.27 0 .53.03.78.1V9.55a6.1 6.1 0 0 0-.78-.05A6.08 6.08 0 0 0 3 15.57 6.08 6.08 0 0 0 9.07 21.6a6.08 6.08 0 0 0 6.07-6.07V8.9a8.1 8.1 0 0 0 4.86 1.6V7.38a5.4 5.4 0 0 1-3.4-1.56z"/></svg>
            <span>{{ CONTACT.tiktokHandle }}</span>
          </a>
          <a class="social-btn" :href="CONTACT.instagramHref" target="_blank" rel="noopener" aria-label="Instagram de Pepi Colors">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.53 5.45c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 18.55 2.53c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.2 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.2 1.5-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.2-1.86-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.3-.88-.34-1.86C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.98.2-1.5.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.3 1.86-.34C9.01 3.81 9.33 3.8 12 3.8zm0 3.06A5.14 5.14 0 1 0 12 17.14 5.14 5.14 0 0 0 12 6.86zm0 8.48a3.34 3.34 0 1 1 0-6.68 3.34 3.34 0 0 1 0 6.68zm5.34-8.68a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
            <span>{{ CONTACT.instagramHandle }}</span>
          </a>
        </div>
      </div>

      <div class="contact-card">
        <h3>¿Lista para pedir la tuya?</h3>
        <p>Elige tus cucharadas, deja tus datos y tu pedido nos llega directo por WhatsApp.</p>
        <a class="btn btn-primary btn-lg" href="#pedido">Solicitar ahora</a>
        <p class="contact-card-note">Respondemos por WhatsApp en cuanto recibimos tu formulario 💌</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact { padding: 1rem 1.5rem 5rem; max-width: var(--container); margin: 0 auto; }
.contact-inner { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: start; }
.contact-list { list-style: none; margin: 1.5rem 0; padding: 0; display: flex; flex-direction: column; gap: 1rem; }
.contact-list li { display: flex; align-items: center; gap: 0.9rem; }
.contact-icon { font-size: 1.4rem; }
.contact-label { display: block; font-size: 0.8rem; color: var(--plum-soft); font-weight: 600; }
.contact-value { display: block; font-family: var(--font-display); font-weight: 600; color: var(--plum); }

.social-row { display: flex; gap: 0.9rem; flex-wrap: wrap; }
.social-btn {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #fff;
  border-radius: 999px;
  padding: 0.7em 1.3em;
  font-weight: 600;
  box-shadow: 0 6px 16px -8px rgba(62, 33, 64, 0.25);
  transition: transform 0.15s ease, color 0.15s ease;
}
.social-btn:hover { transform: translateY(-2px); color: var(--pink-deep); }

.contact-card {
  background: linear-gradient(160deg, #fff, var(--pink-soft) 220%);
  border-radius: var(--radius-lg);
  padding: 2.2rem;
  box-shadow: var(--shadow-card);
  text-align: center;
}
.contact-card h3 { font-size: 1.3rem; }
.contact-card .btn { margin: 0.6rem 0 0.8rem; width: 100%; }
.contact-card-note { font-size: 0.85rem; margin: 0; }

@media (max-width: 820px) { .contact-inner { grid-template-columns: 1fr; } }
</style>
