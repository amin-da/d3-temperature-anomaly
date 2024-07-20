function readData(file, id) {
  console.log("readData is loaded");
  d3.csv(file, processData)
    .then((data) => graph(data, id))
    .catch((error) => console.log("Error", error.message));
}

function processData(datum) {
  // console.log(datum);
  const dataItem = {
    year: parseFloat(datum.Year) || 0.0,
    avg: parseFloat(datum["J-D"]) || 0.0,
  };

  return dataItem;
}

function graph(data, id) {
  // console.log(data, id);
  let colors = [
    "#08306b",
    "#08519c",
    "#2171b5",
    "#4292c6",
    "#6baed6",
    "#9ecae1",
    "#c6dbef",
    "#f7fbff",
    "#deebf7",
    "#ffffcc",
    "#ffeda0",
    "#fed976",
    "#feb24c",
    "#fd8d3c",
    "#fc4e2a",
    "#e31a1c",
    "#bd0026",
    "#800026",
  ];

  let stripeWidth = 5;
  let stripeHeight = 500;
  // let land = d3.select(id);
  // let svg = land.append("svg");
  // svg.attr("width", stripeWidth * data.length);
  // svg.attr("height", stripeHeight);

  const avgData = data.map((item) => item.avg);
  let linearScaleForData = d3
    .scaleLinear()
    .domain([d3.min(avgData), d3.max(avgData)])
    .range([0, colors.length - 1]);

  let svg = d3
    .select(id)
    .append("svg")
    .attr("width", stripeWidth * data.length)
    .attr("height", stripeHeight);

  let year = document.getElementById("years");

  let stripes = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("width", stripeWidth)
    .attr("height", stripeHeight)
    .attr("x", (d, i) => i * stripeWidth)
    .attr("y", 0)
    .style("fill", (d, i) => colors[Math.round(linearScaleForData(d.avg))])
    .on("mouseover", (d) => (year.textContent = "Year is = " + d.year));
}
