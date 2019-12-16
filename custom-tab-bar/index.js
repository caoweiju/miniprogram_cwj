Component({
  data: {
    selected: 0,
    color: "#2c2c2c",
    selectedColor: "#ff9800",
    list: [{
        "pagePath": "/pages/index/index",
        "iconPath": "/assets/imgs/home_off.png",
        "selectedIconPath": "/assets/imgs/home_on.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/logs/logs",
        "iconPath": "/assets/imgs/cont_off.png",
        "selectedIconPath": "/assets/imgs/cont_on.png",
        "text": "内容"
      },
      {
        "pagePath": "/pages/mine/mine",
        "iconPath": "/assets/imgs/mine_off.png",
        "selectedIconPath": "/assets/imgs/mine_on.png",
        "text": "我的"
      }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})