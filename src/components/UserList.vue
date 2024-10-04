<script setup>
import UserRow from "./UserRow.vue";
import { useChatStore } from '@/stores/chat';

const store = useChatStore()

</script>

<template>
  <div class="flex flex-col md:w-2/5 border-r-2 ">
    <div class="border-b-2 py-4 px-2">
      <h3 class="text-md font-bold">Выберите пользователя</h3>
    </div>
    <div class="overflow-y-auto">
      <UserRow 
        v-for="user in store.users"
        :user="user"
        :key="user.id"
        @click="store.setCurrentUser(user)" 
      />
    </div>
  </div>
</template>
