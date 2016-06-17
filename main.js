function getAir(){
      var airRequest = new XMLHttpRequest();
      airRequest.open("GET", "http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json", true);

      airRequest.onload = function (e) {
          if (airRequest.readyState === 4 && airRequest.status === 200){
              var response = JSON.parse(airRequest.responseText);
              console.log(response)
              //document.getElementById('')
          }
      }
airRequest.send();
}
 getAir();
