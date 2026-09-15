<script setup lang="ts">
// Lightweight CSS-only particle background - no WebGL/Three.js
</script>

<template>
  <div class="scene-shell-simple">
    <!-- Simple CSS particle background -->
    <div class="particle-bg" aria-hidden="true">
      <div class="particle" v-for="n in 30" :key="n" :style="{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${20 + Math.random() * 20}s`
      }"></div>
    </div>
  </div>
</template>
