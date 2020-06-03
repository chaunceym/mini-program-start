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
        wx.switchTab({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFDaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLFVBQVU7UUFDcEIsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUVELGlCQUFpQixZQUFDLElBQVE7UUFDdEIsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQztZQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDbkI7SUFDTCxDQUFDO0lBQ0QsV0FBVztRQUNULEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxHQUFHLEVBQUMsa0JBQWtCO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxXQUFXO1FBQVgsaUJBd0JDO1FBdkJDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQyxJQUFJO2dCQUNaLElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO29CQUNwQyxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE1BQU0sRUFBRSxLQUFLO3FCQUNkLENBQUMsQ0FBQTtpQkFDSDtxQkFBSTtvQkFDSCxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE1BQU0sRUFBRSxJQUFJO3FCQUNiLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsT0FBTyxFQUFFLFVBQUMsSUFBSTtnQkFDWixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNULFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDMUIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELElBQUksRUFBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3ZCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB1c2VybmFtZTogJ2NoYXVuY2V5JyxcbiAgICBpc1Nob3c6IHRydWVcbiAgfSxcblxuICBoYW5kbGVHZXRVc2VySW5mbyhkYXRhOmFueSl7XG4gICAgICBpZihkYXRhLmRldGFpbC5yYXdEYXRhKXtcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpXG4gICAgICB9XG4gIH0sXG4gIGhhbmRsZUNsaWNrKCl7XG4gICAgd3guc3dpdGNoVGFiKHtcbiAgICAgIHVybDonL3BhZ2VzL2xpc3QvbGlzdCdcbiAgICB9KVxuICB9LFxuICBnZXRVc2VySW5mbygpe1xuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogKGRhdGEpPT57XG4gICAgICAgIGlmKGRhdGEuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pe1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBpc1Nob3c6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGlzU2hvdzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICB1c2VySW5mbzogZGF0YS51c2VySW5mb1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6KCk9PntcbiAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+Wksei0pScpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nZXRVc2VySW5mbygpICBcbiAgfVxuIFxufSlcbiJdfQ==