import gsap from 'gsap';

export function tweenIn(node: any) {
	let tl = gsap.timeline();
	const duration = 1;

	tl.from(node, {
		duration,
		x: 30,
		opacity: 0,
		ease: 'power1.out'
	});

	return {
		duration: duration * 1000,
		tick: (t: number) => {
			tl.progress(t);
		}
	};
}

export function tweenOut(node: any) {
	let tl = gsap.timeline();
	const duration = 1;

	tl.to(node, {
		duration,
		x: 30,
		opacity: 0,
		ease: 'power1.out'
	});

	return {
		duration: duration * 1000,
		tick: (t: number) => {
			tl.progress(t);
		}
	};
}
