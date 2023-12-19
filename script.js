function generateTable() {
  var numberInput = document.getElementById("numberInput").value;
  var tableContainer = document.getElementById("tableContainer");

  if (Number.isInteger(Number(numberInput)) && Number(numberInput) > 0) {
    var tableHTML =
      "<h2>Multiplication Table for " + numberInput + "</h2><table>";

    for (var i = 1; i <= 10; i++) {
      tableHTML +=
        "<tr><td>" +
        numberInput +
        " x " +
        i +
        " = </td><td>" +
        numberInput * i +
        "</td></tr>";
    }

    tableHTML += "</table>";
    tableContainer.innerHTML = tableHTML;
  } else {
    tableContainer.innerHTML = "<p>Please enter a positive integer.</p>";
  }
}
