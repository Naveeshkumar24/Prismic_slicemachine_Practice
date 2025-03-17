<!-- src/lib/components/ButtonLink.svelte -->

<script>
	import clsx from 'clsx';
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };
</script>

<PrismicLink
	field={$$restProps.field}
	document={$$restProps.document}
	{...$$restProps}
	on:click
	class={clsx(
		'after:bg-opacity-0 after:hover:bg-opacity-15 relative inline-flex h-fit w-fit rounded-full border border-violet-100/20 bg-violet-200/10 px-4 py-2 text-violet-200 ring-orange-300 transition-colors outline-none after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-orange-100 after:blur-md after:transition-all after:duration-500 hover:border-orange-200/40 hover:text-orange-300 focus:ring-2',
		className
	)}
>
	<slot />
</PrismicLink>
