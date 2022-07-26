<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	export let id = 0;
	export /**
	 * @type {{ featured_image: { thumbnail: string | null | undefined; }; client_name: any; title: any; }}
	 */
	let post;
	$: console.log(post);
	export let activeItem;
	export let timer;

	let tweenedScale = tweened(1, {
		duration: 350,
		easing: cubicOut
	});
	let tweenedImageScale = tweened(1, {
		duration: 350,
		easing: cubicOut
	});
	let tweenedColor = tweened(1, {
		duration: 350,
		easing: cubicOut
	});
	let tweenedBlur = tweened(1, {
		duration: 350,
		easing: cubicOut
	});
	let tweenedOpacity = tweened(1, {
		duration: 350,
		easing: cubicOut
	});

	$: tweenedScale.set(activeItem == id ? 1.015 : activeItem == undefined ? 1 : 0.985);
	$: tweenedImageScale.set(activeItem == id ? 1.1 : activeItem == undefined ? 1.05 : 1);
	$: tweenedColor.set(activeItem == id ? 0 : 1);
	$: tweenedOpacity.set(activeItem == id ? 1 : activeItem == undefined ? 1 : 0.25);
	$: tweenedBlur.set(activeItem == id ? 0 : activeItem == undefined ? 0 : 8);
	$: style = `
		transform: scale(${$tweenedScale});
	`;
	$: imageStyle = `
		transform: scale(${$tweenedImageScale});
		// filter: grayscale(${$tweenedColor});
	`;

	function handleOut() {
		// activeItem = undefined
		timer = setTimeout(() => (activeItem = undefined), 75);
	}
	function handleOver() {
		clearTimeout(timer);
		activeItem = id;
	}
</script>

<div on:mouseover={() => handleOver()} on:mouseout={() => handleOut()} data-scroll {style}>
	<div class="project-grid-item-wrap">
		<div class="imgWrapper" style={imageStyle}>
			<img class="block" src={post.featured_image.thumbnail} alt="" />
			<p class="project-grid-num-wrap">{'00'.substring(String(id).length) + (id + 1)}</p>
		</div>
	</div>
	<div class="project-info pt-2">
		<p class="text-xs">{post.client_name}</p>
		<p>{post.title}</p>
	</div>
</div>

<style>
	.project-grid-item-wrap {
		width: 100%;
		position: relative;
		cursor: pointer;
		overflow: hidden;
		border-radius: 8px;
	}
	.imgWrapper {
		overflow: hidden;
		width: 100%;
		padding-bottom: 125%;
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
		font-size: 11px;
		line-height: 14px;
		text-align: right;
	}

	.project-info {
		/* position: absolute; */
		/* bottom: 0;
		left: 0;
		z-index: 200 */
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
