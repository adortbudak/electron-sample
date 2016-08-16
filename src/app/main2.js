// main.js
var remote  = require('electron').remote;
var ipc =  require('electron').ipcRenderer;
var Menu    = remote.Menu;
var MenuItem = remote.Menu;


var menu = Menu.buildFromTemplate([
  {
    label: 'Electron',
    submenu: [
      {
        label: 'Options',
        click: function() {
          ipc.send('toggle-options');
        }
      }
    ]
  }
]);

Menu.setApplicationMenu(menu);