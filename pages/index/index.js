
Page({
  data: {
    PageCur: 'basics'
  },
  NavChange(e) {
    // console.log('e: ', e)
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '太长不读--简化版linux man手册',
      imageUrl: '/images/logo.png',
      path: '/pages/index/index'
    }
  },
})