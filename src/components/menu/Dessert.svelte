<script>
	import style from '../../lib/styles';
	import HeartFill from '~icons/ci/heart-fill';
	import CiDot03M from '~icons/ci/dot-03-m';
	import blackForest from '../../assets/dishes/black-forest.jpg';
	import creme from '../../assets/dishes/creme.jpg';
	import tiramisu from '../../assets/dishes/tiramisu.jpg';

	let newDish = blackForest;
	function setDish(dish) {
		return (newDish = dish);
	}
</script>

<section class="font-display bg-skin-primary text-skin-primary mt-20">
	<div class="flex flex-col md:flex-row gap-10 {style.boxWidth} {style.paddingX} {style.paddingY}">
		<div class="flex flex-1 flex-col">
			<p class="text-lg text-skin-golden italic">OUR DESSERTS</p>
			<div class="text-dynamicText leading-[1] font-bold">
				<p>Complete Your Coffee</p>
				<p>with Our Desserts</p>
			</div>
			<p class="text-lg">Enjoy your coffee with our tasty desserts that will build your mood.</p>
			<div class="flex md:text-3xl text-xl mt-6">
				<button on:click={() => setDish(blackForest)} class="hover:text-skin-golden cursor-pointer">
					Black Forest
				</button>
				<CiDot03M />
				<button on:click={() => setDish(creme)} class="hover:text-skin-golden cursor-pointer"
					>Crème</button
				>
				<CiDot03M />
				<button on:click={() => setDish(tiramisu)} class="hover:text-skin-golden cursor-pointer">
					Tiramisu
				</button>
			</div>
			<a
				href="#menu"
				class="w-[140px] bg-skin-golden text-skin-secondary text-center p-2 rounded italic hover:bg-skin-secondary mt-4"
				>More menu</a
			>
		</div>
		<div class="bg-skin-golden flex flex-1 relative">
			<img
				src={newDish}
				alt="dessert"
				class="w-full h-full border-4 border-[#dcca87] object-cover"
			/>
			<div
				class="md:{style.flexCenter} flex flex-1 text-skin-golden md:w-[80%] md:h-[10%] absolute bg-skin-primary md:top-[80%] md:left-[-20%] top-[75%] left-[-10%] h-[20%] w-[90%]"
			>
				<p class="text-center text-sm w-[80%]">"I really love dessert. The cake was very nice."</p>
				<div class="absolute md:left-[97.5%] left-[96%]">
					<HeartFill class="scale-[3]" />
				</div>
			</div>
		</div>
	</div>
</section>
