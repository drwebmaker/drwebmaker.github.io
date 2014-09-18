window.onload = function() {
  var url = 'main.json';
  var tbody = document.getElementById('table_key').getElementsByTagName("TBODY")[0];

  var tr = document.createElement('TR');
  tr.innerHTML = '<td>1</td><td>2</td><td>3</td>';

  tbody.appendChild(tr);
};

