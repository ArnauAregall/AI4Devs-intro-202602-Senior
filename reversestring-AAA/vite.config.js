import { defineConfig } from 'vite'

export default defineConfig({
    root: 'src',
    base: '/AI4Devs-intro-202602-Senior/',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    test: {
        include: ['../test/**/*.test.js'],
    },
})