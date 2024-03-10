<!DOCTYPE html>
<html>
<head>
  <title>Analog Clock</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f5f5f5;
    }
    .clock {
      width: 300px;
      height: 300px;
      position: relative;
    }
    .hand {
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: bottom;
      background-color: #333;
    }
    .hour {
      width: 2px;
      height: 50px;
    }
    .minute {
      width: 4px;
      height: 70px;
    }
    .second {
      width: 2px;
      height: 90px;
      background-color: red;
    }
  </style>
</head>
<body>
  <div class="clock">
    <div class="hand hour" id="hour"></div>
    <div class="hand minute" id="min"></div>
    <div class="hand second" id="sec"></div>
  </div>
  <script>
    const hourHand = document.getElementById("hour");
    const minHand = document.getElementById("min");
    const secHand = document.getElementById("sec");

    function setRotation(element, angle) {
      element.style.transform = `rotate(${angle}deg)`;
    }

    setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourAngle = 30 * hours + minutes / 2;
      const minAngle = 6 * minutes;
      const secAngle = 6 * seconds;

      setRotation(hour
