export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/home/home',
    'pages/discover/discover',
    'pages/myself/myself',
    "pages/community/community"
  ],
  tabBar: {
    "list": [{
        "pagePath": "pages/home/home",
        "text": "首页"
        },{
        "pagePath": "pages/discover/discover",
        "text": "发现"
    },{
        "pagePath": "pages/myself/myself",
        "text": "我的"
    },{
      "pagePath": "pages/community/community",
      "text": "我的"
    }],
    "color" : "#56abe4"
},
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
