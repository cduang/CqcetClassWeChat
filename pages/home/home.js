import weSwiper from "../../lib/weSwiper.js";

const app = getApp();
const windowHeight = app.globalData.windowHeight;
const statusBarHeight = app.globalData.statusBarHeight;
const weSwiperProp = {
  slideLength: 7,
}

Page({
  data: {
    courses: [],
    // 记录页面变化
    activePage: 0,
    timeMapping: {
      1: {
        startTime: "8:30",
        endTime: "10:05"
      },
      3: {
        startTime: "10:25",
        endTime: "12:00",
      },
      5: {
        startTime: "2:00",
        endTime: "3:35",
      },
      7: {
        startTime: "3:55",
        endTime: "5:30",
      },
      9: {
        startTime: "6:30",
        endTime: "8:05"
      },
      12: {
        startTime: "8:25",
        endTime: "10: 00"
      }
    },
    colors: [
      "#EC7063",
      "#CB4335",
      "#E74C3C",
      "#27AE60",
      "#1E8449",
      "#29B6F6",
      "#EB984E",
      "#7CB342",
      "#8BC34A",
      "#EC7063",
      "#E57373",
      "#16A085",
      "#641E16",
      "#154360",
      "#424949",
      "#17202A",
      "#0B5345",
      "#FF8F00",
      "#F4511E"
    ]
  },

  onLoad: function () {
    new weSwiper(weSwiperProp);
    // 从Storage加载课程
    this.loadCourse();
  },
  swiperTouchstart: function (e) {
    this.weswiper.touchstart(e);
  },
  swiperTouchmove: function (e) {
    this.weswiper.touchmove(e);
  },
  swiperTouchend: function (e) {
    this.weswiper.touchend(e);
    this.setCurrentPage(this.weswiper.activeIndex);
  },
  /**
   * 接收WeekScroll的点击事件并进行page的跳转
   */
  toPage: function (e) {
    this.setCurrentPage(e.detail.toPage);
  },
  /**
   * 设置当前页面
   * @param pageNuber 0-6
   */
  setCurrentPage: function (pageNumber) {
    this.setData({
      activePage: pageNumber
    })
    this.weswiper.slideTo(pageNumber);
  },
  /**
   * 从Stroage中加载课程
   */
  loadCourse: function () {
    const storage = wx.getStorageSync("courses");
    let arr = [];
    for (let key in storage.data) {
      // 添加上课时间和下课时间,和课程的颜色
      let weekCourse = storage.data[key];
      for (let i = 0; i < weekCourse.length; i++) {
        let randIndex = this.randUnique(0, this.data.colors.length - 1, 1)[0];
        weekCourse[i].color = this.data.colors[randIndex];
        weekCourse[i].classTime = this.data.timeMapping[weekCourse[i].classTime];
      }
      arr.push(weekCourse);
    }
    this.setData({
      courses: arr
    })
  },
  /**
   * 用于产生固定范围的随机数(不能完全保证数值唯一)
   * @parm start Number 最大数
   * @parm end Number 最小数
   * @parm size Number 需要结果数组的length
   * @return [] 结果数组
   */
  randUnique: function (start, end, size) {
    var allNums = new Array();
    size = size ? (size > end - start ? end - start : size) : 1
    for (var i = start, k = 0; i <= end; i++ , k++) {
      allNums[k] = i;
    }
    allNums.sort(function () { return 0.5 - Math.random(); });
    return allNums.slice(0, size);
  },

});