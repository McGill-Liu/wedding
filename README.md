# 婚礼电子请柬 H5 页面

这是一个使用 Vite + React 构建的婚礼电子请柬 H5 页面，包含自动滑动、背景音乐、精美动画等功能。

## 功能特点

- 12页精美的滑动页面，展示新人的爱情故事
- 自动播放背景音乐（支持多首歌曲循环播放）
- 自动滑动功能（可手动控制暂停/继续）
- 响应式设计，适配移动端设备
- 精美的渐变背景和毛玻璃效果卡片
- 微信分享支持

## 微信分享配置

为了让您的婚礼请柬在微信中分享时显示精美的图文卡片，请按照以下步骤操作：

### 1. 准备分享图片

确保分享图片符合微信要求：
- 建议尺寸：300px * 300px 或 600px * 600px
- 图片格式：JPG或PNG
- 文件大小：不超过1MB

### 2. 更新index.html中的分享配置

在 `index.html` 文件中，找到以下meta标签并根据需要修改：

```html
<!-- 微信分享标题 -->
<meta property="og:title" content="我们结婚啦！张三&李四的婚礼邀请">
<!-- 微信分享描述 -->
<meta property="og:description" content="我们诚挚地邀请您参加我们的婚礼，见证我们人生中最重要的时刻。">
<!-- 微信分享图片 -->
<meta property="og:image" content="https://zhoulian1125.site/images/1-1.jpg">
<!-- 微信分享链接 -->
<meta property="og:url" content="https://zhoulian1125.site">
```

### 3. 使用微信JS-SDK（可选，需要后端支持）

如果您希望更精确地控制微信分享行为，可以引入微信JS-SDK：

1. 在index.html中引入微信JS-SDK：
```html
<script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
```

2. 在后端配置微信公众号的access_token和jsapi_ticket（需要公众号权限）

3. 通过后端接口获取签名信息，配置wx.config

### 4. 部署注意事项

1. 确保分享图片可以通过公网访问
2. 确保页面可以在HTTPS下正常访问（微信要求）
3. 确保页面加载速度足够快

## 部署到腾讯云EdgeOne Pages

1. 将代码推送到GitHub仓库
2. 在腾讯云EdgeOne Pages中关联您的GitHub仓库
3. 设置构建命令为 `npm run build`
4. 设置输出目录为 `dist`

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 自定义内容

您可以根据需要修改以下内容：

1. 页面文本内容：修改 `src/pages/` 目录下的各页面组件
2. 图片资源：替换 `public/images/` 目录下的图片
3. 背景音乐：替换 `public/audios/` 目录下的音频文件
4. 背景颜色：修改 `src/App.css` 中的页面背景渐变色
5. 自动滑动时间：修改 `src/App.jsx` 中的自动播放间隔时间

## 技术栈

- React
- Vite
- react-slick（滑动组件）
- shadcn/ui风格组件

## 注意事项

1. 项目需要Node.js 20.19+或22.12+版本才能正常运行
2. 背景音乐自动播放可能受到浏览器限制，需要用户交互才能开始播放
3. 在微信中打开时，可能需要用户手动刷新页面才能正确加载分享配置