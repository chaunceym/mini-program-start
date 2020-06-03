// miniprogram/pages/movies/movies.js
const moviesUrl = 'http://t.yushu.im/v2/movie/top250';
const appMovesData = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviesData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options:any) {
    wx.request({
      url: moviesUrl,
      success:(data)=>{
        this.setData({
          moviesData: data.data.subjects
        })
        appMovesData.data.moviesData = data.data.subjects
      }
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