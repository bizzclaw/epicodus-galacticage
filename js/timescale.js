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
		const timeScale = _planetTimeScales[planet];
		return timeScale ? timeScale : 1;
	}

	static getNow() {

	}

	static dateToSeconds(date) {
		let seconds = (date.getTime() / 1000.0)
		return seconds;
	}

	static getTimeDifference(startDate, endDate) {
		endDate = endDate ? endDate : getNow();
		return TimeScale.dateToSeconds(endDate) - TimeScale.dateToSeconds(startDate);
	}
}
