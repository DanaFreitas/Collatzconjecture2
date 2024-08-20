const ctx = document.getElementById("myChart").getContext("2d");

const calculate = document.getElementById("submit");

const reset = document.getElementById("reset");

const chartcontain = document.getElementById("chartcontain");

addEventListener("load", () => {
});

calculate.addEventListener("click", () => {
  let Yvalue = [];

  let Xvalue = [0];

  let input = document.getElementById("input").value;
  let parseinput = parseInt(input);
  let initial = 0;

  while (parseinput != 1) {
    if (parseinput % 2 == 0) {
      parseinput = parseinput / 2;
      initial += 1;
    } else {
      parseinput = 3 * parseinput + 1;
      initial += 1;
    }
    Yvalue.push(parseinput);
    Xvalue.push(initial);
  }

  new Chart(ctx, {
    type: "line",

    data: {
      labels: Xvalue,

      datasets: [
        {
          label: "Initial number's value",
          fill: false,
          lineTension: 0,
          backgroundColor: "#FFFFFF",
          borderColor: "#FFFFFF",
          
          data: Yvalue,
        },
      ],
    },
    options: {
      plugins: {
     
        legend: {
            labels: {
                color: "white",
            },
        },
    },
      aspectRatio: 0.75,
   
      scales: {
        y: {
          min: 1,
          max: Math.max(...Yvalue) * 1.1,
          ticks: {
            color: "white",
          },
        },
      },
    },
  });
  let display = document.getElementById("info");
  display.textContent =
    "The final number is " +
    parseinput +
    " and it took " +
    initial +
    " iterations.";

  window.scrollTo({ top: chartcontain.offsetTop, left: 0, behavior: "smooth" });
});

reset.addEventListener("click", () => {
  location.reload();
});
