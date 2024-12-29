export function LargestPalindrom() {
	let maxPalindrom = 0;
	for (let i = 999; i >= 100; i--) {
		for (let j = 999; j >= 100; j--) {
			if (IsPalindrom(i * j) && (i * j) > maxPalindrom) {
				maxPalindrom = (i * j);
			}
		}
	}
	return maxPalindrom;
}