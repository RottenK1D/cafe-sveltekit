<script>
	import { Navbar, Hero, Coffee, Dessert, Facility, Reviews, Footer } from '../components';
	import style from '../lib/styles';
</script>

<svelte:head>
	<title>Cafè House</title>
</svelte:head>

<div class="bg-skin-primary">
	<div class="{style.boxWidth} {style.paddingX}">
		<Navbar />
	</div>
	<Hero />
	<Coffee />
	<Dessert />
	<Facility />
	<Reviews />
	<Footer />
</div>
