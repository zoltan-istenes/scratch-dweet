(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.send_dweet = function(thing, key, value, callback) {
        // Make an AJAX call to dweet.io 
        $.ajax({
              url: 'https://dweet.io/dweet/for/'+thing+'?'+key+'='+value,
              dataType: 'json',
              success: function( get_result ) {
                  // Got the data - parse it and return the temperature
                  result = get_result['this'];
                  callback(result);
              }
        });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'Dweet for thing %s key %s value %s', 'send_dweet', 'scratch_conf_2017', 'message', 'hello' ],
        ]
    };

    // Register the extension
    ScratchExtensions.register('dweet.io extension', descriptor, ext);
})({});
