var beaches = ["Hilton Beach", "Hazuk Beach", "Dolphinarium", "Topsy Beach", "Herzliya Marina", 
"Hof Maravi", "Beit Yanai"];

var buildBeaches = function () {
	document.getElementById('beachName1').innerHTML = beaches[0];
	document.getElementById('beachName2').innerHTML = beaches[1];
	document.getElementById('beachName3').innerHTML = beaches[2];
	document.getElementById('beachName4').innerHTML = beaches[3];
	document.getElementById('beachName5').innerHTML = beaches[4];
	document.getElementById('beachName6').innerHTML = beaches[5];
	document.getElementById('beachName7').innerHTML = beaches[6];

}

buildBeaches();




//document.addEventListener('load', function(){
//	var makeTable = document.getElementById('beachTable');
//	makeTable.addEventListener('load', buildBeaches);
// });


var makeWindow1 = function () {
	chrome.app.window.create('window1.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
	var movePage = document.getElementById('nextPage');
	//move to next html page
	movePage.addEventListener('click', makeWindow1);
});
