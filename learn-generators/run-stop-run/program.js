function* range(from, to) {
	// your code goes here
	for (var i = from; i <= to; i++) {
		yield i
	}
}
// should print: 5, 6, 7, 8, 9, 10
for (var r of range(5, 10)) {
	console.log(r)
}
