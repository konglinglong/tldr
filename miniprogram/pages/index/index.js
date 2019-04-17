//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    title: 'aa',
    content: 'bb',
    focus: false,
    inputValue: ""
  },
  
  onLoad: function() {
    var that = this
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      that.getTldr()
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  getTldr: function () {
    wx.vrequest({
      url: 'https://raw.github.com/tldr-pages/tldr/master/pages/common/ls.md',
      success: ret => {
        console.log(ret.data);
      }
    })
    // wx.vrequest({
    //   url: url,
    //   data: params,
    //   success: function (res) {
    //     console.log('res: ', res)
    //   },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
  },
  formSubmit: function (e) {
    var tldrCmdDir = 'https://raw.github.com/tldr-pages/tldr/master/pages/common/'
    var tldrCmdPage = tldrCmdDir.concat(e.detail.value.input).concat('.md');
    console.log('tldrCmdPage: ', tldrCmdPage)
    wx.vrequest({
      url: tldrCmdPage,
      success: ret => {
        console.log('success: ', ret.data);
        this.setData({
          content: ret.data
        })
      },
      fail: function (ret) {
        console.log('fail: ', ret.data);
      },
      complete: function (ret) {
        console.log('complete: ', ret.data);
      }
    })
  },
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})
