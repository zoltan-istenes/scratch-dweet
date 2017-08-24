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

       ext.get_dweet = function(thing, key, callback) {
        // Make an AJAX call to dweet.io 
        $.ajax({
              url: 'https://dweet.io/get/latest/dweet/for/'+thing,
              dataType: 'json',
              success: function( get_result ) {
                  // Got the data - parse it and return the temperature
                  value = get_result['with'];
                  callback(value);
              }
        });
    };
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'send dweet for thing %s key %s value %s', 'send_dweet', 'scratch_conf_2017', 'message', 'hello' ],
            ['R', 'get dweet 2 for thing %s key %s', 'get_dweet', 'scratch_conf_2017', 'message' ]
        ]
    };

    // Register the extension
    ScratchExtensions.register('dweet.io extension', descriptor, ext);
})({});
