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

	static getNow() {
		return Date.now();
	}

	static dateToSeconds(date) {
		let seconds = (date.getTime() / 1000.0)
		return seconds;
	}

	static getSecondDifference(startDate, endDate) {
		endDate = endDate ? endDate : TimeScale.getNow();
		return TimeScale.dateToSeconds(endDate) - TimeScale.dateToSeconds(startDate);
	}

	static getYearDifference(startDate, endDate, planet) {
		endDate = endDate ? endDate : TimeScale.getNow();
		return (endDate.getYear() - startDate.getYear()) / TimeScale.getPlanetTimeScale(planet) ;
	}
}
