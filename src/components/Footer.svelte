<script>
	import style from '../lib/styles';
	import Location from '~icons/ci/location';
	import Copyright from '~icons/lucide/copyright';
</script>

<section class="bg-skin-primary text-skin-primary text-lg">
	<div
		class="{style.boxWidth} {style.flexBetween} {style.paddingX} {style.paddingY} md:flex-row flex-col gap-5"
	>
		<div class="md:text-5xl text-3xl font-semibold">
			<p>Take Your</p>
			<p>Coffee Now</p>
		</div>
		<p class="md:w-[40%] text-center">
			Don't let your coffee cold, let's go to <span class="text-xl mx-1 font-bold text-skin-golden"
				>Cafè House</span
			> and get your coffee and boost your day now.
		</p>
		<button
			class="w-[120px] py-1 bg-skin-golden text-skin-secondary text-center rounded italic hover:bg-skin-secondary"
			>Our Location</button
		>
	</div>

	<div
		class="{style.flexCenter} {style.paddingX} gap-2 bg-skin-secondary text-skin-secondary text-center"
	>
		<Copyright />
		<p>2022 Cafè House. All rights reserved.</p>
	</div>
	<div />
</section>
