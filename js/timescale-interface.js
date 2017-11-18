import { TimeScale } from "./../js/timescale.js";
import { Planet } from "./../js/planet.js";

$(document).ready(function() {

	$(".currentDate").text(TimeScale.getNow().toDateString());

	let allPlanets = Planet.getAll();
	console.log(allPlanets);
	let planetKeys = Object.keys(allPlanets);

	planetKeys.forEach(function(k) {
		let v = allPlanets[k];
		$("#planets").append(`<button class="btn btn-default planet-button submit" value="` + k + `">` + k + `</button>`);
	});

	$(".planet-button").click(function(event) {
		$(".planet-selected").removeClass("planet-selected"); // deselect any other planet
		$(this).addClass("planet-selected");
	});

	$("#input-form").submit(function(event) {
		event.preventDefault();
		let birthDay = $("#input-birthday").val();
		let planet = $(".planet-selected").val();
		console.log(planet);
		let birthDate = new Date(birthDay);

		let age = parseInt(TimeScale.getYearDifference(birthDate, TimeScale.getNow(), planet));

		let output = "";
		if (age < 0) {
			output = "That's not a possible age in any solar system!";
		}
		else {
			output = "On " + planet + ", you'd be a " + age +  (age > 1 ? " year old." : " year old. How are you even using this computer?");
		}

		$("#output").text(output);
	});

});
