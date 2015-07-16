console.log('test');
//var exec = require('child_process').exec, child;

var Global = (function () {
    function Global() {
        this.greeting = 'test';
    }

    Global.prototype.getList = function () {
        return "Hello, " + this.greeting;
    };
    
    return Global;
})();

/*
function npmList(){
    return exec('npm list --depth=0 -g -json -long',
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                return stdout;
            }
        });
}
*/
