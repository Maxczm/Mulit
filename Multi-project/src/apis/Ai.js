import request from './request'
//发送消息
export const sendMessageAPI = (data) => {
    return request({
        url: '/chat-messages',
        method: 'POST',
        data
    })
}
//获取会话列表
export const getChatListAPI = (data) => {
    return request({
        url: '/conversations',
        method: 'GET',
        params:data,
    })
}
//获取会话历史消息
export const getChatMessagesAPI = (data) => {
    return request({
        url: '/messages',
        method: 'GET',
        params:data,
    })
}
//停止响应
export const stopResponseAPI = (id,data) => {
    return request({
        url: `/chat-messages/${id}/stop`,
        method: 'POST', 
        data,
    })
}
