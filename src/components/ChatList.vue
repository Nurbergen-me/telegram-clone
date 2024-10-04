<script setup>
import { computed, ref } from 'vue';
import UserRow from './UserRow.vue';
import { useChatStore } from '@/stores/chat';

const store = useChatStore()
const search = ref('')

const otherUsers = computed(() => {
  return store.users.filter(user => user.id !== store.currentUser?.id)
})

const filteredUsers = computed(() => {
  return otherUsers.value.filter(user => 
    user.name.toLowerCase().includes(search.value.toLowerCase())
  );
})

</script>

<template>
  <div class="flex flex-col md:w-2/5 border-r-2 overflow-y-auto">
    <div class="border-b-2 py-4 px-2 hidden md:block">
      <input
        type="text"
        placeholder="Поиск"
        v-model="search"
        class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
        @click="searchUser"
      />
    </div>
    <UserRow 
      v-for="user in filteredUsers" 
      :user="user"
      :key="user.id"
      :active="user.id === store.currentDialog.user?.id"
      @click="store.setCurrentDialog(user)"
    >
    </UserRow>
  </div>
</template>
