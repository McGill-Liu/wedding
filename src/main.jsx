import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { setWechatShare } from './utils/wechatShare.js'

// 设置微信分享
setWechatShare({
  title: '我们结婚啦！张三&李四的婚礼邀请',
  desc: '我们诚挚地邀请您参加我们的婚礼，见证我们人生中最重要的时刻。',
  imgUrl: '/images/1-1.jpg'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)