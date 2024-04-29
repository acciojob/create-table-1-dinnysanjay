function insert_Row() {
    // Access the table
    var table = document.getElementById("sampleTable");

    // Create a new row
    var row = table.insertRow(0);

    // Create new cells in the row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    // Add content to the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}