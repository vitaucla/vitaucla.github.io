/*
    For scripts not originally included in the template.
    Import this at the bottom of index.html.
*/

/* ResponsiveSlides.js v1.55 */
$(function () {
    $(".rslides").responsiveSlides();
});

$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 1000,            // Integer: Speed of the transition, in milliseconds
    timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
    pager: false,           // Boolean: Show pager, true or false
    nav: false,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: false,    // Boolean: Pause when hovering controls, true or false
    prevText: "Previous",   // String: Text for the "previous" button
    nextText: "Next",       // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "rslides",   // String: Change the default namespace used
    before: function () { },   // Function: Before callback
    after: function () { }     // Function: After callback
});

/* Use Google Maps Javascript API to embed parking map */
function initMap() {
    var parking7 = {
        info: '<strong>Parking Structure 7</strong><br>\
            Large parking space under the Intramural Field. Enter from Sunset Boulevard onto Charles E. Young Drive. Exit the lot on the other side and turn left towards the Bruin Bear to reach Ackerman Union.<br>\
			<a href="#">Get Directions</a>',
        lat: 34.073041,
        long: -118.446902
    };

    var parking4 = {
        info: '<strong>Chipotle on Belmont</strong><br>\
            Large underground parking space right as you enter from Sunset Boulevard. Exit the lot in Wilson Plaza and walk past the Student Activities Center to reach Ackerman Union.<br>\
					<a href="#">Get Directions</a>',
        lat: 34.072502,
        long: -118.444754
    };
    /*
        var sheridan = {
            info: '<strong>Parking Structure 4</strong><br>\r\
                        6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
                        <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
            lat: 42.002707,
            long: -87.661236
        };
    */
    var locations = [
        [parking7.info, parking7.lat, parking7.long, 0],
        [parking4.info, parking4.lat, parking4.long, 1]
        // [sheridan.info, sheridan.lat, sheridan.long, 2],
    ];

    var map = new google.maps.Map(document.getElementById('parking_map'), {
        zoom: 13,
        center: new google.maps.LatLng(34.070389, -118.444226), // Ackerman Union
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}