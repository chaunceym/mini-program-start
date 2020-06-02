// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
Page({
  data: {
    username: 'chauncey',
    isShow: true
  },

  handleGetUserInfo(data:any){
      if(data.detail.rawData){
        this.getUserInfo()
      }
  },
  handleClick(){
    wx.navigateTo({
      url:'/pages/list/list'
    })
  },
  getUserInfo(){
    wx.getSetting({
      success: (data)=>{
        if(data.authSetting['scope.userInfo']){
          this.setData({
            isShow: false
          })
        }else{
          this.setData({
            isShow: true
          })
        }
      }
    })
    wx.getUserInfo({
      success: (data) => {
        this.setData({
            userInfo: data.userInfo
        })
      },
      fail:()=>{
        console.log('获取用户失败')
      }
    })
  },
  onLoad: function () {
    this.getUserInfo()  
  }
 
})
