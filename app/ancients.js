const cthulhu = {
	stage1: {
		green: 0,
		brown: 2,
		blue: 2
	},
	stage2: {
		green: 1,
		brown: 3,
		blue: 0
	},
	stage3: {
		green: 3,
		brown: 4,
		blue: 0
	}
};

// const shubNiggurath = {

// };
// 	iogSothoth,
// 	azathoth,

export const getAncients = () => {
	const ancients = new Map();

	ancients.set('cthulhu', cthulhu);

	return ancients;
}