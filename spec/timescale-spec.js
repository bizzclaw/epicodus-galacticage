import { TimeScale } from "./../js/timescale.js";

describe("TimeScale", function() {
	it ("Should be able to convert a date to it's seconds from 0/0/0", function() {
		const refDate = new Date(2017, 1, 1);
		const refDateSeconds = TimeScale.dateToSeconds(refDate);
		expect(refDateSeconds).toEqual(63616180000);
	});
});
