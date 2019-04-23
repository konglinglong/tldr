import {
  getStorage,
  setStorage
} from '../../utils/util';

const commonCmdDir = 'https://raw.github.com/tldr-pages/tldr/master/pages/common/'
const linuxCmdDir = 'https://raw.github.com/tldr-pages/tldr/master/pages/linux/'
const cloudTldrDir = 'cloud://kong-239266.6b6f-kong-239266/tldr/'

Page({
  data: {
    searchList: getStorage('searchList'),
    hotsSearch: ['ls', 'cd', 'rm', 'mv', 'cp', 'cat', 'pwd', 'mkdir', 'rmdir'],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    searchResultIsHidden: true,
    searchIsHidden: true,
    searchAllShow: false,
    loadingIsHidden: true,
    inputVal: '',
    mdText: '',
    windowHeight: 0,
    scrollHeight: 400
  },

  onLoad: function (options) {
    var that = this

    //初始渲染-读取storage的历史记录
    that.setData({
      'searchList': getStorage('searchList')
    })

    const res = wx.getSystemInfoSync()
    that.setData({
      windowHeight: res.windowHeight,
      scrollHeight: res.windowHeight - 67
    })
  },

  bindSearchAllShow: function (e) {
    var that = this

    that.setData({
      'searchAllShow': true
    })
  },

  bindInput: function (e) {
    console.log('e: ', e)
    return e.detail.value.replace(/[^a-zA-Z]/g, '')
  },

  showSearchResult: function (e, that) {
    that.setData({
      'mdText': e,
      'searchIsHidden': true,
      'searchResultIsHidden': false,
      'loadingIsHidden': true
    })
  },

  searchCmd: function (e) {
    var that = this

    console.log('command: ', e)
    if (e == '') {
      return
    }

    that.setData({
      'loadingIsHidden': false,
      'inputVal': ''
    })

    let allSearchList = getStorage('searchList')
    allSearchList.splice(0, 0, e)
    if (allSearchList.length > 8) {
      allSearchList.splice(8, allSearchList.length - 8)
    }
    setStorage('searchList', allSearchList)

    var commonFildID = cloudTldrDir.concat('pages/common/').concat(e).concat('.md')
    var linuxFileID = cloudTldrDir.concat('pages/linux/').concat(e).concat('.md')
    console.log('commonFildID: ', commonFildID)
    console.log('linuxFileID: ', linuxFileID)

    wx.cloud.getTempFileURL({
      fileList: [{
        fileID: commonFildID
      },
      {
        fileID: linuxFileID
      }],
      success: function (res1) {
        console.log(res1)
        var loop = 0
        var len = res1.fileList.length
        for (loop = 0; loop < len; loop++) {
          if (res1.fileList[loop].status == 0 && res1.fileList[loop].tempFileURL != '') {
            wx.request({
              url: res1.fileList[loop].tempFileURL,
              method: 'GET',
              success: function (res2) {
                that.showSearchResult(res2.data, that)
              },
              fail: function (res2) {
                that.showSearchResult('Not Found: \`'.concat(e).concat('\`'), that)
              }
            })
            break
          }
        }
        if (loop == len) {
          that.showSearchResult('Not Found: \`'.concat(e).concat('\`'), that)
        }
      },
      fail: function (res1) {
        console.log('res1: ', res1)
        that.showSearchResult('Not Found: \`'.concat(e).concat('\`'), that)
      }
    })
  },

  bindGoSearch: function (e) {
    var that = this

    let val = e.detail.value
    if (val == '') {
      return
    }
    that.searchCmd(val)
  },

  bindGoHotSearch: function (e) {
    var that = this
    console.log('e: ', e)
    let val = e.currentTarget.dataset.item
    if (val == '') {
      return
    }
    that.searchCmd(val)
  },

  bindClearSearch: function () {
    var that = this

    setStorage('searchList', [])
    that.setData({
      'searchList': []
    })
  },

  bindGoHistorySearch(e) {
    var that = this

    console.log('e: ', e)
    let val = e.currentTarget.dataset.item
    if (val == '') {
      return
    }
    that.searchCmd(val)
  },

  showHistory(e) {
    var that = this

    let allSearchList = getStorage('searchList')
    let searchList = []
    if (typeof (allSearchList) != undefined && allSearchList.length > 0) {
      for (var i = 0, len = allSearchList.length; i < len; i++) {
        searchList.push(allSearchList[i])
      }
    } else {
      searchList = allSearchList
    }

    that.setData({
      'searchList': searchList,
      'searchIsHidden': false,
      'searchAllShow': false,
      'searchResultIsHidden': true
    })
  },

  bindShowHistory(e) {
    var that = this

    that.showHistory(e)
  },

  bindSearchHidden() {
    var that = this

    that.setData({
      'searchIsHidden': true
    })
  }
})