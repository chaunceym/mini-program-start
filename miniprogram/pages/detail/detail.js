"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listData = require('../../data/list_info.js').listData;
Page({
    data: {
        detailDataInfo: {},
        isAddMyFavourite: false,
        index: 0
    },
    addMyFavourite: function () {
        var _this = this;
        if (!this.data.isAddMyFavourite) {
            this.setData({
                isAddMyFavourite: true
            });
            wx.showToast({
                title: '收藏成功',
                icon: 'success',
                duration: 1000
            });
        }
        else {
            this.setData({
                isAddMyFavourite: false
            });
            wx.showToast({
                title: '取消收藏',
                icon: 'success',
                duration: 1000
            });
        }
        wx.getStorage({
            key: 'isCollected',
            complete: function (datas) {
                var collectionData = datas.data || {};
                collectionData[_this.data.index] = _this.data.isAddMyFavourite;
                wx.setStorage({
                    key: 'isCollected',
                    data: collectionData
                });
            }
        });
    },
    onLoad: function (options) {
        var _this = this;
        this.setData({
            index: options.index
        });
        this.setData({
            detailDataInfo: listData[this.data.index]
        });
        wx.getStorage({
            key: 'isCollected',
            complete: function (datas) {
                var isCollected = datas.data;
                if (isCollected[options.index]) {
                    _this.setData({
                        isAddMyFavourite: true
                    });
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR1EsSUFBQSxzREFBUSxDQUF3QztBQUN4RCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsRUFBRTtRQUNsQixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFLRCxjQUFjO1FBQWQsaUJBZ0NDO1FBL0JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsZ0JBQWdCLEVBQUUsSUFBSTthQUN2QixDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxTQUFTO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1NBRUg7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsZ0JBQWdCLEVBQUUsS0FBSzthQUN4QixDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxTQUFTO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGFBQWE7WUFDbEIsUUFBUSxFQUFFLFVBQUMsS0FBVTtnQkFDbkIsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUE7Z0JBQ3JDLGNBQWMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUE7Z0JBQzVELEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLGFBQWE7b0JBQ2xCLElBQUksRUFBRSxjQUFjO2lCQUNyQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFBdEIsaUJBbUJQO1FBakJDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGNBQWMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLFFBQVEsRUFBRSxVQUFDLEtBQVM7Z0JBQ2hCLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7Z0JBQzlCLElBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQztvQkFDNUIsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxnQkFBZ0IsRUFBRSxJQUFJO3FCQUN2QixDQUFDLENBQUE7aUJBQ0g7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlY29kZWRUZXh0U3BhbkludGVyc2VjdHNXaXRoIH0gZnJvbSBcIi4uLy4uLy4uLyRub2RlX21vZHVsZXMvdHlwZXNjcmlwdC9saWIvdHNzZXJ2ZXJsaWJyYXJ5XCI7XHJcblxyXG4vLyBtaW5pcHJvZ3JhbS9wYWdlcy9kZXRhaWwvZGV0YWlsLmpzXHJcbmNvbnN0IHsgbGlzdERhdGEgfSA9IHJlcXVpcmUoJy4uLy4uL2RhdGEvbGlzdF9pbmZvLmpzJyk7XHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBkZXRhaWxEYXRhSW5mbzoge30sXHJcbiAgICBpc0FkZE15RmF2b3VyaXRlOiBmYWxzZSxcclxuICAgIGluZGV4OiAwXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBhZGRNeUZhdm91cml0ZSgpIHtcclxuICAgIGlmICghdGhpcy5kYXRhLmlzQWRkTXlGYXZvdXJpdGUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpc0FkZE15RmF2b3VyaXRlOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICfmlLbol4/miJDlip8nLFxyXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICB9KVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaXNBZGRNeUZhdm91cml0ZTogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+WPlua2iOaUtuiXjycsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnaXNDb2xsZWN0ZWQnLFxyXG4gICAgICBjb21wbGV0ZTogKGRhdGFzOiBhbnkpID0+IHtcclxuICAgICAgICBsZXQgY29sbGVjdGlvbkRhdGEgPSBkYXRhcy5kYXRhIHx8IHt9XHJcbiAgICAgICAgY29sbGVjdGlvbkRhdGFbdGhpcy5kYXRhLmluZGV4XSA9IHRoaXMuZGF0YS5pc0FkZE15RmF2b3VyaXRlXHJcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICBrZXk6ICdpc0NvbGxlY3RlZCcsXHJcbiAgICAgICAgICBkYXRhOiBjb2xsZWN0aW9uRGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XHJcblxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaW5kZXg6IG9wdGlvbnMuaW5kZXhcclxuICAgIH0pXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBkZXRhaWxEYXRhSW5mbzogbGlzdERhdGFbdGhpcy5kYXRhLmluZGV4XVxyXG4gICAgfSlcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdpc0NvbGxlY3RlZCcsXHJcbiAgICAgIGNvbXBsZXRlOiAoZGF0YXM6YW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpc0NvbGxlY3RlZCA9IGRhdGFzLmRhdGFcclxuICAgICAgICAgIGlmKGlzQ29sbGVjdGVkW29wdGlvbnMuaW5kZXhdKXtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBpc0FkZE15RmF2b3VyaXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcbn0pIl19