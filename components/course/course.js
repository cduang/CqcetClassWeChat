// pages/components/courser/courser.js
Component({
  properties: {
    startTime: {
      type: "String",
      value: ""
    },
    endTime: {
      type: "String",
      value: ""
    },
    title: {
      type: "String",
      value: ""
    },
    teacher: {
      type: "String",
      value: ""
    },
    classRoom: {
      type: "String",
      value: ""
    },
    color:{
      type: "String",
      value: ""
    }

  },
  data: {
    
  },
  methods: {
    redirectEditPage: function() {
      wx.redirectTo({
        url: '/pages/edit/edit'
      })
    }
  },
  lifetimes: {
    attached: function() {
      
    }
  }
})
