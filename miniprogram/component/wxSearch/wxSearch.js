import { getStorage, setStorage, setData } from '../../utils/util';

const app = getApp()

// component/wxSearch.js
module.exports={
  init(that) {
    this._setData(that,{
      'searchList':getStorage('searchList') || []
    });

    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth  // 屏幕的宽度
    this._setData(that, {
      windowHeight: windowHeight,
      scrollHeight: windowHeight - 67
    })

    console.log('windowWidth: ', windowWidth);
    console.log('windowHeight: ', windowHeight);
  },
  bindShowLog(e,that) {
    this.showlog(that)
  },
  bindHideLog(e, that) {
    this._setData(that, {
      'searchIsHidden': true
    })
  },
  bindInputSchool(e, that) {
    var val = e.detail.value;
    this.matchStroage(that,val)
  },
  bindSearchAllShow(e,that){
    this._setData(that,{
      searchAllShow: true
    })
  },
  
  bindGoSearch(e, that){
    if (e == '') {
      return;
    }
    let startTime = Date.now()
    this._setData(that, {
      loadingIsHidden: false
    })

    let allSearchList = getStorage('searchList') || [];
    if (allSearchList.length > 7) {
      allSearchList.splice(6, allSearchList.length - 7)
    }
    allSearchList.splice(0, 0, e)
    setStorage('searchList', allSearchList)

    this._setData(that, {
      inputVal: ''
    })

    var markText = ''
    var tldrCmdDir = 'https://raw.github.com/tldr-pages/tldr/master/pages/common/'
    var tldrCmdPage = tldrCmdDir.concat(e).concat('.md');
    console.log('tldrCmdPage: ', tldrCmdPage)
    wx.vrequest({
      url: tldrCmdPage,
      success: ret => {
        console.log('success: ', ret.data);
        if (ret.statusCode == 404) {
          markText = 'Not Found: \`'.concat(e).concat('\`');
        } else {
          markText = ret.data
        }
        this._setData(that, {
          mdText: markText,
          searchIsHidden: true,
          searchResultIsHidden: false,
          loadingIsHidden: true
        })
      },
      fail: function (ret) {
        console.log('fail: ', ret.data);
        this._setData(that, {
          mdText: ret.data,
          searchIsHidden: true,
          searchResultIsHidden: false,
          loadingIsHidden: true
        })
      },
      complete: function (ret) {
      }
    })
  },

  bindDelLog(e, that) {
    let val = e.currentTarget.dataset.item;
    let allSearchList = getStorage('searchList') || [];
    let index = allSearchList.indexOf(val);
    allSearchList.splice(index, 1)
    this.updataLog(that,allSearchList)
  },
  bindSearchHidden(that) {
    this._setData(that,{
      searchIsHidden: true
    })
  },
  showlog(that){
    let allSearchList = getStorage('searchList') || [];
    let searchList = []
    if (typeof (allSearchList) != undefined && allSearchList.length > 0) {
      for (var i = 0, len = allSearchList.length; i < len; i++) {
          searchList.push(allSearchList[i])
      }
    }else {
      searchList = allSearchList
    }
    this._setData(that, {
      searchIsHidden: false,
      searchAllShow: false,
      searchResultIsHidden: true,
      searchList
    })
  },
  matchStroage(that, val) {
    let allSearchList = getStorage('searchList') || [];
    let searchList = []
    if (typeof (val) != undefined && val.length > 0 && typeof (allSearchList) != undefined && allSearchList.length > 0) {
      for (var i = 0, len = allSearchList.length; i < len; i++) {
        if (allSearchList[i].indexOf(val) != -1) {
          searchList.push(allSearchList[i])
        }
      }
    } else {
      searchList = allSearchList
    }
    this._setData(that, {
      inputVal: val,
      searchList
    })
  },
  _setData(that, param){
    let tabData = that.data.tabData;
    for (var key in param){
      tabData[key] = param[key];
    }
    that.setData({
      tabData
    })
  },
  updataLog(that, list){
    setStorage('searchList', list)
    this._setData(that,{
      searchList: list
    })
  }
}