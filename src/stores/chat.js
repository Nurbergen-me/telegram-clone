import { defineStore } from "pinia";

export const useChatStore = defineStore('chat', {
  state: () => ({
    currentUser: null,
    currentDialog: {
      user: null,
      open: false,
      chat: [],
    },
    users: [
      {
        id: 1,
        name: 'Leslie Alexander',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        id: 2,
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        id: 3,
        name: 'Dries Vincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        id: 4,
        name: 'Lindsay Walton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        id: 5,
        name: 'Courtney Henry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        id: 6,
        name: 'Tim Cook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
    ],
    chatHistory: []
  }),
  actions: {
    setCurrentUser(user) {
      this.currentUser = user
    },
    setCurrentDialog(user) {
      this.getChatHistory()
      this.currentDialog.open = true
      this.currentDialog.user = user
      this.currentDialog.chat = 
        this.chatHistory.filter(chat => 
            (chat.from === this.currentUser.id && chat.to === user.id || 
             chat.to === this.currentUser.id && chat.from === user.id))
    },
    getChatHistory() {
      this.chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || []
    },
    sendMessage(message) {
      const newMessage = {
        id: Math.floor(10000000 + Math.random() * 90000000),
        text: message,
        from: this.currentUser.id,
        to: this.currentDialog.user.id,
        read: false
      } 
      this.currentDialog.chat.push(newMessage)
      this.chatHistory.push(newMessage)
      localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
    },
    handleStorageChange() {
      if (!this.currentDialog.user) return
      this.setCurrentDialog(this.currentDialog.user)
    },

    reset() {
      this.currentUser = null
      this.currentDialog = {
        user: null,
        open: false,
        chat: [],
      }
    }
  }
})