// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  logout: function() {
    wx.removeStorage({
      key: 'courses',
      success: function(res) {
        wx.redirectTo({
          url: '../home/home',
        })
      },
    })
  }


})