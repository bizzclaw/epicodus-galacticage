import { TimeScale } from "./../js/timescale.js";
import { Planet } from "./../js/planet.js";

$(document).ready(function() {

	$(".currentDate").text(TimeScale.getNow().toDateString());

	let allPlanets = Planet.getAll();
	let planetKeys = Object.keys(allPlanets);

	planetKeys.forEach(function(k) {
		let v = allPlanets[k];
		$("#planets").append(`<button class="btn btn-default planet-button submit" value="` + k + `">` + v.data.name + `</button>`);
	});

	$(".planet-button").click(function(event) {
		$(".planet-selected").removeClass("planet-selected"); // deselect any other planet
		$(this).addClass("planet-selected");
	});

	$("#input-form").submit(function(event) {
		event.preventDefault();
		let birthDay = $("#input-birthday").val();
		let planet = $(".planet-selected").val();
		let birthDate = new Date(birthDay);

		let planetObject = Planet.find(planet);

		let age = parseInt(TimeScale.getYearDifference(birthDate, TimeScale.getNow(), planet));

		let pData = planetObject.data;

		let output = "";
		if (age < 0) {
			output = "That's not a possible age in any solar system!";
		}
		else {
			output = "On " + pData.name + ", you'd be a " + age +  (age > 1 ? " year old. " : " year old. How are you even using this computer? ");
			$("#output-image").attr("src", pData.image);

			let lifeSpanText = "Your average lifespan would be " + planetObject.convertYear(pData.lifeSpan) + " in " + pData.name + " years.";

			if (age > pData.lifeSpan) {
				lifeSpanText += "You must be doing pretty good for yourself.";
			}

			$("#output-lifespan").text(lifeSpanText);
			$("#output-reason").text(pData.reason);
		}

		$("#output-age").text(output);
	});

});
