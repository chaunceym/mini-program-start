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
    toCarouselDetail: function (event) {
        var index = event.target.dataset.index;
        wx.navigateTo({
            url: "/pages/detail/detail?index=" + index,
        });
    },
    toDetail: function (event) {
        var index = event.currentTarget.dataset.index;
        wx.navigateTo({
            url: "/pages/detail/detail?index=" + index,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUMsUUFBUSxDQUFDO0FBQzNELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLFNBQVMsRUFBRSxFQUFFO0tBQ2hCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFNBQVMsRUFBRSxRQUFRO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxnQkFBZ0IsWUFBQyxLQUFTO1FBQ3hCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQTtRQUN4QyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGdDQUE4QixLQUFPO1NBQzNDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRLFlBQUMsS0FBUztRQUNkLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQTtRQUMvQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGdDQUE4QixLQUFPO1NBQzNDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxPQUFPLEVBQUU7SUFDVCxDQUFDO0lBQ0QsTUFBTSxFQUFFO0lBQ1IsQ0FBQztJQUNELE1BQU0sRUFBRTtJQUNSLENBQUM7SUFDRCxRQUFRLEVBQUU7SUFDVixDQUFDO0lBQ0QsaUJBQWlCLEVBQUU7SUFDbkIsQ0FBQztJQUNELGFBQWEsRUFBRTtJQUNmLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIGxpc3REYXRhID0gcmVxdWlyZSgnLi4vLi4vZGF0YS9saXN0X2luZm8uanMnKS5saXN0RGF0YTtcclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGlzdF9pbmZvOiBbXVxyXG4gICAgfSxcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGxpc3RfaW5mbzogbGlzdERhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0sIFxyXG4gICAgdG9DYXJvdXNlbERldGFpbChldmVudDphbnkpe1xyXG4gICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYC9wYWdlcy9kZXRhaWwvZGV0YWlsP2luZGV4PSR7aW5kZXh9YCxcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB0b0RldGFpbChldmVudDphbnkpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvZGV0YWlsL2RldGFpbD9pbmRleD0ke2luZGV4fWAsXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG4gICAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG4gICAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG4gICAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIH0sXHJcbiAgICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xyXG4gICAgfSxcclxuICAgIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=