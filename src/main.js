const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
let mainWindow = null;

app.on("ready", function(){
    mainWindow = new BrowserWindow({
        heigth : 600,
        width : 800,
        resizable : true
    });
    
    mainWindow.loadURL("file://" + __dirname + "/view/index.html");
    mainWindow.openDevTools();

    mainWindow.on("close",function(){
        mainWindow = null;
    })

    var optWindow = new BrowserWindow({
        heigth : 300,
        width: 500,
        show: false
    });

    optWindow.loadURL("file://" + __dirname + "/view/opt.html");

    ipc.on('toggle-options',function(){
        if (optWindow.isVisible()){
            optWindow.hide();            
        }else{
            optWindow.show();
        }           
    });  

});









