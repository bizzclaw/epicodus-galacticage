import { TimeScale } from "./../js/timescale.js";

$(document).ready(function() {

	const allPlanets = TimeScale.getAllPlanetTimeScales();
	let planetKeys = Object.keys(allPlanets);

	planetKeys.forEach(function(k) {
		let v = allPlanets[k];
		$("#planets").append(`<button class="btn btn-default planet-button" value="` + k + `">` + k + `</button>`);
	});

	$(".planet-button").click(function(event) {
		event.preventDefault();
		$(".planet-seleted").removeClass("planet-seleted"); // deselect any other planet
		$(this).addClass("planet-seleted");
	});

	$("#input-form").submit(function(event) {
		event.preventDefault();
		let birthDay = $("#input-birthday").val();
		let planet = $(".planet-selected").val();

		let birthDate = new Date(birthDay);

		let age = TimeScale.getYearDifference(birthDate, TimeScale.getNow(), planet);

		$("#output").text("On " + planet + ", you'd be a " + age +  (age > 1 ? " year old." : " year old. How are you even using this computer?"));
	});

});
