export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/homepage/home',
    'pages/discover/discover',
    'pages/myself/myself',
    "pages/community/community"
  ],
  tabBar: {
    "backgroundColor": "#FBF3EF",
    "borderStyle": "white",
    "list": [{
        "pagePath": "pages/homepage/home",
        "iconPath": "assets/icon/home.png",
        "selectedIconPath": "assets/icon/home2.png",
        "text": "",
        },{
        "pagePath": "pages/discover/discover",
        "iconPath": "assets/icon/discover.png",
        "selectedIconPath": "assets/icon/discover2.png",
        "text": ""
    },{
      "pagePath": "pages/community/community",
      "iconPath": "assets/icon/community.png",
      "selectedIconPath": "assets/icon/community2.png",
      "text": "",
    },{
        "pagePath": "pages/myself/myself",
        "iconPath": "assets/icon/myself.png",
        "selectedIconPath": "assets/icon/myself2.png",
        "text": ""
    }],
},
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
