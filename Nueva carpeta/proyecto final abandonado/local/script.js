function iniciarMap(){
    var coord = {lat:-37.1784717 ,lng: -59.9485728};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}