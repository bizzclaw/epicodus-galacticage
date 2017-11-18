let _allPlanets = {};

export class Planet{

	static find(planet) {
		return _allPlanets[planet];
	}

	static getAll() {
		return _allPlanets;
	}

	constructor(planetId, planetData = {}) {
		this.id = planetId;
		this.data = planetData;
		_allPlanets[this.id] = this;
	}

	convertYear(year) {
		return parseInt(year / this.data.yearMult);
	}
}

new Planet("earth", {
	name: "Earth",
	yearMult: 1,
	lifeSpan: 300,
	reason: "Thanks to modern technology, you can enjoy a peaceful and long life on earth",
	image: "img/earth.png"
});

new Planet("mercury", {
	name: "Mercury",
	yearMult: 0.24,
	lifeSpan: 30,
	reason: "You live on Mercury? You must be a miner, you'll make quite a bit of credits for your family on earth, but you probably won't live longer very long on Mercury.",
	image: "img/mercury.jpg"
});

new Planet("venus", {
	name: "Venus",
	yearMult: 0.62,
	lifeSpan: 0,
	reason: "It's still impossible to live on Venus because of it's extremely dense acidic admopshere, you wouldn't be able to safely land on the planet, let alone live on it.",
	image: "img/venus.png"
});

new Planet("mars", {
	name: "Mars",
	yearMult: 1.88,
	lifeSpan: 24,
	reason: "After the Earth-Mars wars of 2250, the entire planet has devolved from the once proserous colony it was to a post-nuclear wasteland. Just carrying on day to day will be difficult for you, especiually with the mutant cockroaches everwhere.",
	image: "img/mars.png"
});

new Planet("jupiter", {
	name: "Jupiter",
	yearMult: 11.86,
	lifeSpan: 300,
	reason: "Jupiter itself is not inhabitable being a gas giant, however it's rich conposition of hydrogen have made it an attractive planet to mining corporations, which inhabit an array of stations orbitting the gas giant.",
	image: "img/jupiter.jpg"
});
