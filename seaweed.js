// Get array of classes without jQuery
var array = ["Hilton Beach", "Hazuk Beach", "Dolphinarium", "Topsy Beach", "Herzliya Marina", 
"Hof Maravi", "Beit Yanai"];

var arrayLength = array.length;
var theTable = document.createElement('table');

// Note, don't forget the var keyword!
for (var i = 0, tr, td; i < arrayLength; i++) {
    tr = document.createElement('tr');
    td = document.createElement('td');
    td.appendChild(document.createTextNode(array[i]));
    tr.appendChild(td);
    theTable.appendChild(tr);
}

document.getElementById('table').appendChild(theTable);
