/**
 * 微信分享配置
 */

// 默认分享配置
const defaultShareConfig = {
  title: '我们结婚啦！张三&李四的婚礼邀请',
  desc: '我们诚挚地邀请您参加我们的婚礼，见证我们人生中最重要的时刻。',
  link: 'https://zhoulian1125.site',
  imgUrl: 'https://zhoulian1125.site/images/1-1.jpg'
};

/**
 * 设置微信分享配置
 * @param {Object} config 分享配置
 */
export function setWechatShare(config = {}) {
  const shareConfig = { ...defaultShareConfig, ...config };
  
  // 设置网页标题
  document.title = shareConfig.title;
  
  // 更新meta标签
  updateMetaTags(shareConfig);
  
  // 如果引入了微信JS-SDK，则可以使用以下方法配置分享
  if (typeof wx !== 'undefined') {
    // 配置微信JS-SDK
    wx.ready(() => {
      // 配置朋友圈分享
      wx.onMenuShareTimeline({
        title: shareConfig.title,
        link: shareConfig.link,
        imgUrl: shareConfig.imgUrl,
        success: function() {
          // 分享成功回调
        },
        cancel: function() {
          // 分享取消回调
        }
      });
      
      // 配置朋友分享
      wx.onMenuShareAppMessage({
        title: shareConfig.title,
        desc: shareConfig.desc,
        link: shareConfig.link,
        imgUrl: shareConfig.imgUrl,
        type: 'link',
        dataUrl: '',
        success: function() {
          // 分享成功回调
        },
        cancel: function() {
          // 分享取消回调
        }
      });
    });
  }
}

/**
 * 更新页面meta标签
 * @param {Object} config 分享配置
 */
function updateMetaTags(config) {
  // 更新OG标签
  updateMetaTag('og:title', config.title);
  updateMetaTag('og:description', config.desc);
  updateMetaTag('og:image', config.imgUrl);
  updateMetaTag('og:url', config.link);
  
  // 更新Twitter标签
  updateMetaTag('twitter:title', config.title);
  updateMetaTag('twitter:description', config.desc);
  updateMetaTag('twitter:image', config.imgUrl);
  
  // 更新description标签
  updateMetaTag('description', config.desc);
}

/**
 * 更新或创建meta标签
 * @param {string} property meta标签的property或name属性
 * @param {string} content meta标签的内容
 */
function updateMetaTag(property, content) {
  let metaTag = document.querySelector(`meta[property="${property}"]`) || 
                document.querySelector(`meta[name="${property}"]`);
  
  if (metaTag) {
    metaTag.setAttribute('content', content);
  } else {
    metaTag = document.createElement('meta');
    if (property.startsWith('og:')) {
      metaTag.setAttribute('property', property);
    } else {
      metaTag.setAttribute('name', property);
    }
    metaTag.setAttribute('content', content);
    document.head.appendChild(metaTag);
  }
}

export default {
  setWechatShare,
  defaultShareConfig
};