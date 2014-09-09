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
