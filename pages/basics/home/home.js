
const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    elements: [{
      title: '文件管理',
      name: 'file man',
      color: 'cyan',
      icon: 'newsfill'
    },
    {
      title: '文件传输',
      name: 'file trans',
      color: 'cyan',
      icon: 'colorlens'
    },
    {
      title: '文档编辑',
      name: 'file editor',
      color: 'cyan',
      icon: 'font'
    },
    {
      title: '备份压缩',
      name: 'file compress',
      color: 'cyan',
      icon: 'icon'
    },
    {
      title: '系统管理',
      name: 'system man',
      color: 'cyan',
      icon: 'btn'
    },
    {
      title: '系统设置',
      name: 'system settings',
      color: 'cyan',
      icon: 'tagfill'
    },
    {
      title: '网络通讯',
      name: 'network comm',
      color: 'cyan',
      icon: 'myfill'
    },
    {
      title: '磁盘管理',
      name: 'disk man',
      color: 'cyan',
      icon: 'icloading'
    },
    {
      title: '磁盘维护',
      name: 'disk maint',
      color: 'cyan',
      icon: 'copy'
    },
    {
      title: '其他命令',
      name: 'other cmds',
      color: 'cyan',
      icon: 'loading2'
    },
    ],

    mdTextHidden: true,
    inputValue: '',
    mdText: ''
  },

  methods: {
    onSearch: function (e) {
      var that = this

      var input = that.data.inputValue
      //console.log(input)

      var loop = 0
      for (; loop < app.globalData.allCommands.length; loop++) {
        if (app.globalData.allCommands[loop][input] != undefined) {
          //console.log(app.globalData.allCommands[loop][input].MdText)
          that.setData({
            inputValue: '',
            mdText: app.globalData.allCommands[loop][input].MdText,
          })
          break
        }
      }

      //console.log(loop, app.globalData.allCommands.length)

      if (loop == app.globalData.allCommands.length) {
        that.setData({
          inputValue: '',
          mdText: 'Not Found: \`' + input + '\`',
        })
      }

      wx.navigateTo({
        url: '/pages/basics/markdown/markdown?mdText=' + that.data.mdText
      })

      //console.log(that.data.inputValue)
    },

    onKeyInput(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },

    onFocus(e) {
      this.setData({
        inputValue: '',
        mdTextHidden: true
      })
    },

  }

})