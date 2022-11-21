<script>
	import style from '../lib/styles';
	import barista from '../assets/shop/barista.jpg';
	import shop from '../assets/shop/shop.jpg';
	import shop1 from '../assets/shop/shop1.jpg';
	import shop2 from '../assets/shop/shop2.jpg';
</script>

<section id="service" class="font-display h-full mt-20">
	<div
		class="h-[35%] bg-skin-primary text-skin-primary {style.flexCenter} {style.paddingX} mb-[100px] text-center"
	>
		<div class="flex flex-col items-center gap-6 text-lg {style.boxWidth} ">
			<p class="text-skin-golden italic">OUR FACILITY</p>
			<p class="text-dynamicText font-bold leading-[1]">Be Comfort In Our Place</p>
			<p>Our place designed by pro architecture with psychologist to build best place suit you.</p>
		</div>
	</div>
	<div class="sm:h-[520px] bg-skin-secondary h-[1200px]">
		<div class="{style.boxWidth} {style.paddingX} flex flex-1 flex-col gap-10 relative top-[-70px]">
			<div class="flex flex-1 relative gap-10 sm:flex-row flex-col ">
				<div class="w-full h-[300px] relative ">
					<img
						src={shop}
						alt="shop"
						class="w-full h-full absolute top-[6px] left-[8px] border-4 border-[#dcca87] object-cover"
					/>
				</div>
				<div class="md:w-[60%] w-full h-[300px] relative">
					<img
						src={shop1}
						alt="shop1"
						class="w-full h-full absolute top-[6px] left-[8px] border-4 border-[#dcca87] object-cover"
					/>
				</div>
			</div>
			<div class="flex flex-1 gap-10 sm:flex-row flex-col">
				<div class="md:w-[60%] w-full h-[300px] relative">
					<img
						src={barista}
						alt="barista"
						class="w-full h-full absolute top-[6px] left-[8px] border-4 border-[#dcca87] object-cover"
					/>
				</div>
				<div class="w-full h-[300px] relative">
					<img
						src={shop2}
						alt="shop"
						class="w-full h-full absolute top-[6px] left-[8px] border-4 border-[#dcca87] object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="sm:h-[15%] bg-skin-primary h-[100px]" />
</section>
