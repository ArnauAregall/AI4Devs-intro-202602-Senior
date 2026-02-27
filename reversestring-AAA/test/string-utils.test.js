import { describe, it, expect } from 'vitest'
import { reverseString, isLongEnough } from '../src/string-utils.js'

// ─── reverseString ────────────────────────────────────────────────────────────

describe('reverseString', () => {
  it('reverses a simple ASCII string', () => {
    expect(reverseString('hello')).toBe('olleh')
  })

  it('handles the AI4Devs example from the spec', () => {
    expect(reverseString('AI4Devs')).toBe('sveD4IA')
  })

  it('returns an empty string for an empty input', () => {
    expect(reverseString('')).toBe('')
  })

  it('returns a single character unchanged', () => {
    expect(reverseString('a')).toBe('a')
  })

  it('reverses a palindrome correctly', () => {
    expect(reverseString('racecar')).toBe('racecar')
  })

  it('handles strings with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh')
  })

  it('handles numbers as strings', () => {
    expect(reverseString('12345')).toBe('54321')
  })

  it('handles special characters', () => {
    expect(reverseString('!@#$%')).toBe('%$#@!')
  })

  it('handles Unicode letters outside ASCII (accented chars)', () => {
    expect(reverseString('café')).toBe('éfac')
  })

  it('handles emoji (multi-code-unit characters) without corrupting them', () => {
    const reversed = reverseString('AB🔥')
    expect(reversed).toBe('🔥BA')
  })

  it('handles emoji-only strings', () => {
    expect(reverseString('😀🎉🚀')).toBe('🚀🎉😀')
  })

  it('handles a string with mixed emoji and text', () => {
    expect(reverseString('Hi🌍!')).toBe('!🌍iH')
  })

  it('handles Arabic (RTL) text without corrupting code points', () => {
    const input = 'مرحبا'
    const reversed = reverseString(input)
    // The reversed string should have the same characters, just in reverse order
    expect([...reversed].length).toBe([...input].length)
    expect(reverseString(reversed)).toBe(input)
  })

  it('returns an empty string for non-string input (null)', () => {
    expect(reverseString(null)).toBe('')
  })

  it('returns an empty string for non-string input (undefined)', () => {
    expect(reverseString(undefined)).toBe('')
  })

  it('returns an empty string for numeric input', () => {
    expect(reverseString(42)).toBe('')
  })

  it('is its own inverse: reversing twice returns the original', () => {
    const inputs = ['AI4Devs', 'hello world', '😀🎉🚀', 'café', '']
    inputs.forEach(input => {
      expect(reverseString(reverseString(input))).toBe(input)
    })
  })
})

// ─── isLongEnough ─────────────────────────────────────────────────────────────

describe('isLongEnough', () => {
  it('returns false for strings shorter than the minimum', () => {
    expect(isLongEnough('ab', 3)).toBe(false)
  })

  it('returns true when length exactly equals the minimum', () => {
    expect(isLongEnough('abc', 3)).toBe(true)
  })

  it('returns true for strings longer than the minimum', () => {
    expect(isLongEnough('abcde', 3)).toBe(true)
  })

  it('uses 3 as the default minimum', () => {
    expect(isLongEnough('ab')).toBe(false)
    expect(isLongEnough('abc')).toBe(true)
  })

  it('counts emoji as single characters', () => {
    // '🔥🔥' is 2 grapheme clusters — should fail min of 3
    expect(isLongEnough('🔥🔥', 3)).toBe(false)
    // '🔥🔥🔥' is 3 grapheme clusters — should pass
    expect(isLongEnough('🔥🔥🔥', 3)).toBe(true)
  })

  it('returns false for an empty string', () => {
    expect(isLongEnough('', 3)).toBe(false)
  })

  it('returns false for non-string input', () => {
    expect(isLongEnough(null, 3)).toBe(false)
    expect(isLongEnough(undefined, 3)).toBe(false)
    expect(isLongEnough(123, 3)).toBe(false)
  })
})