<script>
	import ProjectGridItem2 from './ProjectGridItem2.svelte';

	export /**
	 * @type {any}
	 */
	let posts;
	let activeItem = undefined;
	let timer;
</script>

<div class="grid gap-x-20 gap-y-20 grid-cols-4 tracking-tight">
	{#each posts as post, id}
		<div data-scroll-section>
			<ProjectGridItem2 bind:timer bind:activeItem {post} {id} />
		</div>
	{/each}
</div>

<!-- <div class="grid gap-16 grid-cols-4 mt-16">
	{#each posts as item}
		<div class="project-grid-item-wrap">
			<div class="imgWrapper">
				<img class="block" src={`https://loremflickr.com/320/240?lock=${item + 20}`} alt="" />
			</div>
			<div class="project-grid-num-wrap">
				<div class="featured-work-num">{`00-${item}`}</div>
			</div>
            <div class="project-title bg-red-500">
                Lorem ipsum dolor set
            </div>
		</div>
	{/each}
</div> -->
