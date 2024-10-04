<script setup>
import { computed } from 'vue';
import { useChatStore } from '@/stores/chat';

const store = useChatStore()

const getFirstLetters = computed(() => {
  if (!store.currentUser) return '??'
  return store.currentUser.name.split(' ').map(word => word[0]).join('');
})

</script>

<template>
  <div
      class="px-5 py-5 flex justify-between items-center bg-white border-b-2"
    >
      <div class="font-semibold text-2xl cursor-pointer" @click="store.reset()">Telegram</div>
      <div class="w-1/2">
        <input
          type="text"
          name=""
          id=""
          placeholder="Поиск"
          class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
        />
      </div>
      <div
        class="h-12 w-12 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center"
      >
        <img
          v-if="store.currentUser"
          :src="store.currentUser.imageUrl"
          class="object-cover h-full w-full rounded-full"
          alt=""
        />
        <span class="absolute m-2">
          {{ getFirstLetters }}
        </span>
      </div>
    </div>
</template>