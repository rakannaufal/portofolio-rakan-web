import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useReducedMotion() {
  const prefersReducedMotion = ref(false)
  let query: MediaQueryList | undefined

  const updatePreference = () => {
    prefersReducedMotion.value = query?.matches ?? false
  }

  onMounted(() => {
    query = window.matchMedia('(prefers-reduced-motion: reduce)')
    updatePreference()
    query.addEventListener('change', updatePreference)
  })

  onBeforeUnmount(() => {
    query?.removeEventListener('change', updatePreference)
  })

  return { prefersReducedMotion }
}
