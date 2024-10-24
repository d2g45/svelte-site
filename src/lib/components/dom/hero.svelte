<script lang="ts">
	import IconLink from '$lib/components/dom/icon-link.svelte';
	import type { IIconLinkProps } from '$lib/types/global.js';
	import MdiEmail from '~icons/mdi/email';
	import MdiGithub from '~icons/mdi/github';
	import MdiLinkedin from '~icons/mdi/linkedin';
	const emailProps: IIconLinkProps = {
		href: `mailto:me@danieldeguzman.com`,
		title: 'Send me an email',
		target: '_blank'
	};

	const githubProps: IIconLinkProps = {
		href: 'https://github.com/d2g45',
		title: 'GitHub',
		target: '_blank'
	};

	const linkedinProps: IIconLinkProps = {
		href: 'https://github.com/d2g45',
		title: 'GitHub',
		target: '_blank'
	};
</script>

<div
	class="relative grid h-dvh w-full grid-cols-1 grid-rows-1 items-center justify-center bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20"
>
	<div class="absolute left-0 top-0 z-0 size-full">
		<div class="relative size-full touch-auto">
			<!-- <HeroScene /> -->
		</div>
	</div>

	<div class="relative z-10 mx-auto w-full max-w-6xl p-4">
		<div
			class="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-3 rounded-xl bg-slate-600/50 p-4 text-center tracking-wider backdrop-blur-lg md:p-8 lg:gap-8 xl:mx-auto"
		>
			<h1 class="text-3xl md:text-4xl lg:text-6xl">Hi! I'm <strong>Daniel.</strong></h1>
			<div class="text-lg md:text-xl lgLtext-3xl">
				I'm a full stack developer from Chattanooga, TN
			</div>
			<div class="flex flex-row items-center justify-center gap-4 lg:gap-8">
				<IconLink {...emailProps}>
					<MdiEmail />
				</IconLink>

				<IconLink {...githubProps}>
					<MdiGithub />
				</IconLink>

				<IconLink {...linkedinProps}>
					<MdiLinkedin />
				</IconLink>
			</div>
		</div>
	</div>
</div>
