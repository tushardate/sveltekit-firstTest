<script context="module" type="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url: any }) => ({ props: { url: any } });
</script>

<script type="ts">
	import Navigation from '../components/Navigation.svelte';
	import PageTransition from '../components/PageTransition.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import '../app.scss';
	export let url: any;
	let prevUrl: string | undefined = undefined;
	let nextUrl: URL|undefined = undefined;
	$: if (url.pathname !== prevUrl) {
		nextUrl = url;
		prevUrl = url.pathname;
	}

	onMount(() => (prevUrl = window.location.pathname));
</script>

<div class="mx-9 font-tdkern tracking-tight text-base font-bold">
	<Navigation />
	<PageTransition url={nextUrl}>
		<div class="mt-36">
			<slot />
		</div>
	</PageTransition>
</div>
