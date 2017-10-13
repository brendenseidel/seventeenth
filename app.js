function initMap() {

    var directionsService = new google.maps.DirectionsService();

    var east17th = new google.maps.LatLng(40.000702, -82.983762);

    var west17th = new google.maps.LatLng(40.001323, -82.998538);

    function calcRoute() {
        var request = {
            origin: east17th,
            destination: west17th,
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: 'DRIVING'
        };
    }

    directionsService.route(request, function(response, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(response);
        }
    });
    

    // var mapValue = 2790;
    
    // var is17thOpen = mapValue < 2000 ? true : false;
    
    // console.log(is17thOpen);
    
    // var answer = document.getElementById("answer");
    
    // console.log(answer);
    
    // if (is17thOpen) {
    //     answer.textContent = "Yes";
    // } else {
    //     answer.textContent = "No";
    // } 
}
