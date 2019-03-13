function showTable (dataset) {
    const theData = dataset;
    let tbody = d3.select("tbody");

    theData.forEach((ufoReport) => {
        let row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            let cell = tbody.append("td");
            cell.text(value);
    });
});
};

showTable(data);
function showValue () {
   d3.select("tbody").remove();
   // create a new tbody
   d3.select("table").append("tbody");
   let obj = document.getElementById("datetime");
  

    function filteredData(sighting) {
        return sighting.datetime == obj.value
    };
    theData = data.filter(filteredData);
    console.log(theData)
    showTable(theData);
};  
function resetTable () {
    showTable(data);
 };  

