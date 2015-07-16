var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function(){
    var mainWindow = new BrowserWindow({
        width: '1000',
        heigth: '700'
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    // Open the devtools.
    mainWindow.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

});
