<script setup>
import { defineProps } from 'vue';
import { useChatStore } from '@/stores/chat';

const store = useChatStore()

const { user, active } = defineProps(['user', 'active'])

</script>

<template>
  <div
    class="flex flex-row py-4 px-2 gap-2 items-center border-b-2 hover:bg-slate-200 cursor-pointer"
    :class="{'bg-slate-200': active}"
  >
    <div>
      <img
        :src="user.imageUrl"
        class="object-cover h-12 w-12 min-w-12 rounded-full"
        alt=""
      />
    </div>
    <div :class="{'hidden md:block': store.currentUser}">
      <div class="text-lg font-semibold">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>