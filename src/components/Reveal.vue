<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    delay?: number
    reduced?: boolean
  }>(),
  {
    delay: 0,
    reduced: false,
  },
)

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | undefined

function revealImmediately() {
  observer?.disconnect()
  visible.value = true
}

function observeElement() {
  if (!root.value || props.reduced) {
    revealImmediately()
    return
  }

  observer?.disconnect()
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.16 },
  )
  observer.observe(root.value)
}

onMounted(observeElement)

watch(
  () => props.reduced,
  (reduced) => {
    if (reduced) revealImmediately()
  },
)

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="root"
    class="reveal-block"
    :class="{ 'is-visible': visible }"
    :style="{ '--reveal-delay': `${delay}ms` }"
  >
    <slot />
  </div>
</template>
