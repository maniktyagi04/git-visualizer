const { app, BrowserWindow } = require('electron')


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('http://localhost:5173/')
}

// app.whenReady().then(() => {
//   createWindow
// })

app.whenReady().then(

    createWindow
    
);