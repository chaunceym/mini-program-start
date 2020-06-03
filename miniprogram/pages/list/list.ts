"use strict";
var listData = require('../../data/list_info.js').listData;
Page({
    data: {
        list_info: []
    },
    onLoad: function () {
        this.setData({
            list_info: listData
        });
    }, 
    toCarouselDetail(event:any){
      const index = event.target.dataset.index
      wx.navigateTo({
        url: `/pages/detail/detail?index=${index}`,
      })
    },
    toDetail(event:any){
        const index = event.currentTarget.dataset.index
        wx.navigateTo({
          url: `/pages/detail/detail?index=${index}`,
        })
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
});
