window.onload = function() {
//  var url = 'main.json';
//  var tbody = document.getElementById('table_key').getElementsByTagName("TBODY")[0];
//
//  var tr = document.createElement('TR');
//  tr.innerHTML = '<td>1</td><td>2</td><td>3</td>';
//
//  tbody.appendChild(tr);

  var xmlhttp = new XMLHttpRequest();
  var url = "main.json";

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var myArr = JSON.parse(xmlhttp.responseText);
      myFunction(myArr);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  function myFunction(arr) {

    var i;
    var out = "<table>";

    for(i = 0; i < arr.length; i++) {
      out += "<tr><td>" +
        arr[i].key +
        "</td><td>" +
        arr[i].en +
        "</td><td>" +
        arr[i].nl +
        "</td></tr>";
    }
    out += "</table>"
    document.getElementById("table").innerHTML = out;
  }


};

