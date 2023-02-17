const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    //隐藏登陆窗口
    loginWinHide: () => ipcRenderer.send('loginWinHide'),

    //显示登陆窗口
    loginWinShow: () => ipcRenderer.send('loginWinShow'),

    //关闭主页面窗口
    indexWinDestroy: () => ipcRenderer.send('indexWinDestroy')
})

