'use strict';
const gProjects = [];
var gIdCounter = 0;

function createProjects() {
	gProjects.push(
		createProject(
			'Star-Wars themed MineSweeper',
			'Save all the Baby Yodas from the empire',
			'Star wars themed minesweeper',
			'https://tomrytt.github.io/MineSweeper/',
			'Novemeber 2021',
			['Game, Minesweeper, Star-wars, Project']
		)
	);
	gProjects.push(
		createProject(
			'Simon',
			'The Classic Childrens Game',
			'Classic Simon',
			' https://tomrytt.github.io/Simon-Game/',
			'Novemeber 2021',
			['Game, Simon, Project']
		)
	);
	gProjects.push(
		createProject(
			'TinDog',
			'find the perfect match for your dog',
			"It's Tinder, for dogs",
			'https://www.facebook.com',
			'Novemeber 2021',
			['Match, Dogs, Project']
		)
	);
	gProjects.push(
		createProject(
			'GuessMe',
			'See if you can beat the genie',
			'Akinator',
			'https://tomrytt.github.io/Guess-Me/',
			'Novemeber 2021',
			['Game, Akinator, Project']
		)
	);
}

function createProject(name, title, desc, url, publishedAt, labels) {
	gIdCounter++;
	return {
		id: gIdCounter,
		name: name,
		title: title,
		desc: desc,
		url: url,
		publishedAt: publishedAt,
		labels: [labels],
	};
}

function getProjects() {
	return gProjects;
}
