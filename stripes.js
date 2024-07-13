function readData(file, id) {
  console.log("readData is loaded");
  d3.csv(file, processData)
    .then((data) => graph(data, id))
    .catch((error) => console.log("Error", error.message));
}

function processData(datum) {
  return datum;
}

function graph(data, id) {
  console.log(data, id);
}
