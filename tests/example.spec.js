// @ts-check
import { test, expect } from '@playwright/test'

const CAT_IMAGE_PREFIX_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  // De la siguiente ruta
  await page.goto(LOCALHOST_URL)
  // Recuperamos todos los pagrafos
  const text = await page.getByRole('paragraph')
  // Y tambien recuperamos las imagenes
  const image = await page.getByRole('img')
  // Recuperamos de los textos, todo su contenido
  const textContent = await text.textContent()
  // Y de las imagenes lo que haya en su SRC
  const imageSrc = await image.getAttribute('src')
  // Nos aseguramos que la longitud del texto sea superior a 0 caracteres
  await expect(textContent?.length).toBeGreaterThan(0)
  // Y que la imagen empieze con el prefijo establecido
  await expect(imageSrc?.startsWith(CAT_IMAGE_PREFIX_URL)).toBeTruthy()
})
