function cssAutoSlide(dotsList, interval)	{
	let start = 1
	let end = dotsList.length
	return setInterval(() => {
		dotsList[start].click()
		start++
		if (start === end) start = 0
	}, interval)
}
let slide = cssAutoSlide(document.querySelectorAll('.dots'), 5000)
// clearInterval(slide)