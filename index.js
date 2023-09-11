function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputfahrenheit").innerHTML = valNum*9/5+32;
  }