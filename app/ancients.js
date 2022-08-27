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

const shubNiggurath = {
	stage1: {
		green: 1,
		brown: 2,
		blue: 1
	},
	stage2: {
		green: 3,
		brown: 2,
		blue: 1
	},
	stage3: {
		green: 2,
		brown: 4,
		blue: 0
	}
};

const iogSothoth = {
	stage1: {
		green: 0,
		brown: 2,
		blue: 1
	},
	stage2: {
		green: 2,
		brown: 3,
		blue: 1
	},
	stage3: {
		green: 3,
		brown: 4,
		blue: 0
	}
}
const azathoth = {
	stage1: {
		green: 1,
		brown: 2,
		blue: 1
	},
	stage2: {
		green: 2,
		brown: 3,
		blue: 1
	},
	stage3: {
		green: 2,
		brown: 4,
		blue: 0
	}
}

export const getAncients = () => {
	const ancients = new Map();

	ancients.set('cthulhu', cthulhu);
	ancients.set('shubNiggurath', shubNiggurath);
	ancients.set('iogSothoth', iogSothoth);
	ancients.set('azathoth', azathoth);

	return ancients;
}