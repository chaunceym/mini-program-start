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
    shareArticle: function () {
        wx.showActionSheet({
            itemList: ['分享到微信', '分享到朋友圈', '分享到微博']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR1EsSUFBQSxzREFBUSxDQUF3QztBQUN4RCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsRUFBRTtRQUNsQixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFLRCxjQUFjO1FBQWQsaUJBZ0NDO1FBL0JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsZ0JBQWdCLEVBQUUsSUFBSTthQUN2QixDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxTQUFTO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1NBRUg7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsZ0JBQWdCLEVBQUUsS0FBSzthQUN4QixDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxTQUFTO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGFBQWE7WUFDbEIsUUFBUSxFQUFFLFVBQUMsS0FBVTtnQkFDbkIsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUE7Z0JBQ3JDLGNBQWMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUE7Z0JBQzVELEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLGFBQWE7b0JBQ2xCLElBQUksRUFBRSxjQUFjO2lCQUNyQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFlBQVk7UUFDVixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsT0FBTyxDQUFDO1NBQ3JDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQXRCLGlCQW1CUDtRQWpCQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBQ3JCLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxjQUFjLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsYUFBYTtZQUNsQixRQUFRLEVBQUUsVUFBQyxLQUFTO2dCQUNoQixJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO2dCQUM5QixJQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUM7b0JBQzVCLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsZ0JBQWdCLEVBQUUsSUFBSTtxQkFDdkIsQ0FBQyxDQUFBO2lCQUNIO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWNvZGVkVGV4dFNwYW5JbnRlcnNlY3RzV2l0aCB9IGZyb20gXCIuLi8uLi8uLi8kbm9kZV9tb2R1bGVzL3R5cGVzY3JpcHQvbGliL3Rzc2VydmVybGlicmFyeVwiO1xyXG5cclxuLy8gbWluaXByb2dyYW0vcGFnZXMvZGV0YWlsL2RldGFpbC5qc1xyXG5jb25zdCB7IGxpc3REYXRhIH0gPSByZXF1aXJlKCcuLi8uLi9kYXRhL2xpc3RfaW5mby5qcycpO1xyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgZGV0YWlsRGF0YUluZm86IHt9LFxyXG4gICAgaXNBZGRNeUZhdm91cml0ZTogZmFsc2UsXHJcbiAgICBpbmRleDogMFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgYWRkTXlGYXZvdXJpdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YS5pc0FkZE15RmF2b3VyaXRlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaXNBZGRNeUZhdm91cml0ZTogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn5pS26JeP5oiQ5YqfJyxcclxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgfSlcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGlzQWRkTXlGYXZvdXJpdGU6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflj5bmtojmlLbol48nLFxyXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2lzQ29sbGVjdGVkJyxcclxuICAgICAgY29tcGxldGU6IChkYXRhczogYW55KSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbGxlY3Rpb25EYXRhID0gZGF0YXMuZGF0YSB8fCB7fVxyXG4gICAgICAgIGNvbGxlY3Rpb25EYXRhW3RoaXMuZGF0YS5pbmRleF0gPSB0aGlzLmRhdGEuaXNBZGRNeUZhdm91cml0ZVxyXG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAga2V5OiAnaXNDb2xsZWN0ZWQnLFxyXG4gICAgICAgICAgZGF0YTogY29sbGVjdGlvbkRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgc2hhcmVBcnRpY2xlKCl7XHJcbiAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICBpdGVtTGlzdDogWyfliIbkuqvliLDlvq7kv6EnLCfliIbkuqvliLDmnIvlj4vlnIgnLCfliIbkuqvliLDlvq7ljZonXVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xyXG5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGluZGV4OiBvcHRpb25zLmluZGV4XHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZGV0YWlsRGF0YUluZm86IGxpc3REYXRhW3RoaXMuZGF0YS5pbmRleF1cclxuICAgIH0pXHJcbiAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAnaXNDb2xsZWN0ZWQnLFxyXG4gICAgICBjb21wbGV0ZTogKGRhdGFzOmFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNDb2xsZWN0ZWQgPSBkYXRhcy5kYXRhXHJcbiAgICAgICAgICBpZihpc0NvbGxlY3RlZFtvcHRpb25zLmluZGV4XSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgaXNBZGRNeUZhdm91cml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG59KSJdfQ==