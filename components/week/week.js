// components/week/week.js
Component({
  properties: {
    activePage: {
      type: Number,
      value: -1,
      observer: function(newPage, oldPage) {
        this._setActiveDayOfWeek(newPage);
      }
    }
  },

  data: {
    scrollLeft: 0,
    week: {
      "Moday": {
        value: "星期一",
        left: 0,
        activeStyle: ""
      },
      "Tuesday": {
        value: "星期二",
        left: 180,
        activeStyle: ""
      },
      "Wednesday": {
        value: "星期三",
        left: 180 * 2,
        activeStyle: ""
      },
      "Thursday": {
        value: "星期四",
        left: 180 * 3,
        activeStyle: ""
      },
      "Friday": {
        value: "星期五",
        left: 180 * 4,
        activeStyle: ""
      },
      "Saturday": {
        value: "星期六",
        left: 180 * 5,
        activeStyle: ""
      },
      "Sunday": {
        value: "星期天",
        left: 180 * 6,
        activeStyle: ""
      }
    }
  },

  methods: {
    /**
     * 用于在用户滑动页面时设置顶部scrollWeek的当前位置和active样式
     * @parm Number 当前活动页面 0-6
     */
    _setActiveDayOfWeek(activePageNum) {
      let dayOfWeek = Object.keys(this.data.week)[activePageNum];
      this.setData({
        scrollLeft: this.data.week[dayOfWeek].left
      })    
      this._setActiveStyle(dayOfWeek)
    },
    /**
     * 
     */
    _tapTouch(e){
      const sourceId = e.currentTarget.id.trim();
      const pn = this._getArrayIndex(Object.keys(this.data.week), sourceId)
      const eventDetail = {
        toPage: pn
      }
      this.triggerEvent("touchWeekScroll", eventDetail)
      this._setActiveDayOfWeek(pn); 
    }, 
    /**
     * 用于设置week_scroll的active样式
     * @parm dayOfWeek Number 类型的星期几.
     */
    _setActiveStyle(dayOfWeek) {
      const temp = "week." + dayOfWeek + ".activeStyle";
      for (let key in this.data.week) {
        let path = "week." + key + ".activeStyle";
        this.setData({
          [path]: ""
        })
      }
      this.setData({
        [temp]: "active"
      })
    },
    /**
     * 通过元素查找数组的下标
     * @parm array 数组
     * @target 需要查找的目标
     * @return 找到则返回 Number类型的下标,否则返回undefinded
     */
    _getArrayIndex(array, target) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {  
          return i;
        }
      }
    }
    

  }
})
