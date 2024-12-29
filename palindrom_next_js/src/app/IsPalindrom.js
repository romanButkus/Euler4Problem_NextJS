export function IsPalindrom(num){
	const str = num.ToString();
	return str == str.split('').reverse().join('');
}