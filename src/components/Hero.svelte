<script>
	import cup from '../assets/title/cup.jpg';
	import style from '../lib/styles';
</script>

<section class="font-display">
	<div class="flex flex-col md:flex-row gap-10 {style.boxWidth} {style.paddingX}">
		<div class="{style.flexStart} {style.paddingY} flex-1 flex-col gap-4">
			<p class="italic text-skin-primary text-[18px]">Chase the flavour</p>
			<p class="text-dynamicText text-skin-golden font-bold leading-[1]">
				<span>GOOD ideas</span><br />
				<span>START WITH</span><br />
				<span>Coffee</span>
			</p>
			<p class="text-skin-primary text-[18px]">
				Boost your productivity and fix your mood with a cup of coffee
			</p>
			<a
				href="#menu"
				class="w-[140px] bg-skin-golden text-skin-secondary p-2 rounded italic hover:bg-skin-secondary text-[18px]"
				>Get yours now</a
			>
		</div>
		<div class="flex flex-1">
			<img
				src={cup}
				alt="cup"
				class="w-full h-full border-4 border-[#dcca87] object-cover mb-10 relative md:top-[100px]"
			/>
		</div>
	</div>
	<div class="text-skin-secondary bg-skin-secondary">
		<div class="{style.boxWidth} {style.paddingX} {style.paddingY}">
			<p>Enjoy your coffee in our comfortable place</p>
			<div class="flex pt-10 gap-10">
				<div>
					<p class="md:text-5xl text-3xl pb-5 ">50<span class="text-skin-golden">+</span></p>
					<p>Private Room</p>
				</div>
				<div>
					<p class="md:text-5xl text-3xl pb-5">25<span class="text-skin-golden">+</span></p>
					<p>Event Space</p>
				</div>
				<div>
					<p class="md:text-5xl text-3xl pb-5">15<span class="text-skin-golden">+</span></p>
					<p>Creative Studio</p>
				</div>
			</div>
		</div>
	</div>
</section>
