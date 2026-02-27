import { reverseString, isLongEnough } from './string-utils.js'

const MIN_LENGTH = 3

const inputField = document.getElementById('inputField')
const outputField = document.getElementById('outputField')
const hint = document.getElementById('hint')

let animationFrame = null
let fadeOutTimeout = null

function updateOutput(value) {
  // Cancel any pending animation
  cancelAnimationFrame(animationFrame)
  clearTimeout(fadeOutTimeout)

  if (!isLongEnough(value, MIN_LENGTH)) {
    // Fade out and show hint
    outputField.classList.remove('visible')
    outputField.classList.add('fade-out')
    hint.classList.remove('hidden')

    fadeOutTimeout = setTimeout(() => {
      outputField.classList.remove('fade-out')
      outputField.textContent = ''
    }, 280)
    return
  }

  // Hide hint, fade in reversed result
  hint.classList.add('hidden')

  // Brief fade-out before updating content (smooth transition on rapid typing)
  outputField.classList.remove('visible')
  outputField.classList.add('fade-out')

  fadeOutTimeout = setTimeout(() => {
    outputField.classList.remove('fade-out')
    outputField.textContent = reverseString(value)
    // Force reflow before adding visible to trigger transition
    animationFrame = requestAnimationFrame(() => {
      outputField.classList.add('visible')
    })
  }, 80)
}

inputField.addEventListener('input', (e) => {
  updateOutput(e.target.value)
})

// Initialise on load (handles pre-filled values)
updateOutput(inputField.value)