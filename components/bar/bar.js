// components/bar/bar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mode: {
      type: "String",
      observer(newMode, oldMode) {

        if (newMode == "login") {
          this.setData({
            iconImage: "./icon/back.png",
            path: "../home/home"
          })
        } else if (newMode == "user") {
          this.setData({
            iconImage: "./icon/back.png",
            path: "../home/home"
          })
        } else if (newMode = "home") {
          this.setData({
            iconImage: "./icon/user.png",
            path: "../login/login"
          })
        }
      }
    },
    // 此字段只需要home页面的bar进行填写
    isLogin: {
      type: "String",
      value: false,
    },
    title: {
      type: "String",
    },
    color: {
      type: "String",
      value: "",
      observer(newColor, oldColor) {
        this.setData({
          color: newColor
        })
      }
    },
    fontColor: {
      type: "String",
      value: "#333",
      observer(nc, oc) {
        this.setData({
          fontColor: nc
        });
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    barHeight: app.globalData.navBarHeight,
    titleMargin: app.globalData.navTitleMargin,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _toPage(e) {

      // 用户已经登录跳转到user页面
      if (this.data.path == "../login/login"
        && this.data.isLogin) {
        wx.redirectTo({
          url: "../user/user",
        })
      } else {
        wx.redirectTo({
          url: this.data.path,
          fail() {
            consoel.err("path填写错误");
          }
        })
      }

    }
  }
})
