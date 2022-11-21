<script>
	import CiDot03M from '~icons/ci/dot-03-m';
	import HeartFill from '~icons/ci/heart-fill';
	import cappuccino from '../../assets/coffee/cappuccino.jpg';
	import latte from '../../assets/coffee/latte.jpg';
	import arabica from '../../assets/coffee/arabica.jpg';
	import style from '../../lib/styles';

	let newDrink = cappuccino;
	function setDrink(drink) {
		return (newDrink = drink);
	}
</script>

<section id="menu" class="font-display bg-skin-secondary text-skin-secondary ">
	<div class="flex flex-col md:flex-row gap-10 {style.boxWidth} {style.paddingX} {style.paddingY}">
		<div class="flex flex-1 relative">
			<img
				src={newDrink}
				alt="coffee"
				class="w-full h-full border-4 border-[#dcca87] object-cover"
			/>
			<div
				class="md:{style.flexCenter} flex flex-1 text-skin-golden md:w-[80%] md:h-[10%] absolute bg-skin-primary md:top-[80%] md:left-[40%] top-[75%] left-[10%] h-[20%] w-[90%]"
			>
				<p class="text-center text-sm w-[80%]">
					"I really love cappuccino. The coffee was very smooth."
				</p>
				<div class="absolute md:right-[97.5%] right-[96%]">
					<HeartFill class="scale-[3]" />
				</div>
			</div>
		</div>
		<div class="flex flex-1 flex-col">
			<p class="text-lg text-skin-golden italic">OUR COFFEE</p>
			<div class="text-dynamicText leading-[1] font-bold">
				<p>Choose Your</p>
				<p>Favorite Coffee</p>
			</div>
			<p class="text-lg">More than 100+ type of coffee are ready to serve by our professionals.</p>
			<div class="flex md:text-3xl text-xl mt-6">
				<p on:click={() => setDrink(cappuccino)} class="hover:text-skin-golden cursor-pointer">
					Cappuccino
				</p>
				<CiDot03M />
				<p on:click={() => setDrink(latte)} class="hover:text-skin-golden cursor-pointer">Latte</p>
				<CiDot03M />
				<p on:click={() => setDrink(arabica)} class="hover:text-skin-golden cursor-pointer">
					Arabica
				</p>
			</div>
			<a
				href="dishes"
				class="w-[140px] bg-skin-primary text-skin-primary text-center p-2 rounded italic hover:bg-skin-golden hover:text-skin-secondary mt-4"
				>More menu</a
			>
		</div>
	</div>
</section>
