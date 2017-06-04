$(document).ready(function(){
	
	$.ajax({
		url: "https://data.delaware.gov/resource/v59b-a2we.json",
		method: "GET",
		datatype: "json",
		data: {
			"$select": "*"
		}
	}).done(function(myVar){
		var lAvg = (myVar[0].avg_total + myVar[1].avg_total + myVar[2].avg_total) / 3;
		var lCurrent = myVar[2].avg_total;
		if(lCurrent > lAvg){
			console.log("Immediate Volunteer Opportunities");
		}else{
			console.log("Volunteer Opportunities as Needed");
		}
		console.log(myVar[0].avg_total);
	});
	
});