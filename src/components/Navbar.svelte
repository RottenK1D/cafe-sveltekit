<script>
	import style from '../lib/styles';
	import { navLinks } from '../lib/index';
	import Hamburger from '~icons/ci/hamburger';
	import CloseBig from '~icons/ci/close-big';

	$: display = false;
</script>

<nav class="{style.flexBetween} py-6">
	<h1 class="md:text-5xl text-3xl font-bold font-display text-skin-golden">Cafè House</h1>

	<ul class="md:flex flex-row gap-10 hidden text-skin-primary text-lg">
		{#each navLinks as nav}
			<li class="hover:underline hover:text-skin-golden">
				<a href={nav.id}>{nav.title}</a>
			</li>
		{/each}
	</ul>

	<div class="md:hidden">
		{#if display}
			<div on:click={() => (display = !display)} class="relative cursor-pointer z-30">
				<CloseBig class="text-skin-golden text-3xl" />
			</div>
			<div class="bg-skin-primary w-screen h-screen fixed top-0 left-0 {style.flexCenter} z-20">
				<ul class="flex flex-col gap-10 items-center font-medium text-xl text-skin-primary">
					{#each navLinks as nav}
						<li
							on:click={() => (display = !display)}
							class="hover:underline hover:text-skin-golden"
						>
							<a href={nav.id}>{nav.title}</a>
						</li>
					{/each}
				</ul>
			</div>
		{:else}
			<div on:click={() => (display = !display)}>
				<Hamburger class="cursor-pointer text-3xl text-skin-golden" />
			</div>
		{/if}
	</div>
</nav>
