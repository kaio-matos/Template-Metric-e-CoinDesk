import promisedValues from "./api.js";
const graph = document.getElementById("graph");

promisedValues.then((BTCvalues) => {
  const labels = [];
  const values = [];

  for (let date in BTCvalues) {
    labels.push(date);
    values.push(BTCvalues[date]);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bitcoin",
        backgroundColor: "rgb(43,44,46)",
        borderColor: "rgb(242,181,69)",
        data: values,
      },
    ],
  };

  const config = {
    type: "line",
    data,
    responsive: true,
    options: {
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 20,
            },
          },
        },
      },
    },
  };

  const graphic = new Chart(graph, config);
});
