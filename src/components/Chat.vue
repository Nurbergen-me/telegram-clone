<script setup>
import { ref, watch } from 'vue';
import ChatMessage from './ChatMessage.vue';
import { useChatStore } from '@/stores/chat';

const store = useChatStore()
const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim()) {
    store.sendMessage(newMessage.value)
    newMessage.value = ''; 
  }
};


</script>
<template>
  <div class="w-full px-5 flex flex-col justify-between">
    <div class="flex flex-col mt-5 overflow-y-auto">
      <ChatMessage v-for="message in store.currentDialog.chat" :message="message" :key="message.id" />
    </div>
    <div class="py-5 flex gap-1">
      <input
        class="w-full bg-gray-300 py-5 px-3 rounded-xl"
        type="text"
        v-model="newMessage"
        placeholder="Сообщение..."
        @keypress.enter="sendMessage"
      />
     <button 
      class="bg-blue-500 py-5 px-5 rounded-xl text-white text-center min-w-32"
      :class="{'pointer-events-none opacity-70': !newMessage.length}"
      @click="sendMessage"
    >
      Отправить
     </button>
    </div>
  </div>
</template>

