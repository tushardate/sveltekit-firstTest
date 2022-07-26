<script type="ts">
	import { fly } from 'svelte/transition';
	import {backInOut} from 'svelte/easing'
	import { tweenIn, tweenOut } from '../utils/tweenMe';
	export let url: URL;
	const pageTransitionDuration = 500;
	const easing = backInOut
</script>

{#key url}
	<div
		in:fly={{ y: 15, duration: pageTransitionDuration, easing: easing, delay: pageTransitionDuration }}
		out:fly={{ y: -15, easing: easing, duration: pageTransitionDuration }}
	>
		<slot />
	</div>
{/key}
