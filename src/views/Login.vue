<script setup>
import { onMounted } from "vue"
import ChatList from "@/components/ChatList.vue"
import Chat from "@/components/Chat.vue"
import UserList from "@/components/UserList.vue"
import { useChatStore } from '@/stores/chat.js'

const store = useChatStore()

onMounted(()=> {
  window.addEventListener("storage", store.handleStorageChange);
})
</script>

<template>
  <UserList v-if="!store.currentUser" />
  <template v-else>
    <ChatList />
    <Chat v-if="store.currentDialog.open"/>
  </template>
</template>
