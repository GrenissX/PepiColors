<script setup lang="ts">
import { reactive, ref } from 'vue'
import { PACKS, CONTACT, money, type Pack } from '../composables/useConfig'
import { useCart } from '../composables/useCart'

const { lines, count, spoons, total, add, change, clear } = useCart()

const base = PACKS[0]?.price ?? 0
const saving = (p: Pack) => p.spoons * base - p.price
const word = (n: number) => (n === 1 ? 'cucharada' : 'cucharadas')

const form = reactive({ nombres: '', direccion: '', ciudad: '', telefono: '', extra: '' })
const tried = ref(false)
const sent = ref(false)

const phoneOk = () => form.telefono.replace(/\D/g, '').length >= 7
const bad = (k: 'nombres' | 'direccion' | 'ciudad') => tried.value && !form[k].trim()
const badPhone = () => tried.value && !phoneOk()

function submit() {
  tried.value = true
  sent.value = false
  if (!count.value || !form.nombres.trim() || !form.direccion.trim() || !form.ciudad.trim() || !phoneOk()) return

  const msg = [
    '🌈 *Nuevo pedido · Pepi Colors*',
    '',
    ...lines.value.map((l) => `🥄 ${l.qty} × ${l.spoons} ${word(l.spoons)} — ${money(l.qty * l.price)}`),
    '',
    `*Cantidad de cucharadas:* ${spoons.value}`,
    `*Subtotal:* ${money(total.value)} (sin envío)`,
    '',
    `*Nombres:* ${form.nombres.trim()}`,
    `*Dirección:* ${form.direccion.trim()}`,
    `*Municipio/Ciudad:* ${form.ciudad.trim()}`,
    `*Teléfono:* ${form.telefono.trim()}`,
    `*Datos adicionales:* ${form.extra.trim() || '—'}`,
  ].join('\n')

  window.open(`${CONTACT.whatsappHref}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  sent.value = true
}
</script>

<template>
  <section class="shop" id="pedido" v-reveal>
    <div class="section-head">
      <p class="eyebrow">Haz tu pedido</p>
      <h2>Elige cuántas cucharadas quieres</h2>
      <p class="section-sub">Entre más cucharadas, menos pagas por cada una. Puedes sumar varias opciones al carrito.</p>
    </div>

    <div class="packs">
      <article class="pack" v-for="p in PACKS" :key="p.spoons" :style="{ '--c': p.color }">
        <span v-if="p.tag" class="tag">{{ p.tag }}</span>
        <span class="num">{{ p.spoons }}</span>
        <h3>{{ word(p.spoons) }}</h3>
        <p class="price">{{ money(p.price) }}</p>
        <p class="save">{{ saving(p) > 0 ? `Ahorras ${money(saving(p))}` : 'Para probar tu suerte' }}</p>
        <button class="btn btn-primary add" @click="add(p.spoons)">Añadir al carrito</button>
      </article>
    </div>

    <div class="order">
      <aside class="panel cart" aria-label="Tu carrito">
        <h3>Tu carrito 🛒</h3>

        <p v-if="!count" class="empty">Aún no hay nada aquí. Elige una opción arriba para empezar tu pedido.</p>

        <ul v-else class="lines">
          <li v-for="l in lines" :key="l.spoons">
            <div class="line-info">
              <strong>{{ l.spoons }} {{ word(l.spoons) }}</strong>
              <span>{{ money(l.price) }} c/u</span>
            </div>
            <div class="stepper">
              <button type="button" :aria-label="`Quitar una opción de ${l.spoons} ${word(l.spoons)}`" @click="change(l.spoons, -1)">−</button>
              <span>{{ l.qty }}</span>
              <button type="button" :aria-label="`Añadir una opción de ${l.spoons} ${word(l.spoons)}`" @click="change(l.spoons, 1)">+</button>
            </div>
            <span class="line-total">{{ money(l.qty * l.price) }}</span>
          </li>
        </ul>

        <dl v-if="count" class="totals">
          <div><dt>Cucharadas en total</dt><dd>{{ spoons }}</dd></div>
          <div class="grand"><dt>Subtotal</dt><dd>{{ money(total) }}</dd></div>
        </dl>
        <button v-if="count" class="clear" type="button" @click="clear">Vaciar carrito</button>

        <p class="ship">🚚 El valor del envío dependerá de tu zona de residencia.</p>
      </aside>

      <form id="datos" class="panel form" novalidate @submit.prevent="submit">
        <h3>Tus datos de envío</h3>

        <label class="full" :class="{ err: bad('nombres') }">
          <span>Nombres</span>
          <input v-model="form.nombres" autocomplete="name" placeholder="Nombre y apellido" />
          <small v-if="bad('nombres')">Escribe tu nombre.</small>
        </label>

        <label class="full" :class="{ err: bad('direccion') }">
          <span>Dirección</span>
          <input v-model="form.direccion" autocomplete="street-address" placeholder="Calle, número, barrio, apartamento" />
          <small v-if="bad('direccion')">Escribe tu dirección.</small>
        </label>

        <label :class="{ err: bad('ciudad') }">
          <span>Municipio / Ciudad</span>
          <input v-model="form.ciudad" autocomplete="address-level2" placeholder="Ej: Bogotá" />
          <small v-if="bad('ciudad')">Escribe tu municipio o ciudad.</small>
        </label>

        <label :class="{ err: badPhone() }">
          <span>Teléfono</span>
          <input v-model="form.telefono" type="tel" inputmode="tel" autocomplete="tel" placeholder="Tu número de WhatsApp" />
          <small v-if="badPhone()">Escribe un teléfono válido.</small>
        </label>

        <label class="full">
          <span>Cantidad de cucharadas</span>
          <input :value="count ? `${spoons} ${word(spoons)}` : 'Añade una opción al carrito'" readonly />
        </label>

        <label class="full">
          <span>Datos adicionales</span>
          <textarea v-model="form.extra" rows="3" placeholder="Colores favoritos, para quién es, cosas que no quieres recibir…"></textarea>
        </label>

        <p v-if="tried && !count" class="msg-err">Añade al menos una opción de cucharadas al carrito.</p>

        <button class="btn btn-primary btn-lg send" type="submit">Enviar pedido por WhatsApp</button>
        <p class="ship">🚚 El valor del envío dependerá de tu zona de residencia. Te lo confirmamos por WhatsApp.</p>
        <p v-if="sent" class="msg-ok" role="status">¡Listo! Se abrió WhatsApp con tu pedido. Solo falta que lo envíes 💌</p>
      </form>
    </div>

    <Transition name="pop">
      <a v-if="count" class="fab" href="#datos" aria-label="Ir a llenar mis datos y comprar">🛒 {{ count }} · {{ money(total) }}</a>
    </Transition>
  </section>
</template>

<style scoped>
.shop { padding: 5rem 1.5rem; max-width: var(--container); margin: 0 auto; }
.shop h2 { font-size: clamp(1.9rem, 4vw, 2.8rem); font-weight: 800; }

.packs { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 1.2rem; }
.pack {
  position: relative; text-align: center; padding: 2.2rem 1rem 1.3rem;
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--c) 14%, white);
  box-shadow: 0 10px 26px -16px rgba(62, 33, 64, 0.35);
  transition: transform 0.2s ease;
}
.pack:nth-child(odd) { transform: rotate(-1deg); }
.pack:nth-child(even) { transform: rotate(1deg); }
.pack:hover { transform: rotate(0) translateY(-6px); }
.tag {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  white-space: nowrap; background: var(--plum); color: #fff;
  font-family: var(--font-display); font-weight: 600; font-size: 0.8rem;
  padding: 0.25em 0.9em; border-radius: 999px;
}
.num {
  display: grid; place-items: center; width: 86px; height: 86px; margin: 0 auto 0.6rem;
  border-radius: 50% 46% 54% 48%; background: var(--c); color: var(--plum);
  font-family: var(--font-display); font-weight: 800; font-size: 3rem; line-height: 1;
}
.pack h3 { font-size: 1.1rem; margin-bottom: 0.2em; }
.price { font-family: var(--font-display); font-weight: 800; font-size: 1.6rem; color: var(--plum); margin: 0; }
.save { font-size: 0.82rem; font-weight: 600; margin: 0.2em 0 1rem; }
.add { width: 100%; padding: 0.7em 1em; font-size: 0.92rem; }

.order { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 1.6rem; margin-top: 3.5rem; align-items: start; }
.panel { background: #fff; border-radius: var(--radius-lg); padding: 2rem; box-shadow: var(--shadow-card); }
.panel h3 { font-size: 1.35rem; margin-bottom: 1rem; }

.empty { background: var(--bg); border-radius: var(--radius-md); padding: 1.2rem; font-size: 0.95rem; }
.lines { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.8rem; }
.lines li { display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 0.8rem; padding-bottom: 0.8rem; border-bottom: 2px dashed var(--pink-soft); }
.line-info strong { display: block; font-family: var(--font-display); }
.line-info span { font-size: 0.82rem; color: var(--plum-soft); }
.line-total { font-family: var(--font-display); font-weight: 700; min-width: 5.5rem; text-align: right; }

.stepper { display: inline-flex; align-items: center; background: var(--bg); border-radius: 999px; }
.stepper button { width: 32px; height: 32px; border: none; background: none; border-radius: 50%; font-size: 1.2rem; font-weight: 700; color: var(--pink-deep); cursor: pointer; }
.stepper button:hover { background: var(--pink-soft); }
.stepper span { min-width: 1.6rem; text-align: center; font-weight: 700; }

.totals { margin: 1.2rem 0 0.4rem; }
.totals div { display: flex; justify-content: space-between; padding: 0.25rem 0; }
.totals dt, .totals dd { margin: 0; }
.totals .grand { font-family: var(--font-display); font-weight: 800; font-size: 1.4rem; color: var(--pink-deep); }
.clear { background: none; border: none; padding: 0; color: var(--plum-soft); text-decoration: underline; cursor: pointer; font: inherit; font-size: 0.85rem; }

.ship { margin: 1.2rem 0 0; padding: 0.8rem 1rem; border-radius: var(--radius-sm); background: color-mix(in srgb, var(--lavender) 18%, white); color: var(--plum); font-weight: 600; font-size: 0.9rem; }

.form { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; scroll-margin-top: 5.5rem; }
.form h3, .full, .send, .form .ship, .msg-err, .msg-ok { grid-column: 1 / -1; }
.form label { display: flex; flex-direction: column; gap: 0.35rem; }
.form label span { font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--plum); }
.form input, .form textarea {
  width: 100%; font: inherit; color: var(--plum); background: var(--bg);
  border: 2px solid transparent; border-radius: var(--radius-sm); padding: 0.75em 1em;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.form input:focus, .form textarea:focus { outline: none; border-color: var(--pink-hot); background: #fff; }
.form input[readonly] { color: var(--pink-deep); font-weight: 700; cursor: default; }
.form textarea { resize: vertical; }
.form label.err input { border-color: #d93a4f; }
.form small, .msg-err { color: #c0283d; font-weight: 600; font-size: 0.82rem; margin: 0; }
.send { width: 100%; margin-top: 0.4rem; }
.form .ship { margin-top: 0; }
.msg-ok { margin: 0; padding: 0.8rem 1rem; border-radius: var(--radius-sm); background: color-mix(in srgb, var(--mint) 25%, white); color: var(--plum); font-weight: 600; }

.fab {
  position: fixed; right: 1rem; bottom: 1rem; z-index: 60;
  padding: 0.85em 1.4em; border-radius: 999px; color: #fff;
  font-family: var(--font-display); font-weight: 700;
  background: linear-gradient(135deg, var(--pink-hot), var(--pink-deep));
  box-shadow: 0 12px 26px -8px rgba(226, 47, 135, 0.7);
}
.pop-enter-active { transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s; }
.pop-leave-active { transition: opacity 0.2s; }
.pop-enter-from { transform: scale(0.6); opacity: 0; }
.pop-leave-to { opacity: 0; }

@media (max-width: 860px) { .order { grid-template-columns: 1fr; } }
@media (max-width: 520px) { .form { grid-template-columns: 1fr; } .panel { padding: 1.4rem; } .lines li { grid-template-columns: 1fr auto; } .line-total { grid-column: 2; } }
</style>
