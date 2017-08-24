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

       ext.get_dweetA = function(thing, key, callback) {
        // Make an AJAX call to dweet.io 
        $.ajax({
              url: 'https://dweet.io/get/latest/dweet/for/'+thing,
              dataType: 'json',
              success: function( get_result ) {
                  // Got the data - parse it and return the temperature
                  value = get_result['this'];
                  callback(value);
              }
        });
    };
    
      ext.get_dweetB = function(thing, key, callback) {
        // Make an AJAX call to dweet.io 
        $.ajax({
              url: 'https://dweet.io/get/latest/dweet/for/'+thing,
              dataType: 'json',
              success: function( get_result ) {
                  // Got the data - parse it and return the temperature
                  value = get_result['with'];
                  callback(JSON.stringify(value));
              }
        });
    };
    
      ext.get_dweetC = function(thing, key, callback) {
        // Make an AJAX call to dweet.io 
        $.ajax({
              url: 'https://dweet.io/get/latest/dweet/for/'+thing,
              dataType: 'json',
              success: function( get_result ) {
                  // Got the data - parse it and return the temperature
                  value = get_result.with[0].content[key];
                  callback(value);
              }
        });
    };
    
      ext.get_dweetD = function(thing, key, callback) {
        // Make an AJAX call to dweet.io 
        $.ajax({
              url: 'https://dweet.io/get/latest/dweet/for/'+thing,
              dataType: 'json',
              success: function( get_result ) {
                  // Got the data - parse it and return the temperature
                  value = get_result.with[0].content.message;
                  callback(value);
              }
        });
    };
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'send dweet 16 for thing %s key %s value %s', 'send_dweet', 'scratch_conf_2017', 'message', 'hello' ],
            ['R', 'get dweet for thing this %s key %s', 'get_dweetA', 'scratch_conf_2017', 'message' ],
            ['R', 'get dweet for thing JSON stringify with %s key %s', 'get_dweetB', 'scratch_conf_2017', 'message' ],
            ['R', 'get dweet for thing with 0 1 key %s key %s', 'get_dweetC', 'scratch_conf_2017', 'message' ],
            ['R', 'get dweet for thing with 0 1 created %s key %s', 'get_dweetD', 'scratch_conf_2017', 'message' ]
        ]
    };

    // Register the extension
    ScratchExtensions.register('dweet.io extension', descriptor, ext);
})({});
