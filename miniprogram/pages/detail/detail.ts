import { decodedTextSpanIntersectsWith } from "../../../$node_modules/typescript/lib/tsserverlibrary";

// miniprogram/pages/detail/detail.js
const { listData } = require('../../data/list_info.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailDataInfo: {},
    isAddMyFavourite: false,
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  addMyFavourite() {
    if (!this.data.isAddMyFavourite) {
      this.setData({
        isAddMyFavourite: true
      })
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration: 1000
      })

    } else {
      this.setData({
        isAddMyFavourite: false
      })
      wx.showToast({
        title: '取消收藏',
        icon: 'success',
        duration: 1000
      })
    }
    wx.getStorage({
      key: 'isCollected',
      complete: (datas: any) => {
        let collectionData = datas.data || {}
        collectionData[this.data.index] = this.data.isAddMyFavourite
        wx.setStorage({
          key: 'isCollected',
          data: collectionData
        })
      }
    })
  },
  shareArticle(){
    wx.showActionSheet({
      itemList: ['分享到微信','分享到朋友圈','分享到微博']
    })
  },
  onLoad: function (options: any) {

    this.setData({
      index: options.index
    })
    this.setData({
      detailDataInfo: listData[this.data.index]
    })
    wx.getStorage({
      key: 'isCollected',
      complete: (datas:any) => {
          const isCollected = datas.data
          if(isCollected[options.index]){
            this.setData({
              isAddMyFavourite: true
            })
          }
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