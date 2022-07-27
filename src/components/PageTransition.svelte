<script type="ts">
	import { fly } from 'svelte/transition';
	import { quartOut, quartIn } from 'svelte/easing';
	import { tweenIn, tweenOut } from '../utils/tweenMe';
	import BezierEasing from 'bezier-easing';
	export let url: URL;
	const pageTransitionDuration = 500;
	const easing = quartOut;

	// const ease = BezierEasing(0.35, 0, 0.2, 1)
	const customEase = BezierEasing(0, 0, 1, 1);
</script>

{#key url}
	<div
		in:fly={{
			y: 15,
			duration: pageTransitionDuration,
			easing: quartOut,
			delay: pageTransitionDuration
		}}
		out:fly={{ y: 15, easing: quartIn, duration: pageTransitionDuration }}
	>
		<slot />
	</div>
{/key}
