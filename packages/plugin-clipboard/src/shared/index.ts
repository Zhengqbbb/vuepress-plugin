export { ClipboardOptions } from './options.js'

interface RGB {
  r: number
  g: number
  b: number
}
/**
 * @description: RGB to hex conversion
 * @see: https://stackoverflow.com/a/5624139
 * @param {string} hex
 * @return {string | null} RGB
 */

export type HexToRgb = (hex: string) => RGB | null
