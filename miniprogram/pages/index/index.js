import { getStorage, setStorage } from '../../utils/util';

const commonCmdDir = 'https://raw.github.com/tldr-pages/tldr/master/pages/common/'
const linuxCmdDir = 'https://raw.github.com/tldr-pages/tldr/master/pages/linux/'

Page({
  data: {
    searchList: getStorage('searchList'),
    hotsSearch: ['ls', 'cd', 'rm', 'mv', 'cp', 'cat', 'pwd', 'mkdir', 'rmdir'], activeIndex: 0,
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
    var that = this;

    //初始渲染-读取storage的历史记录
    that.setData({
      'searchList': getStorage('searchList') || []
    });

    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth  // 屏幕的宽度
    that.setData({
      windowHeight: windowHeight,
      scrollHeight: windowHeight - 67
    })

    console.log('windowWidth: ', windowWidth);
    console.log('windowHeight: ', windowHeight);
  },

  bindSearchAllShow: function (e) {
    var that = this;

    that.setData({
      'searchAllShow': true
    })
  },

  bindInput: function (e) {
    console.log('e: ', e);
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
    var that = this;

    console.log('command: ', e)
    if (e == '') {
      return;
    }

    that.setData({
      'loadingIsHidden': false
    })

    let allSearchList = getStorage('searchList') || [];
    allSearchList.splice(0, 0, e)
    if (allSearchList.length > 8) {
      allSearchList.splice(8, allSearchList.length - 8)
    }
    setStorage('searchList', allSearchList)

    that.setData({
      'inputVal': ''
    })

    var commonCmdPage = commonCmdDir.concat(e).concat('.md');
    var linuxCmdPage = linuxCmdDir.concat(e).concat('.md');
    console.log('commonCmdPage: ', commonCmdPage)
    console.log('linuxCmdPage: ', linuxCmdPage)

    let req1 = wx.vrequest({ url: commonCmdPage, })
    let req2 = wx.vrequest({ url: linuxCmdPage, })

    req1.then(function (data1) {
      console.log(data1)
      if (data1.statusCode != 404 && data1.errMsg != 'request:fail') {
        that.showSearchResult(data1.data, that)
      } else {
        req2.then(function (data2) {
          console.log(data2)
          if (data2.statusCode != 404 && data2.errMsg != 'request:fail') {
            that.showSearchResult(data2.data, that)
          } else {
            that.showSearchResult('Not Found: \`'.concat(e).concat('\`'), that)
          }
        })
      }
    })
  },

  bindGoSearch: function (e) {
    var that = this;

    let val = e.detail.value;
    if (val == '') {
      return;
    }
    that.searchCmd(val)
  },

  bindGoHotSearch: function (e) {
    var that = this;
    console.log('e: ', e);
    let val = e.currentTarget.dataset.item;
    if (val == '') {
      return;
    }
    that.searchCmd(val)
  },

  bindClearSearch: function () {
    var that = this;

    setStorage('searchList', [])
    that.setData({
      'searchList': []
    })
  },

  bindGoHistorySearch(e) {
    var that = this;

    console.log('e: ', e);
    let val = e.currentTarget.dataset.item;
    if (val == '') {
      return;
    }
    that.searchCmd(val)
  },

  showHistory(e) {
    var that = this;

    let allSearchList = getStorage('searchList') || [];
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
    var that = this;

    that.showHistory(e)
  },

  bindSearchHidden() {
    var that = this;

    that.setData({
      'searchIsHidden': true
    })
  }
})