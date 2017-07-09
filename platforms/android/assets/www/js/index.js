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
		$("#PAGE").empty();
                var res = JSON.parse(request.responseText);
		for (i in res){
			console.log("YAEMR: " + JSON.stringify(res[i]));
			var name = res[i]["section_name"];
			var data = res[i]["data"];
			$("#PAGE").append("<ons-card><div class=\"title\">" + name + "</div><div class=\"content\"><div id=\"" + name + "\"></div><div style=\"text-align: left; margin-top: 10px;\" id=\"" + name + "_type_area\"></div></div></ons-card>");
			for(j in data){
				var symptom = data[j]["name"]
				$("#" + name).append("<ons-button modifier=\"quiet\">" + symptom + "</ons-button>");
			}
			$("#" + name + "_type_area").append("<p><ons-input id=\"type_\"" + name +  "modifier=\"underbar\" placeholder=\"Type your\" float></ons-input></p>")
		}
                }
            }
        }
    request.send();
}



