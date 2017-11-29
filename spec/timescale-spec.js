import { TimeScale } from "./../js/timescale.js";

// reference unix epoch times found here https://www.epochconverter.com/timestamp-list

describe("TimeScale", function() {
	it ("Should be able to convert a date to it's seconds from 1970, January 1 UTC", function() {
		let refDate = new Date("1970, January 1 UTC");
		let refDateSeconds = TimeScale.dateToSeconds(refDate);
		expect(refDateSeconds).toEqual(0);
	});

	it ("Should be able to convert a date to it's seconds from January 1, 2017", function() {
		let refDate = new Date("January 1, 2017 UTC");
		let refDateSeconds = TimeScale.dateToSeconds(refDate);
		expect(refDateSeconds).toEqual(1483228800);
	});

	it ("Should be able to determine the seconds between two dats", function() {
		let startDate = new Date("January 1, 2017 UTC");
		let endDate = new Date("January 2, 2017 UTC")
		let secondDifference = TimeScale.getSecondDifference(startDate, endDate);
		expect(secondDifference).toEqual(86400); // how many seconds google claims to be in a day
	});

	it ("Should determine the year between two dates", function() {
		let startDate = new Date("January 1, 1900 UTC");
		let endDate = new Date("January 1, 2000 UTC")
		let yearDifference = TimeScale.getYearDifference(startDate, endDate);
		expect(yearDifference).toEqual(100);
	});

	it ("should scale the year difference based on planet", function() {
		let startDate = new Date("January 1, 2000 UTC");
		let endDate = new Date("January 1, 2010 UTC")
		let yearDifference = TimeScale.getYearDifference(startDate, endDate, "mars");
		expect(yearDifference).toEqual(5);

	})
});
