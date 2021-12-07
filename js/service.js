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
			`${new Date(1638724516000)}`,
			['Game, Minesweeper, Star-wars, Project']
		)
	);
	gProjects.push(
		createProject(
			'Simon',
			'The Classic Childrens Game',
			'Classic Simon',
			' https://tomrytt.github.io/Simon-Game/',
			`${new Date(1637774116000)}`,
			['Game, Simon, Project']
		)
	);
	gProjects.push(
		createProject(
			'TinDog',
			'find the perfect match for your dog',
			"It's Tinder, for dogs",
			'https://www.facebook.com',
			`${new Date(1634318116000)}`,
			['Match, Dogs, Project']
		)
	);
	gProjects.push(
		createProject(
			'GuessMe',
			'See if you can beat the genie',
			'Akinator',
			'https://tomrytt.github.io/Guess-Me/',
			`${new Date(1631207716000)}`,
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
