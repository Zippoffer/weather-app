// var cityInput = document.getElementById("inputCity");
// var submitButton = document.getElementById("submitCity");


jQuery(document).ready(function($) {
    $.ajax({
        url: "http://api.wunderground.com/api/21ed86916aea3b24/geolookup/conditions/q/TN/Nashville.json",
        // url: "http://api.wunderground.com/api/21ed86916aea3b24/geolookup/q/autoip.json",

        dataType: "jsonp",
        success: function(parsed_json) {
            var location = parsed_json['location']['city'];
            var state = parsed_json['location']['state'];
            var temp = parsed_json['current_observation']['temperature_string'];
            // document.write("Current temperature in " + location + " " + state + " is: " + temp);
            // console.log("Current temperature in " + location + " " + state);



            $("#submitCity").click(function() {
                // $("#inputCity").submit(function(event) {
                // event.preventDefault();
                // });
                document.write("Current temperature in " + location + " " + state + " is: " + temp);
                // $('#putItHere').append(Current temperature in " + location + " " + state + " is: " + temp);
                // document.write("Current temperature in " + location + " " + state);
                // alert("Handler for .submit() called.");
                console.log("Current temperature in " + location + " " + state + " is: " + temp);
                console.log("you clicked me!");
            })
            // $("#submitCity").focus();
        }
    });
});
///////*******************************************************\\\\\\\\\\\\\\\\\\\\\\\\
// $(document).ready(function() {
//     $("button").click(function() {
//         $.getJSON("http://api.wunderground.com/api/21ed86916aea3b24/geolookup/conditions/q/TN/Nashville.json", function(result) {
//             $.each(result, function(i, field) {
//                 $("div").append(field + " ");
//             });
//         });
//     });
// });
// (function() {
//     var weatherAPI = "http://api.wunderground.com/api/21ed86916aea3b24/geolookup/q/autoip.json";
//     $.getJSON(weatherAPI, {
//         tags: "geolookup",
//         tagmode: "autoip",
//         format: "json"
//     })
//         .done(function(data) {
//             $.each(data.items, function(i, item) {
//                 $("<div>").attr("src", item.media.m).appendTo("#putItHere");
//                 if (i === 3) {
//                     return false;
//                 }
//             });
//         });
//     console.log(location);
// })();