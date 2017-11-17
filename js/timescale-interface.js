import { TimeScale } from "./../js/timescale.js";

$(document).ready(function() {

	$("#input-form").submit(function(ev) {
		ev.preventDefault();
		let birthday = $("#input-birthday").val();
		let planet = $("#input-planet").val();

		let age = TimeScale.getYearDifference(birthday, TimeScale.getNow(), planet);

		$(".output").text("On " + planet + ", you'd be " + age +  (age > 1 ? "year's old." : "year old. How are you even using this computer?"));
	});

});
