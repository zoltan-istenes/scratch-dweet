new (function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.httpPost = function (url,callback){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
callback(this.responseText);
    }
};
xhr.open("POST", url, true);
xhr.send();}

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'http post %s', 'httpPost','https://zoltan-istenes.github.io/scratch-dweet/'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('HTTP POST extension', descriptor, ext);
})({});
