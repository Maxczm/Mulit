import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: localStorage.getItem('theme') === 'dark'
  }),
  
  actions: {
    toggleTheme() {
      
      this.isDark = !this.isDark
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light')
    },
    
    initTheme() {
      const savedTheme = localStorage.getItem('theme')
      if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        this.isDark = prefersDark
        localStorage.setItem('theme', prefersDark ? 'dark' : 'light')
      }
      document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light')
    }
  }
}) 