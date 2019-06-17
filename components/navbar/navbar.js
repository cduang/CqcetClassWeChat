/**
 * 顶部导航栏组件
 */
const app = getApp();
const statusBarHeight = app.globalData.statusBarHeight;

Component({
  data: {
    // 特殊公式
    navHeight: statusBarHeight + 46,
    navColor: "#00ACC1",
    isLogin: true
  },
  methods: {
    fuck: function() {
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }
  }


})

