import React from "react";
import "./Style.css";
const Dinner = () => {
  //   const numbers = document.querySelectorAll(".number");
  //   const svgEl = document.querySelectorAll("svg circle");
  //   const counters = Array(numbers.length);
  //   const intervals = Array(counters.length);
  //   counters.fill(0);

  //   numbers.forEach((number, index) => {
  //     intervals[index] = setInterval(() => {
  //       if (counters[index] === parseInt(number.dataset.num)) {
  //         clearInterval(counters[index]);
  //       } else {
  //         counters[index] += 1;
  //         number.innerHTML = counters[index] + "%";
  //         svgEl[index].style.strokeDashoffset = Math.floor(
  //           472 - 440 * parseFloat(number.dataset.num / 100)
  //         );
  //       }
  //     }, 20);
  //   });

  return (
    <div className="skill-container">
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div className="number" dataNum="80"></div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default Dinner;
