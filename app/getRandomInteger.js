export const getRandomInteger = (min, max) => {
	return (Math.floor((max - min) * Math.random() + min));
}