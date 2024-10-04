<script setup>
import TheHeader from "@/components/TheHeader.vue"

</script>

<template>
  <div class="container mx-auto shadow-lg rounded-lg min-h-screen">
    <TheHeader />
    <div class="flex flex-row h-[calc(100vh-90px)] justify-between bg-white">
      <RouterView />
    </div>
  </div>
</template>
