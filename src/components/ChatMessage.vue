<script setup>
import { defineProps, computed } from 'vue';
import { useChatStore } from '@/stores/chat';

const store = useChatStore()
const { message } = defineProps(['message'])

const isCurrentUserMessage = computed(() => {
  return message.from === store.currentUser.id
})

</script>

<template>
  <div v-if="isCurrentUserMessage" class="flex items-end justify-end mb-4">
    <div
      class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
    >
      {{ message.text }}
    </div>
    <img
      :src="store.currentUser.imageUrl"
      class="object-cover h-8 w-8 rounded-full"
      alt=""
    />
  </div>
  <div v-else class="flex items-end justify-start mb-4">
    <img
      :src="store.currentDialog.user.imageUrl"
      class="object-cover h-8 w-8 rounded-full"
      alt=""
    />
    <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
      {{ message.text }}
    </div>
  </div>
</template>