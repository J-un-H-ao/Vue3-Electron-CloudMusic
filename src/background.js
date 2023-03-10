'use strict'

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'


import path from "path"

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {

  //登陆窗口的显示
  ipcMain.on('loginWinShow', () => {
    loginWin.show()
  })

  //隐藏窗口
  ipcMain.on('loginWinHide', () => {
    loginWin.hide()
  })

  //关闭主页的时候把登陆页面也一起关闭
  ipcMain.on('indexWinDestroy', () => {
    indexWin.destroy()
    loginWin.destroy()
    //close不知道为什么有延迟
  })

  // Create the browser window.
  const indexWin = new BrowserWindow({
    width: 1020,
    height: 670,
    minHeight: 670,
    minWidth: 1020,
    frame: false,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,

      preload: path.join(__dirname, 'preload.js')

    },

  })


  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await indexWin.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // if (!process.env.IS_TEST) indexWin.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    indexWin.loadURL('app://.index.html/')
  }


  const loginWin = new BrowserWindow({
    height: 560,
    width: 360,
    minHeight: 560,
    minWidth: 360,
    maxHeight: 560,
    maxWidth: 360,
    frame: false,
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, "preload.js")
    }
  })
  //开始的时候就隐藏登陆窗口
  loginWin.hide()


  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    //拼接一下路径
    await loginWin.loadURL(`${process.env.WEBPACK_DEV_SERVER_URL}#/login`)

    // if (!process.env.IS_TEST) loginWin.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    loginWin.loadURL('app://./index.html/')
  }


}



// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
