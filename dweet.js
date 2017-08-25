(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.send_dweetR = function(thing, key, value, callback) {
        // Make an AJAX call to dweet.io 
        $.ajax({
              url: 'https://dweet.io/dweet/for/'+thing+'?'+key+'='+value,
              dataType: 'json',
              success: function( get_result ) {
                  // Got the data - parse it and return
                  result = get_result['this'];
                  callback(result);
              }
        });
    };

    
    ext.send_dweetw = function(thing, key, value, callback) {
        // Make an AJAX call to dweet.io 
        $.ajax({
              url: 'https://dweet.io/dweet/for/'+thing+'?'+key+'='+value,
              dataType: 'json',
              success: function( get_result ) {
                  // Got the data - parse it and return 
                  // result = get_result['this'];
                  callback();
              }
        });
    };
    
      ext.get_dweet = function(thing, key, callback) {
        // Make an AJAX call to dweet.io 
        $.ajax({
              url: 'https://dweet.io/get/latest/dweet/for/'+thing,
              dataType: 'json',
              success: function( get_result ) {
                  // Got the data - parse it and return 
                  value = get_result.with[0].content[key];
                  callback(value);
              }
        });
    };
    
     
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'send dweet for thing %s key %s value %s', 'send_dweetR', 'scratch_conf_2017', 'message', 'hello' ],
            ['w', 'send dweet for thing %s key %s value %s', 'send_dweetw', 'scratch_conf_2017', 'message', 'hello' ],
            ['R', 'get dweet for thing %s key %s', 'get_dweet', 'scratch_conf_2017', 'message' ]
        ]
    };

    // Register the extension
    ScratchExtensions.register('dweet.io extension', descriptor, ext);
})({});
