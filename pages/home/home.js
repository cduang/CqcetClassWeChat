import weSwiper from "../../lib/weSwiper.js";

const app = getApp();
const weSwiperProp = {
  slideLength: 7,
}

Page({
  data: {
    // 记录页面变化
    currentPage: 0,
    topWeekScrollLeft: 0,
    isActive: "",
    itemWidth: 121,
    moveBtnInfo: "登录",
    btnLeft: 20,
    btnTop: 100,
    week: {
      "Moday": "星期一",
      "Tuesday": "星期二",
      "Wednesday": "星期三",
      "Thursday": "星期四",
      "Friday": "星期五",
      "Saturday": "星期六",
      "Sunday": "星期天"
    },
    topScrollWeekMap: {
      "Moday": 0,
      "Tuesday": 121,
      "Wednesday": 121 * 2,
      "Thursday": 121 * 3,
      "Friday": 121 * 4,
      "Saturday": 121 * 5,
      "Sunday": 121 * 6
    },

    courses: [
      [{
        title: "Python开发技术",
        startTime: "10:25",
        endTime: "12:00",
        clasroom: "1206",
        color: "#45B39D",
        date: "星期三",
        dateRange: "10-12(周))"
      },
      {
        title: "Python开发技术",
        startTime: "10:25",
        endTime: "12:00",
        clasroom: "1206",
        color: "#45B39D",
        date: "星期三",
        dateRange: "10-12(周))"
      },
        {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        },
        {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        }, {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        }, {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        }, {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        },
        {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        },
        {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        }, {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        }, {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        }, {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        },
      ], [
        {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        }, {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        },
      ], [
        {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        },
      ], [
        {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        },
      ], [
        {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        },
      ], [
        {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        },
      ], [
        {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        }, {
          title: "Python开发技术",
          startTime: "10:25",
          endTime: "12:00",
          clasroom: "1206",
          color: "#45B39D",
          date: "星期三",
          dateRange: "10-12(周))"
        },
      ]
    ]
  },

  onLoad: function () {
    new weSwiper(weSwiperProp);

    let week = Object.keys(this.data.week);
    week.pop();
    week.unshift("Sunday");
    let currentDay =  week[new Date().getDay()];
    this.weswiper.slideTo(Object.keys(this.data.week).indexOf(currentDay));
    this.setData({
      isActive: currentDay,
      topWeekScrollLeft: this.data.topScrollWeekMap[currentDay]
    });

    
  },
  onReady: function () {
    this.setElementWidth("#Moday");
  },
  swiperTouchstart: function (e) {
    this.weswiper.touchstart(e);
    // touch事件开始时记录
    this.setData({
      currentPage: this.weswiper.activeIndex
    })
  },
  swiperTouchmove: function (e) {
    this.weswiper.touchmove(e);
  },
  swiperTouchend: function (e) {
    this.weswiper.touchend(e);
    // touch事件结束时比较
    if (this.data.currentPage !== this.weswiper.activeIndex) {
      let keys = Object.keys(this.data.week);
      let activeIndex = this.weswiper.activeIndex;
      let jumpId = keys[activeIndex];
      this.setData({
        topWeekScrollLeft: this.data.topScrollWeekMap[jumpId]
      })
      this.setActive(keys[activeIndex])
    }
  },
  topTap: function (e) {
    let targetId = e.currentTarget.id;
    let keys = Object.keys(this.data.week);
    let slideToNum = keys.indexOf(targetId);

    this.weswiper.slideTo(slideToNum);
    // 设置滚动条的位置
    this.setData({
      topWeekScrollLeft: this.data.topScrollWeekMap[targetId]
    });
    // console.log(this.data.itemWidth);    
    this.setActive(targetId);

  },
  setElementWidth: function (id) {
    const query = wx.createSelectorQuery();
    query.select(id).boundingClientRect((res) => {
      this.setData({
        topScrollWeekMap: {
          "Moday": 0,
          "Tuesday": res.width,
          "Wednesday": res.width * 2,
          "Thursday": res.width * 3,
          "Friday": res.width * 4,
          "Saturday": res.width * 5,
          "Sunday": res.width * 6
        }
      });
    }).exec()
  },
  //设置点击后的日期为活动样式
  setActive: function (target) {
    this.setData({
      isActive: target
    })
  },
  
});