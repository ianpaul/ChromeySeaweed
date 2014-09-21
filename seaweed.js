var beaches1 = ["Hilton Beach", "Hazuk Beach", "Dolphinarium", "Topsy Beach", "Herzliya Marina", 
"Hof Maravi", "Beit Yanai"];

var beaches2 = ["1", "2", "3", "4", "5", "6", "7"];

var theTable = document.createElement('table');

var buildBeaches = function (array) {

// Note, don't forget the var keyword!
for (var i = 0, tr, td; i < array.length; i++) {

	if (i % 2 === 0) {
    tr = document.createElement('tr');
    tr.className = "blueBeach";
    td = document.createElement('td');
    td.appendChild(document.createTextNode(array[i]));
    tr.appendChild(td);
    td = document.createElement('td');
    td.className = "chevronBlue";
    td.appendChild(document.createTextNode(">>"));
    tr.appendChild(td);
    theTable.appendChild(tr);
} else {
	tr = document.createElement('tr');
	tr.className = "whiteBeach";
	td = document.createElement('td');
    td.appendChild(document.createTextNode(array[i]));
    tr.appendChild(td);
    td = document.createElement('td');
    td.className = "chevronWhite";
    td.appendChild(document.createTextNode(">>"));
    tr.appendChild(td);
    theTable.appendChild(tr);

   
}
  

}

document.getElementById('table').appendChild(theTable);

}

buildBeaches(beaches1);
