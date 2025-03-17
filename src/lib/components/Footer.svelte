<script>
	import { PrismicLink } from '@prismicio/svelte';
	import WordMark from './WordMark.svelte';
	/** @type{import("@prismicio/client").Content.SettingsDocument}*/
	export let settings;
</script>

<footer>
	<nav
		class="flex flex-col items-center justify-between gap-6 border-t border-x-gray-600 px-8 py-7 md:flex-row"
		aria-label="Footer"
	>
		<a href="/">
			<WordMark />
			<span class="sr-only">{settings.data.site_title}Homepage</span>
		</a>
		<ul class="flex gap-6">
			{#each settings.data.naviigation as item (item.label)}
				<li>
					<PrismicLink field={item.link} class="inline-flex min-h-11 items-center"
						>{item.label}</PrismicLink
					>
				</li>
			{/each}
		</ul>
	</nav>
</footer>
