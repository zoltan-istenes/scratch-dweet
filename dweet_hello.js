// open weather map access modified to dweet.io
(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.send_dweet = function(my message, callback) {
        // Make an AJAX call to the dweet.io
// https://dweet.io/dweet/for/my-thing-name?hello=world
        $.ajax({
              //url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=imperial',
              url: ‘https://dweet.io/dweet/for/scratch_conf_2017?hello=’+mymessage

		dataType: 'jsonp',
  //            success: function( weather_data ) {
                success: function( dweet_data ) {
                  // Got the data - parse it and return the temperature
                 when = dweet_data[‘this’]
// temperature = weather_data['main']['temp'];
                  //callback(temperature);
              callback(when);
              }
        });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', ‘send dweet %s', 'send_dweet', ‘World’],
        ]
    };

    // Register the extension
    ScratchExtensions.register(‘dweet.io extension', descriptor, ext);
})({});
