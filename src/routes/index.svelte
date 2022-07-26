<script context="module">
	// @ts-ignore
	export const load = async ({ fetch }) => {
		const res = await fetch('https://testing.tushardate.com/wp-json/td/v1/projects');
		const posts = await res.json();
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	import { page } from '$app/stores';
	import ProjectGrid from '../components/ProjectGrid.svelte';

	export /**
	 * @type {any}
	 */
	let posts;
</script>

<div class="text-base font-medium tracking-tighter">
	<div class="mt-32 mb-20">
		<ProjectGrid {posts} />
		<slot />
	</div>
</div>
