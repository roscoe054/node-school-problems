function* factorial(n) {
	// your code here
    var cur = 1,
        last = 1

    while (true) {
        yield cur * last

        if(cur === n){
            break
        } else{
            last = cur * last
            cur += 1
        }
    }
}

for (var n of factorial(5)) {
	console.log(n)
}
// 1, 2, 6, 24, 120
