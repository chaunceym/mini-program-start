"use strict";
var app = getApp();
Page({
    data: {
        username: 'chauncey',
        isShow: true
    },
    handleGetUserInfo: function (data) {
        if (data.detail.rawData) {
            this.getUserInfo();
        }
    },
    handleClick: function () {
        wx.navigateTo({
            url: '/pages/list/list'
        });
    },
    getUserInfo: function () {
        var _this = this;
        wx.getSetting({
            success: function (data) {
                if (data.authSetting['scope.userInfo']) {
                    _this.setData({
                        isShow: false
                    });
                }
                else {
                    _this.setData({
                        isShow: true
                    });
                }
            }
        });
        wx.getUserInfo({
            success: function (data) {
                _this.setData({
                    userInfo: data.userInfo
                });
            },
            fail: function () {
                console.log('获取用户失败');
            }
        });
    },
    onLoad: function () {
        this.getUserInfo();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFDaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLFVBQVU7UUFDcEIsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUVELGlCQUFpQixZQUFDLElBQVE7UUFDdEIsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQztZQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDbkI7SUFDTCxDQUFDO0lBQ0QsV0FBVztRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsa0JBQWtCO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxXQUFXO1FBQVgsaUJBd0JDO1FBdkJDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQyxJQUFJO2dCQUNaLElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO29CQUNwQyxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE1BQU0sRUFBRSxLQUFLO3FCQUNkLENBQUMsQ0FBQTtpQkFDSDtxQkFBSTtvQkFDSCxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE1BQU0sRUFBRSxJQUFJO3FCQUNiLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsT0FBTyxFQUFFLFVBQUMsSUFBSTtnQkFDWixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNULFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDMUIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELElBQUksRUFBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3ZCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VybmFtZTogJ2NoYXVuY2V5JyxcbiAgICBpc1Nob3c6IHRydWVcbiAgfSxcblxuICBoYW5kbGVHZXRVc2VySW5mbyhkYXRhOmFueSl7XG4gICAgICBpZihkYXRhLmRldGFpbC5yYXdEYXRhKXtcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpXG4gICAgICB9XG4gIH0sXG4gIGhhbmRsZUNsaWNrKCl7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6Jy9wYWdlcy9saXN0L2xpc3QnXG4gICAgfSlcbiAgfSxcbiAgZ2V0VXNlckluZm8oKXtcbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKT0+e1xuICAgICAgICBpZihkYXRhLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKXtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgaXNTaG93OiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBpc1Nob3c6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdXNlckluZm86IGRhdGEudXNlckluZm9cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsOigpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLflpLHotKUnKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2V0VXNlckluZm8oKSAgXG4gIH1cbiBcbn0pXG4iXX0=