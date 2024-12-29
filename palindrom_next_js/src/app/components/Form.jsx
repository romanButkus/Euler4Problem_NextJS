import { LargestPalindrom } from '../LargestPalindrom'

export function Form() {
	const maxPalindrom = LargestPalindrom();
	return (
		<>
			<div className='container mx-auto bg-cyan-700'>
				<h1>
					Largest Palindrom Product
				</h1>
				<h2>{maxPalindrom}</h2>
			</div>
		</>
	)
}