var exec = require('child_process').exec, child;

var Global = (function () {
    function Global() {
        this.greeting = 'test';
    }

    Global.prototype.getList = function () {
        return exec('npm list --depth=0 -g -json -long', {
            maxBuffer: 500 * 1024
        }, function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                return stdout;
            }
        });
    };

    return Global;
})();

exports.Global = Global;
