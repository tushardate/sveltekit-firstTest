<script>
    import { scale } from 'svelte/transition';
	export let id = 0;
	export /**
	 * @type {{ featured_image: { thumbnail: string | null | undefined; }; client_name: any; title: any; }}
	 */
	let post;
    export let activeItem;
    // @ts-ignore
    $: console.log(activeItem)
    // @ts-ignore
    const animate = (node, args) => {
        // @ts-ignore
        activeItem == id ? scale(node, args) : null;
    }
</script>

<div on:click={() => activeItem = id} transition:animate>
	<div class="project-grid-item-wrap">
		<div class="imgWrapper">
			<img class="block" src={post.featured_image.thumbnail} alt="" />
		</div>
		<div class="project-grid-num-wrap">
			<div class="featured-work-num">{`00-${id}`}</div>
		</div>
	</div>
	<div class="project-info pt-2">
		<hr class="divider mt-1.5 mb-1.5" />
		<p class="client-name capitalize">{post.client_name}</p>
		<p class="project-name capitalize mt-1">{post.title}</p>
	</div>
</div>

<style>
	.project-grid-item-wrap {
		width: 100%;
		position: relative;
	}
	.imgWrapper {
		overflow: hidden;
		width: 100%;
		padding-bottom: 140%;
	}
	.imgWrapper img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}
	.divider {
		border: 0.5px solid #9a9a9a;
	}
	.project-grid-num-wrap {
		width: 100%;
		position: absolute;
		top: 0;
		transform: rotate(-90deg);
		transform-origin: 100% 0%;
		margin-left: 4px;
		font-size: 12px;
		line-height: 14px;
	}

	.featured-work-num {
		float: right;
		text-align: right;
	}
	.clearfix {
		overflow: auto;
	}

	.clearfix::after {
		content: '';
		clear: both;
		display: table;
	}
</style>