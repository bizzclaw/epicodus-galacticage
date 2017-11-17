import { TimeScale } from "./../js/timescale.js";

// reference unix epoch times found here https://www.epochconverter.com/timestamp-list

describe("TimeScale", function() {
	it ("Should be able to convert a date to it's seconds from 1/1/2017", function() {
		const refDate = new Date(2017, 1, 1);
		const refDateSeconds = TimeScale.dateToSeconds(refDate);
		expect(refDateSeconds).toEqual(1483228800);
	});

	it ("Should be able to convert a date to it's seconds from 6/23/2014", function() {
		const refDate = new Date(2014, 6, 23);
		const refDateSeconds = TimeScale.dateToSeconds(refDate);
		expect(refDateSeconds).toEqual(1483228800);
	});

});
