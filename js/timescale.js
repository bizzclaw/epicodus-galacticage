import { Planet } from "./../js/planet.js";

export class TimeScale {
	static dateToSeconds(date) {
		return date.getTime() / 1000;
	}

	static getNow() {
		let nowDate = new Date();
		nowDate.setYear(nowDate.getFullYear() + 300);
		return nowDate;
	}

	static getSecondDifference(startDate, endDate) {
		endDate = endDate ? endDate : TimeScale.getNow();
		return TimeScale.dateToSeconds(endDate) - TimeScale.dateToSeconds(startDate);
	}

	static getYearDifference(startDate, endDate, planet) {
		try {
			endDate = endDate ? endDate : TimeScale.getNow();

			let planetObject = Planet.find(planet);
			planetObject = planetObject ? planetObject : Planet.find("earth");
			return Number(((endDate.getYear() - startDate.getYear()) / planetObject.data.yearMult).toFixed(2));
		}
		catch(error) {
			console.log(error);
			return 0;
		}
	}
}
