// pages/login/login.js
const app = getApp();

Page({
  data: {
    containerHeight: 0,
    promptMessage: "如果您是首次使用本小程序,建议您一次确认密码正确再进行登录。如果密码输入错误再重新输入,会占用您较多的时间，本程序在首次登录的时候获得课表可能占用时间比较长。",
    promptErrorStyle: ""
  },
  onLoad: function (options) {
    this.setData({
      containerHeight: app.globalData.windowHeight - (app.globalData.statusBarHeight + 46)
    })
  },
  /**
   * 向后台发送请求以获取课程
   * @parm e 包含了用户名和密码的事件对象
   */

  loginSubmit: function (e) {
    // 验证程序
    let that = this
    this.requestCourse(e.detail.value, that);
  
  },
  // 请求后台后的课程表的函数请求成功会将数据数据保存在本地Storage中
  requestCourse: function (user, that) {
    wx.request({
      url: "https://wechat.classschedule.top:8443/UserServlet",
      header: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      method: "POST",
      data: {
        method: "login",
        username: user.username,
        password: user.password,
        location_school: "重庆电子工程职业学院"
      },
      success: function (res) {
        if (res.statusCode == 200 && res.data.status === "ok") {
          wx.setStorageSync("courses", res.data)
          that.setData({
            promptMessage: "",
            promptErrorStyle: ""
          })
          wx.navigateTo({
            url:"/pages/home/home"
          })
        } else {
          that.setData({
            promptMessage: res.data.errorMessage,
            promptErrorStyle: "promptError"
          })
        }
      },
      fail: function (res) {
        that.setData({
          promptMessage: "网络请求发生错误请稍后重试",
          promptErrorStyle: "promptError"
        })
      }
    })
  }
})