export interface PrizeItem {
  icon: string
  name: string
  /** Descripción corta para la tarjeta del carrusel de premios */
  gridText: string
  /** Mensaje divertido que aparece al sacar este premio en el juego de la cuchara */
  resultText: string
  color: string
}

export const prizeItems: PrizeItem[] = [
  { icon: '💅', name: 'Set lima', gridText: 'Set de limas para arreglar tus uñas.', resultText: '¡Salió un set de limas para consentir tus uñas!', color: 'var(--pink-hot)' },
  { icon: '🖊️', name: 'Esfero', gridText: 'Lapicero decorado o de gel de colores.', resultText: '¡Tu cucharada trajo un esfero para tu cartuchera!', color: 'var(--lavender)' },
  { icon: '🧻', name: 'Pañitos húmedos', gridText: 'Pañitos húmedos para llevar a todos lados.', resultText: 'Salieron pañitos húmedos para llevar a todos lados.', color: 'var(--mint)' },
  { icon: '✏️', name: 'Lápiz', gridText: 'Lápiz para escribir con estilo.', resultText: '¡Un lápiz nuevo se sumó a tu premio!', color: 'var(--yellow-bowl)' },
  { icon: '🎀', name: 'Diadema + Moña', gridText: 'Diadema con moña a juego.', resultText: 'Salió una diadema con moña a juego.', color: 'var(--pink-hot)' },
  { icon: '✨', name: 'Stikers', gridText: 'Stickers para decorar lo que quieras.', resultText: '¡Stickers para decorar lo que quieras!', color: 'var(--lavender)' },
  { icon: '🧽', name: 'Beauty blender', gridText: 'Esponja para difuminar tu maquillaje.', resultText: 'Tu cucharada trajo una beauty blender.', color: 'var(--mint)' },
  { icon: '🐙', name: 'Octobuddy', gridText: 'Amigo pulpito de peluche o llavero.', resultText: '¡Un octobuddy adorable se unió a tu pedido!', color: 'var(--yellow-bowl)' },
  { icon: '🧴', name: 'Crema facial', gridText: 'Crema para hidratar tu rostro.', resultText: 'Salió una crema facial para hidratar tu piel.', color: 'var(--pink-hot)' },
  { icon: '🧸', name: 'Squishy mini', gridText: 'Squishy miniatura súper suave.', resultText: '¡Un squishy mini súper suave para ti!', color: 'var(--lavender)' },
  { icon: '🤏', name: 'Pinzas skincare', gridText: 'Pinzas para tu rutina de skincare.', resultText: 'Tu cucharada trajo pinzas para tu rutina skincare.', color: 'var(--mint)' },
  { icon: '⭐', name: 'Parches estrella', gridText: 'Parches en forma de estrella para el cuidado facial.', resultText: 'Salieron parches estrella para el cuidado facial.', color: 'var(--yellow-bowl)' },
  { icon: '🧷', name: 'Hebillas x4', gridText: 'Set de 4 hebillas para el cabello.', resultText: '¡4 hebillas para lucir tu cabello!', color: 'var(--pink-hot)' },
  { icon: '🖍️', name: 'Perfilador', gridText: 'Perfilador de labios o cejas.', resultText: 'Salió un perfilador para labios o cejas.', color: 'var(--lavender)' },
  { icon: '🫧', name: 'Cremita manos', gridText: 'Cremita hidratante para las manos.', resultText: 'Tu cucharada trajo una cremita para tus manos.', color: 'var(--mint)' },
  { icon: '☁️', name: 'Borla polvo', gridText: 'Borla para aplicar polvo suelto.', resultText: '¡Una borla para aplicar tu polvo favorito!', color: 'var(--yellow-bowl)' },
  { icon: '👁️', name: 'Delineador', gridText: 'Delineador líquido para tu mirada.', resultText: 'Salió un delineador líquido para tu mirada.', color: 'var(--pink-hot)' },
  { icon: '🌸', name: 'Perfumero', gridText: 'Mini perfumero con fragancia suave.', resultText: 'Tu cucharada trajo un mini perfumero.', color: 'var(--lavender)' },
  { icon: '🧵', name: 'Mini borlas x2', gridText: 'Set de dos mini borlas para polvo.', resultText: '¡2 mini borlas para tu set de belleza!', color: 'var(--mint)' },
  { icon: '📓', name: 'Libretita', gridText: 'Libretita para tus notas y apuntes.', resultText: 'Salió una libretita para tus notas.', color: 'var(--yellow-bowl)' },
  { icon: '🧼', name: 'Jabón portátil', gridText: 'Jabón portátil para llevar en tu bolso.', resultText: 'Tu cucharada trajo un jabón portátil.', color: 'var(--pink-hot)' },
  { icon: '🩹', name: 'Toallita tela', gridText: 'Toallita de tela reutilizable.', resultText: '¡Una toallita de tela reutilizable para ti!', color: 'var(--lavender)' },
  { icon: '📎', name: 'Gancho cabello', gridText: 'Ganchos para sujetar tu cabello con estilo.', resultText: 'Salió un gancho para sujetar tu cabello.', color: 'var(--mint)' },
  { icon: '✍️', name: 'Mini resaltador x2', gridText: 'Set de dos mini resaltadores de colores.', resultText: '¡2 mini resaltadores de colores en tu premio!', color: 'var(--yellow-bowl)' },
  { icon: '🪞', name: 'Espejito', gridText: 'Espejito de bolsillo para retocarte.', resultText: 'Tu cucharada trajo un espejito de bolsillo.', color: 'var(--pink-hot)' },
  { icon: '📿', name: 'Choker', gridText: 'Choker con dije para completar tu look.', resultText: '¡Salió un choker para completar tu look!', color: 'var(--lavender)' },
  { icon: '🪥', name: 'Foreo facial', gridText: 'Mini cepillo facial para limpieza profunda.', resultText: 'Tu cucharada trajo un mini cepillo facial.', color: 'var(--mint)' },
  { icon: '💧', name: 'Parche colágeno', gridText: 'Parche de colágeno hidratante.', resultText: 'Salió un parche de colágeno hidratante.', color: 'var(--yellow-bowl)' },
  { icon: '🧦', name: 'Medias', gridText: 'Par de medias con diseños tiernos.', resultText: '¡Un par de medias tiernas para ti!', color: 'var(--pink-hot)' },
  { icon: '📏', name: 'Regla', gridText: 'Regla para tus útiles escolares.', resultText: 'Salió una regla para tus útiles.', color: 'var(--lavender)' },
  { icon: '🧴', name: 'Vaselina', gridText: 'Vaselina para labios e hidratación.', resultText: 'Tu cucharada trajo vaselina para tus labios.', color: 'var(--mint)' },
  { icon: '💌', name: 'Cápsula sorpresa', gridText: 'Cápsula con un premio totalmente sorpresa.', resultText: '¡La cápsula sorpresa! No sabrás qué es hasta abrirla.', color: 'var(--yellow-bowl)' },
]
