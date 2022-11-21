<script>
	import style from '../lib/styles';
	import logo1 from '../assets/logo/logo1.png';
	import logo2 from '../assets/logo/logo2.png';
	import logo3 from '../assets/logo/logo3.png';
</script>

<section id="reviews" class="bg-skin-primary font-display text-skin-primary sm:mt-20 ">
	<div class="{style.boxWidth} {style.paddingX} {style.paddingY} h-[800px] md:h-full">
		<div class="flex-col {style.flexCenter}">
			<p class="text-lg text-center">They trust their work place</p>
			<span class="sm:text-5xl text-2xl font-bold text-skin-gold ">Cafè House</span>
			<div class="flex gap-10 sepia mt-5 md:scale-75 scale-100">
				<div><img src={logo1} alt="logo" /></div>
				<div><img src={logo2} alt="logo" class="" /></div>
				<div><img src={logo3} alt="logo" /></div>
			</div>
		</div>
		<div class="{style.flexCenter} flex-1 md:flex-row flex-col">
			<div class="flex flex-1 flex-col gap-5">
				<p class="text-skin-golden">OUR REVIEWS</p>
				<div class="text-dynamicText leading-[1] font-semibold">
					<p>Let Our Customer</p>
					<p>Talk About Us</p>
				</div>
				<p>We always providing the best to make our customer pleasant with our services.</p>
				<div class="flex justify-center md:justify-start gap-2">
					<button
						class="w-[100px] bg-skin-golden text-skin-secondary text-center rounded italic hover:bg-skin-secondary"
						>Previous</button
					>
					<button
						class="w-[100px] bg-skin-golden text-skin-secondary text-center rounded italic hover:bg-skin-secondary"
						>Next</button
					>
				</div>
			</div>
			<div class="flex flex-1 gap-10 relative md:top-0 top-[120px] w-full">
				<div
					class="bg-skin-primary flex flex-col gap-2 p-5 w-[60%] h-auto border-solid border-2 border-[#dcca87] justify-between absolute z-[0] top-[-100px]"
				>
					<p>
						"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
						egestas."
					</p>
					<div>
						<p>Roberto</p>
						<p class="text-sm">-Coffee Lover</p>
					</div>
				</div>
				<div
					class="bg-skin-primary flex flex-col gap-2 p-5 w-[60%] h-auto border-solid border-2 border-[#dcca87] justify-between absolute top-[10%] right-[0] z-[1]"
				>
					<p>
						"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
						egestas."
					</p>
					<div>
						<p>Sandra</p>
						<p class="text-sm">-Google</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
