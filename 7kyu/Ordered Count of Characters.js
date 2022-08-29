/*
https://www.codewars.com/kata/57a6633153ba33189e000074/
DESCRIPTION:
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

function orderedCount(text) {
	const array = text.split('')
	const noDuplicates = array.filter(function (char, i) {
		return array.indexOf(char) === i
	})
	// const noDuplicates = [...new Set(array)]
	const result = noDuplicates.map(function (char) {
		return [char, text.split(char).length - 1]
	})
	return result
}