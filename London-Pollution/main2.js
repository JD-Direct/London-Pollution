var map;
function initialize() {
  var mapOptions = {
    zoom: 2,
    center: {lat: 51, lng: 0},
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

    map = new google.maps.Map(document.getElementById('map'),
    mapOptions)

    map.data.setStyle(function(feature){
        var index = feature.getProperty('AirQualityIndex');
        return{
            icon: getCircle(index)
        }
    });
}

function getAir() {
    var airRequest = new XMLHttpRequest();
    airRequest.open("GET", "http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json", true)

    airRequest.onload = function() {
      if(airRequest.status === 200 && airRequest.readyState ===4){
          var response = JSON.parse(airRequest.responseText);
          var responseArr = response.HourlyAirQualityIndex.LocalAuthority;
            console.log('>>>>>',responseArr[0].Site[0]['@Latitude']);

          var filteredArray = responseArr.map(function(obj){
            console.log('>>>>>', obj.Site)
            return {
                lat: obj.Site,
                long: obj.Site

            if (obj.Site = undefined){
              else return(" ")

              }
            }
          });
          console.log(filteredArray)

        console.log('RESPONSE',response);
      } else {

        console.error(airRequest.response);
      }

    }

  airRequest.send();
  //return airRequest.response;
}

getAir();

function getAdvice(){

  var adviceRequest = new XMLHttpRequest();
  console.log(adviceRequest,"---The Request---")
  adviceRequest.open("GET", "http://api.erg.kcl.ac.uk/AirQuality/Information/IndexHealthAdvice", true)

  adviceRequest.onload = function (e) {
      if(adviceRequest.status === 200 && adviceRequest.readystate === 4){
      console.log(JSON.parse(adviceRequest.responseText));
      }
  }

  adviceRequest.send();
  return adviceRequest.response;

}
