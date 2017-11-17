const _planetTimeScales = {
	earth: 1,
	mercury: 0.24,
	venus: 0.62,
	mars: 1.88,
	jupiter: 11.86
};

export class TimeScale {
	static getAllPlanetTimeScales() {
		return _planetTimeScales;
	}

	static getPlanetTimeScale(planet) {
		let timeScale = _planetTimeScales[planet];
		return timeScale ? timeScale : 1;
	}


	static dateToSeconds(date) {
		return date.getTime() / 1000;
	}

	static getNow() {
		let nowDate = new Date();
		return nowDate;
	}

	static getSecondDifference(startDate, endDate) {
		endDate = endDate ? endDate : TimeScale.getNow();
		return TimeScale.dateToSeconds(endDate) - TimeScale.dateToSeconds(startDate);
	}

	static getYearDifference(startDate, endDate, planet) {
		try {
			endDate = endDate ? endDate : TimeScale.getNow();
			return Number(((endDate.getYear() - startDate.getYear()) / TimeScale.getPlanetTimeScale(planet)).toFixed(2));
		}
		catch(error) {
			return 0;
		}
	}
}
