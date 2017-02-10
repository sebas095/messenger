const electron = require('electron');
const {app, BrowserWindow} = electron;
require('./server');

let mainWindow;
const port = process.env.PORT || 8080;

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 600
  });

  mainWindow.loadURL(`http://localhost:${port}`);
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
