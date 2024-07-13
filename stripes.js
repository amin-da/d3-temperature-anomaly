function readData(file, id) {
  console.log("readData is loaded");
  d3.csv(file, processData)
    .then((data) => graph(data, id))
    .catch((error) => console.log("Error", error.message));
}

function processData(datum) {
  const dataItem = {
    year: parseFloat(datum.year) || 0.0,
    avg: parseFloat(datum["J-D"]) || 0.0,
  };

  return dataItem;
}

function graph(data, id) {
  console.log(data, id);
  let stripeWidth = 4;
  let stripeHeight = 300;
  // let land = d3.select(id);
  // let svg = land.append("svg");
  // svg.attr("width", stripeWidth * data.length);
  // svg.attr("height", stripeHeight);

  let svg = d3
    .select(id)
    .append("svg")
    .attr("width", stripeWidth * data.length)
    .attr("height", stripeHeight);

  let stripes = svg.selectAll("rect").data(data).enter().append("rect");
}
