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
		let seconds = 0;
		console.log(date.getFullYear(), date.getMonth(), date.getDate());
		return date.getTime() / 1000;
	}

	static getTimeDifference(startDate, endDate) {
		endDate = endDate ? endDate : getNow();
		return dateToSeconds(endDate) - dateToSeconds(startDate);
	}
}
