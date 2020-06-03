"use strict";
var moviesUrl = 'http://t.yushu.im/v2/movie/top250';
Page({
    data: {
        moviesData: []
    },
    onLoad: function (options) {
        var _this = this;
        wx.request({
            url: moviesUrl,
            success: function (data) {
                _this.setData({
                    moviesData: data.data.subjects
                });
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW92aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFNLFNBQVMsR0FBRyxtQ0FBbUMsQ0FBQztBQUN0RCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsRUFBRTtLQUNmO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBVztRQUFyQixpQkFTUDtRQVJDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsU0FBUztZQUNkLE9BQU8sRUFBQyxVQUFDLElBQUk7Z0JBQ1gsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO2lCQUMvQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1pbmlwcm9ncmFtL3BhZ2VzL21vdmllcy9tb3ZpZXMuanNcclxuY29uc3QgbW92aWVzVXJsID0gJ2h0dHA6Ly90Lnl1c2h1LmltL3YyL21vdmllL3RvcDI1MCc7XHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBtb3ZpZXNEYXRhOiBbXVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczphbnkpIHtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IG1vdmllc1VybCxcclxuICAgICAgc3VjY2VzczooZGF0YSk9PntcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbW92aWVzRGF0YTogZGF0YS5kYXRhLnN1YmplY3RzXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxufSkiXX0=