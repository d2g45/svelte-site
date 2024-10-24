<script lang="ts">
	import type { IIconLinkProps } from '$lib/types/global.js';

	let { href, title, target = '_self', children = undefined }: IIconLinkProps = $props();
</script>

<a
	{href}
	{title}
	{target}
	class="flex flex-col items-center justify-center gap-4 text-2xl text-current transition-colors duration-300 ease-in-out hover:text-emerald-500 md:text-3xl lg:text-4xl"
>
	{@render children?.()}
</a>
