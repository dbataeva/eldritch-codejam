const commonGreen = [
	'./assets/MythicCards/green/green7.png',
	'./assets/MythicCards/green/green8.png',
	'./assets/MythicCards/green/green9.png',
	'./assets/MythicCards/green/green10.png',
	'./assets/MythicCards/green/green11.png',
	'./assets/MythicCards/green/green13.png',
	'./assets/MythicCards/green/green14.png',
	'./assets/MythicCards/green/green15.png',
];

const commonBrown = [
	'./assets/MythicCards/brown/brown1.png',
	'./assets/MythicCards/brown/brown2.png',
	'./assets/MythicCards/brown/brown3.png',
	'./assets/MythicCards/brown/brown4.png',
	'./assets/MythicCards/brown/brown5.png',
	'./assets/MythicCards/brown/brown15.png',
	'./assets/MythicCards/brown/brown16.png',
	'./assets/MythicCards/brown/brown17.png',
	'./assets/MythicCards/brown/brown18.png',
	'./assets/MythicCards/brown/brown19.png',
	'./assets/MythicCards/brown/brown20.png',
];

const commonBlue = [
	'./assets/MythicCards/blue/blue7.png',
	'./assets/MythicCards/blue/blue9.png',
	'./assets/MythicCards/blue/blue11.png',
	'./assets/MythicCards/blue/blue12.png',
];

export const commonCardsSet = () => {

	const commonSet = new Map();

	commonSet.set('blue', commonBlue);
	commonSet.set('green', commonGreen);
	commonSet.set('brown', commonBrown);

	return commonSet;
}
