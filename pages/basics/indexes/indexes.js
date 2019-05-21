
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    mdTextHidden: true,
    hidden: true,
    letterList: [],
    cmdList: [], //二维数组
    cmdObject: {},
    mdText: '',
    inputValue: ''
  },

  onLoad(options) {
    wx.showLoading({
      title: '加载中',
    })
    console.log(options)

    let cmdClass = options.from;
    if (app.globalData.cmdClass[cmdClass] != undefined) {
      this.setData({
        letterList: app.globalData.cmdClass[cmdClass].letters,
        listCur: app.globalData.cmdClass[cmdClass].letters[0],
        cmdList: app.globalData.cmdClass[cmdClass].commands,
        cmdObject: app.globalData.cmdClass[cmdClass].cmdObject
      })
    }
    console.log(this.data.cmdList)
    console.log(this.data.cmdObject)
  },

  onReady() {
    let that = this;
    console.log("onReady")
    wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function(res) {
      that.setData({
        boxTop: res.top
      })
    }).exec();
    wx.createSelectorQuery().select('.indexes').boundingClientRect(function(res) {
      that.setData({
        barTop: res.top
      })
      wx.hideLoading()
    }).exec()

  },

  //获取文字信息
  getCur(e) {
    this.setData({
      hidden: false,
      listCur: this.data.letterList[e.target.id],
    })
  },

  setCur(e) {
    this.setData({
      hidden: true,
      listCur: this.data.listCur
    })
  },

  //滑动选择Item
  tMove(e) {
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      that = this;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 20);
      this.setData({
        listCur: that.data.list[num]
      })
    };
  },

  //触发全部开始选择
  tStart() {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd() {
    this.setData({
      hidden: true,
      listCurID: this.data.listCur
    })
  },
  
  indexSelect(e) {
    let that = this;
    let barHeight = this.data.barHeight;
    let list = this.data.letterList;
    let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setData({
          listCur: list[i],
          movableY: i * 20
        })
        return false
      }
    }
  },

  onSearch: function (e) {
    var that = this

    var cmd = e.currentTarget.dataset.item
    console.log(cmd)

    var loop = 0
    for (; loop < app.globalData.allCommands.length; loop++) {
      if (app.globalData.allCommands[loop][cmd] != undefined) {
        //console.log(app.globalData.allCommands[loop][cmd].MdText)
        that.setData({
          inputValue: '',
          mdText: app.globalData.allCommands[loop][cmd].MdText,
        })
        break
      }
    }

    //console.log(loop, app.globalData.allCommands.length)

    if (loop == app.globalData.allCommands.length) {
      that.setData({
        inputValue: '',
        mdText: 'Not Found: \`' + cmd + '\`',
      })
    }

    wx.navigateTo({
      url: '/pages/basics/markdown/markdown?mdText=' + that.data.mdText
    })

    //console.log(that.data.inputValue)
  },

  onFocus(e) {
    this.setData({
      inputValue: '',
      mdTextHidden: true
    })
  },
});