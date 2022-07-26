<script>
	import { fly, blur } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<div class="offset tracking-ultraTight font-bold">
		<h1 class="extraLarge w-5/6">Tushar Date is a creative director based in Los Angeles</h1>
	</div>
{/if}

<style>
	.offset {
		padding-top: 6px;
	}
	del {background-color: tomato;}
ins {background-color: yellow;}
</style>
