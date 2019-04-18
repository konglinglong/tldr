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

  bindGoSearch(e, that) {
    if (e == '') {
      return;
    }
 
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


    var tldrCmdDir = 'https://raw.github.com/tldr-pages/tldr/master/pages/common/'
    var tldrCmdPage = tldrCmdDir.concat(e).concat('.md');
    var linuxCmdDir = 'https://raw.github.com/tldr-pages/tldr/master/pages/linux/'
    var linuxCmdPage = linuxCmdDir.concat(e).concat('.md');
    console.log('tldrCmdPage: ', linuxCmdPage)
    console.log('tldrCmdPage: ', tldrCmdPage)

    let req1 = wx.vrequest({ url: linuxCmdPage, data: {}, })
    let req2 = wx.vrequest({ url: tldrCmdPage, data: {}, })

    var markText = ''

    Promise.all([req1, req2]).then(function (data) {
      console.log(data)
      var loop = 0
      var len = data.length;
      for (loop = 0; loop < len; loop++) {
        if (data[loop].statusCode != 404 && data[loop].errMsg != 'request:fail') {
          break
        }
      }
      if (loop < len) {
        markText = data[loop].data;
      } else {
        markText = 'Not Found: \`'.concat(e).concat('\`');
      }
      that.setData({
        'tabData.mdText': markText,
        'tabData.searchIsHidden': true,
        'tabData.searchResultIsHidden': false,
        'tabData.loadingIsHidden': true
      })
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