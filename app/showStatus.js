const firstStageGreen = document.querySelector('.first-green');
const firstStageBrown = document.querySelector('.first-brown');
const firstStageBlue = document.querySelector('.first-blue');

const secondStageGreen = document.querySelector('.second-green');
const secondStageBrown = document.querySelector('.second-brown');
const secondStageBlue = document.querySelector('.second-blue');

const thirdStageGreen = document.querySelector('.third-green');
const thirdStageBrown = document.querySelector('.third-brown');
const thirdStageBlue = document.querySelector('.third-blue');

const status = {
	stage1: [
		firstStageGreen,
		firstStageBrown,
		firstStageBlue,
	],
	stage2: [
		secondStageGreen,
		secondStageBrown,
		secondStageBlue,
	],
	stage3: [
		thirdStageGreen,
		thirdStageBrown,
		thirdStageBlue,
	]
}

export const showStatus = (cardDeck) => {
	const currentStatus = cardDeck.getStatus();
	
	for (let key in currentStatus) {
		for (let i = 0; i < currentStatus[key].length; ++i) {
			status[key][i].innerText = currentStatus[key][i];
		}
	}
}
