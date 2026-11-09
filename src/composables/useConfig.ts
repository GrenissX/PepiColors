// ⚙️ CONFIGURACIÓN — edita solo este archivo
export const FORM_URL = '#pedido' // compatibilidad: ya no se usa formulario externo

export const CONTACT = {
  phoneDisplay: '+57 319 772 8294',
  whatsappHref: 'https://wa.me/573197728294',
  tiktokHref: 'https://www.tiktok.com/@pepicolors',
  tiktokHandle: '@pepicolors',
  instagramHref: 'https://www.instagram.com/pepi_colors',
  instagramHandle: '@pepi_colors',
}

export interface Pack { spoons: number; price: number; color: string; tag?: string }

// Precios en pesos (55000 = $55.000). Cámbialos aquí cuando quieras.
export const PACKS: Pack[] = [
  { spoons: 1, price: 55000, color: 'var(--pink-hot)' },
  { spoons: 2, price: 100000, color: 'var(--lavender)' },
  { spoons: 3, price: 135000, color: 'var(--mint)', tag: 'Más pedido' },
  { spoons: 4, price: 160000, color: 'var(--yellow-bowl)' },
  { spoons: 5, price: 190000, color: 'var(--pink-hot)', tag: 'Mejor precio' },
]

export const money = (n: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n)

// 🎬 Videos de TikTok que se muestran en la página (los más vistos).
// "views" es el texto de vistas que se ve en la etiqueta, por ejemplo '125K' o '1.2M'.
// Si lo dejas vacío, la etiqueta de vistas no aparece. TikTok no permite leerlo automáticamente.
export interface VideoItem { url: string; views?: string }

export const LATEST_VIDEOS: VideoItem[] = [
  { url: 'https://www.tiktok.com/@pepicolors/video/7641594214899354888', views: '' },
  { url: 'https://www.tiktok.com/@pepicolors/video/7621354608077704455', views: '' },
  { url: 'https://www.tiktok.com/@pepicolors/video/7608007664311831815', views: '' },
]
