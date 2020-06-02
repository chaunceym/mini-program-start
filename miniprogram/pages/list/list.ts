// miniprogram/pages/list.js
const {listData}  = require('../../data/list_info.js')
Page({

  /**
   * 页面的初始数据
   */

  data: {
    list_info: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log(listData)
    this.setData({
      list_info: listData
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

})