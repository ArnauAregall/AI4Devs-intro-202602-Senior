/**
 * Reverses a string with full Unicode/grapheme cluster support.
 * Handles emoji, surrogate pairs, combining characters, and complex scripts.
 *
 * @param {string} input
 * @returns {string}
 */
export function reverseString(input) {
  if (typeof input !== 'string') return ''

  // Use Intl.Segmenter if available (modern browsers) for proper grapheme cluster support
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter()
    const segments = [...segmenter.segment(input)].map(s => s.segment)
    return segments.reverse().join('')
  }

  // Fallback: spread operator handles surrogate pairs (emoji, etc.)
  return [...input].reverse().join('')
}

/**
 * Returns true if the input is long enough to show a reversed result.
 *
 * @param {string} input
 * @param {number} minLength
 * @returns {boolean}
 */
export function isLongEnough(input, minLength = 3) {
  if (typeof input !== 'string') return false
  // Count grapheme clusters if possible
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter()
    return [...segmenter.segment(input)].length >= minLength
  }
  return [...input].length >= minLength
}