import { computed, ref } from 'vue'
import { PACKS } from './useConfig'

// Estado compartido (una sola instancia para toda la página)
const qtys = ref<Record<number, number>>({})

const lines = computed(() =>
  PACKS.flatMap((p) => {
    const qty = qtys.value[p.spoons] ?? 0
    return qty ? [{ ...p, qty }] : []
  }),
)
const count = computed(() => lines.value.reduce((n, l) => n + l.qty, 0))
const spoons = computed(() => lines.value.reduce((n, l) => n + l.qty * l.spoons, 0))
const total = computed(() => lines.value.reduce((n, l) => n + l.qty * l.price, 0))

function add(s: number) { qtys.value[s] = (qtys.value[s] ?? 0) + 1 }
function change(s: number, d: number) {
  const q = (qtys.value[s] ?? 0) + d
  if (q <= 0) delete qtys.value[s]
  else qtys.value[s] = q
}
function clear() { qtys.value = {} }

export function useCart() {
  return { lines, count, spoons, total, add, change, clear }
}
