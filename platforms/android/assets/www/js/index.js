document.addEventListener("deviceready", init, false);
function init() {
loadDefault();	
}

function loadDefault() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/subhaskghosh/yaemr/master/ui.json", true);
    request.onreadystatechange = function() {//Call a function when the state changes.
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                var res = JSON.parse(request.responseText);
		console.log("YAEMR: " + JSON.stringify(res));
                }
            }
        }
    request.send();
}

