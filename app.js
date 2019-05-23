//app.js

var commands0 = require("./commands/commands0.js")
var commands1 = require("./commands/commands1.js")
var commands2 = require("./commands/commands2.js")

const Towxml = require('/towxml/main');     //引入towxml库

App({
  onLaunch: function() {
    if (wx.cloud) {
      wx.cloud.init({
        traceUser: true
      })
    }
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })

    this.globalData.mdText = ''
    this.globalData.allCommands = [commands0.commands, commands1.commands, commands2.commands]

    for (var loop = 0; loop < this.globalData.allCommands.length; loop++) {
      for (var k in this.globalData.allCommands[loop]) {
        let cmdClass = this.globalData.allCommands[loop][k].Class
        if (this.globalData.cmdClass[cmdClass] == undefined) {
          continue
        }
        let letter = k.slice(0, 1)
        let letterIdx = this.globalData.cmdClass[cmdClass].letters.indexOf(letter)
        if (letterIdx > -1) {
          let cmdIdx = this.globalData.cmdClass[cmdClass].commands[letterIdx].length
          this.globalData.cmdClass[cmdClass].commands[letterIdx][cmdIdx] = k
          this.globalData.cmdClass[cmdClass].cmdObject[k] = this.globalData.allCommands[loop][k]
          continue
        }
        letterIdx = this.globalData.cmdClass[cmdClass].letters.length
        this.globalData.cmdClass[cmdClass].letters[letterIdx] = letter
        this.globalData.cmdClass[cmdClass].commands[letterIdx] = [k]
        this.globalData.cmdClass[cmdClass].cmdObject[k] = this.globalData.allCommands[loop][k]
      }
      console.log(this.globalData.cmdClass)
    }
    
  },

  towxml: new Towxml(),

  globalData: {
    cmdClass: {
      "file man": {
        letters: [],
        commands: [], //二维数组
        cmdObject: {}
      },
      "file trans": {
        letters: [],
        commands: [], //二维数组
        cmdObject: {}
      },
      "file editor": {
        letters: [],
        commands: [], //二维数组
        cmdObject: {}
      },
      "file compress": {
        letters: [],
        commands: [], //二维数组
        cmdObject: {}
      },
      "system man": {
        letters: [],
        commands: [], //二维数组
        cmdObject: {}
      },
      "system settings": {
        letters: [],
        commands: [], //二维数组
        cmdObject: {}
      },
      "network comm": {
        letters: [],
        commands: [], //二维数组
        cmdObject: {}
      },
      "disk man": {
        letters: [],
        commands: [], //二维数组
        cmdObject: {}
      },
      "disk maint": {
        letters: [],
        commands: [], //二维数组
        cmdObject: {}
      },
      "other cmds": {
        letters: [],
        commands: [], //二维数组
        cmdObject: {}
      }
    },
    ColorList: [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ]
  }
})