
export function testSlideAnimation() {
	console.log("Testing slide animation effects...");

	const mainElements = document.querySelectorAll(".transition-main");
	const animationElements = document.querySelectorAll(".onload-animation");

	console.log(`Found ${mainElements.length} main transition elements`);
	console.log(`Found ${animationElements.length} onload animation elements`);

	mainElements.forEach((el, index) => {
		const styles = window.getComputedStyle(el);
		console.log(`Element ${index}:`, {
			transition: styles.transition,
			transform: styles.transform,
			opacity: styles.opacity,
		});
	});

	return {
		mainElements: mainElements.length,
		animationElements: animationElements.length,
		status: "Animation test completed",
	};
}

export function simulatePageTransition() {
	const body = document.body;
	const html = document.documentElement;

	html.classList.add("is-animating", "is-leaving");

	setTimeout(() => {
		html.classList.remove("is-leaving");

		setTimeout(() => {
			html.classList.remove("is-animating");
			console.log("Page transition simulation completed");
		}, 300);
	}, 300);
}

if (typeof window !== "undefined") {
	window.testSlideAnimation = testSlideAnimation;
	window.simulatePageTransition = simulatePageTransition;
}
