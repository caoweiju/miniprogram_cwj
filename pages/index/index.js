//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    headerBanner: [
      {
        url: '1',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577016620226&di=801db5442bc35c11aead1ceac9066235&imgtype=0&src=http%3A%2F%2Ffile05.16sucai.com%2F2015%2F0702%2F26ca14bd84e3be0eb693943e0f0f8088.jpg'
      },
      {
        url: '2',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577016620225&di=94502cd5597bd1be6f126ae184883212&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd6%2F1707%2Fa6%2F7e588d96041e4fb5.jpg_r_720x480x95_3f2d5ba6.jpg'
      },
      {
        url: '3',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577016708358&di=580243818fdc573d97fee702c2b051b4&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F58c148d1c4f74.jpg'
      }
    ],
    headerEntry: [
      {
        img: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
        url: '1',
        txt: '测试'
      },
      {
        img: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
        url: '2',
        txt: '测试'
      },
      {
        img: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
        url: '3',
        txt: '测试'
      },
      {
        img: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
        url: '4',
        txt: '测试'
      },
      {
        img: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
        url: '5',
        txt: '测试'
      },
      {
        img: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
        url: '6',
        txt: '测试'
      },
      {
        img: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
        url: '7',
        txt: '测试'
      },
      {
        img: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
        url: '8',
        txt: '测试'
      },
      {
        img: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
        url: '9',
        txt: '测试'
      },
      {
        img: 'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
        url: '10',
        txt: '测试'
      },
    ],
    blocks: [
      {
        url: '1',
        img: 'https://s.qunarzz.com/package_mobile/home-activity/group-190212.png'
      },
      {
        url: '2',
        img: 'https://s.qunarzz.com/package_mobile/home-activity/group-190212.png'
      },
      {
        url: '3',
        img: 'https://s.qunarzz.com/package_mobile/home-activity/group-190212.png'
      },
      {
        url: '4',
        img: 'https://s.qunarzz.com/package_mobile/home-activity/group-190212.png'
      },
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
