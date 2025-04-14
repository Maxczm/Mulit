import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { sendMessageAPI, getChatListAPI, getChatMessagesAPI, stopResponseAPI } from '@/apis/Ai'
//持久化
export const useAiStore = defineStore('ai', () => {
  let currentChatId = ref('')
  //发送消息
  const sendMessage = async (data) => {
    const res = await sendMessageAPI(data)
    return res
  }
  //获取会话列表
  const getChatList = async (data) => {
    const res = await getChatListAPI(data)
    return res
  }
  //获取会话历史消息
  const getChatMessages = async (data) => {
    const res = await getChatMessagesAPI(data)
    return res
  }
  //停止响应
  const stopResponse = async (id,data) => {
    const res = await stopResponseAPI(id,data)
    return res
  }
  return { sendMessage, currentChatId, getChatList, getChatMessages, stopResponse }
},
{
  persist: {
    storage: sessionStorage,
  },
})

