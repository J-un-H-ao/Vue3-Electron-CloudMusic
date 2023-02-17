const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    loginWin: () => ipcRenderer.send('loginWinDestroy'),
    indexWin: () => ipcRenderer.send('indexWinDestroy')
})

