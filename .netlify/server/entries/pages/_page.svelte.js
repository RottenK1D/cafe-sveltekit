import { c as create_ssr_component, d as spread, f as escape_object, e as escape, h as each, v as validate_component, i as add_attribute } from "../../chunks/index.js";
const style = {
  boxWidth: "xl:max-w-[1200px] w-full m-auto",
  flexCenter: "flex justify-center items-center",
  flexBetween: "flex justify-between items-center",
  flexStart: "flex justify-center items-start",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6"
};
const navLinks = [
  {
    id: "#",
    title: "Home"
  },
  {
    id: "#menu",
    title: "Menu"
  },
  {
    id: "#service",
    title: "Service"
  },
  {
    id: "#reviews",
    title: "Reviews"
  }
];
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Close_big = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let display;
  display = false;
  return `<nav class="${escape(style.flexBetween, true) + " py-6"}"><h1 class="${"md:text-5xl text-3xl font-bold font-display text-skin-golden"}">Caf\xE8 House</h1>

	<ul class="${"md:flex flex-row gap-10 hidden text-skin-primary text-lg"}">${each(navLinks, (nav) => {
    return `<li class="${"hover:underline hover:text-skin-golden"}"><a${add_attribute("href", nav.id, 0)}>${escape(nav.title)}</a>
			</li>`;
  })}</ul>

	<div class="${"md:hidden"}">${display ? `<div class="${"relative cursor-pointer z-30"}">${validate_component(Close_big, "CloseBig").$$render($$result, { class: "text-skin-golden text-3xl" }, {}, {})}</div>
			<div class="${"bg-skin-primary w-screen h-screen fixed top-0 left-0 " + escape(style.flexCenter, true) + " z-20"}"><ul class="${"flex flex-col gap-10 items-center font-medium text-xl text-skin-primary"}">${each(navLinks, (nav) => {
    return `<li class="${"hover:underline hover:text-skin-golden"}"><a${add_attribute("href", nav.id, 0)}>${escape(nav.title)}</a>
						</li>`;
  })}</ul></div>` : `<div>${validate_component(Hamburger, "Hamburger").$$render(
    $$result,
    {
      class: "cursor-pointer text-3xl text-skin-golden"
    },
    {},
    {}
  )}</div>`}</div></nav>`;
});
const cup = "/_app/immutable/assets/cup-33500647.jpg";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"font-display"}"><div class="${"flex flex-col md:flex-row gap-10 " + escape(style.boxWidth, true) + " " + escape(style.paddingX, true)}"><div class="${escape(style.flexStart, true) + " " + escape(style.paddingY, true) + " flex-1 flex-col gap-4"}"><p class="${"italic text-skin-primary text-[18px]"}">Chase the flavour</p>
			<p class="${"text-dynamicText text-skin-golden font-bold leading-[1]"}"><span>GOOD ideas</span><br>
				<span>START WITH</span><br>
				<span>Coffee</span></p>
			<p class="${"text-skin-primary text-[18px]"}">Boost your productivity and fix your mood with a cup of coffee
			</p>
			<a href="${"#menu"}" class="${"w-[140px] bg-skin-golden text-skin-secondary p-2 rounded italic hover:bg-skin-secondary text-[18px]"}">Get yours now</a></div>
		<div class="${"flex flex-1"}"><img${add_attribute("src", cup, 0)} alt="${"cup"}" class="${"w-full h-full border-4 border-[#dcca87] object-cover mb-10 relative md:top-[100px]"}"></div></div>
	<div class="${"text-skin-secondary bg-skin-secondary"}"><div class="${escape(style.boxWidth, true) + " " + escape(style.paddingX, true) + " " + escape(style.paddingY, true)}"><p>Enjoy your coffee in our comfortable place</p>
			<div class="${"flex pt-10 gap-10"}"><div><p class="${"md:text-5xl text-3xl pb-5 "}">50<span class="${"text-skin-golden"}">+</span></p>
					<p>Private Room</p></div>
				<div><p class="${"md:text-5xl text-3xl pb-5"}">25<span class="${"text-skin-golden"}">+</span></p>
					<p>Event Space</p></div>
				<div><p class="${"md:text-5xl text-3xl pb-5"}">15<span class="${"text-skin-golden"}">+</span></p>
					<p>Creative Studio</p></div></div></div></div></section>`;
});
const Dot_03_m = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Heart_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M2 8.4A5.4 5.4 0 0 1 7.5 3A5.991 5.991 0 0 1 12 5a5.991 5.991 0 0 1 4.5-2A5.4 5.4 0 0 1 22 8.4c0 5.356-6.379 9.4-10 12.6C8.387 17.773 2 13.76 2 8.4Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const cappuccino = "/_app/immutable/assets/cappuccino-58e07601.jpg";
const Coffee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newDrink = cappuccino;
  return `<section id="${"menu"}" class="${"font-display bg-skin-secondary text-skin-secondary "}"><div class="${"flex flex-col md:flex-row gap-10 " + escape(style.boxWidth, true) + " " + escape(style.paddingX, true) + " " + escape(style.paddingY, true)}"><div class="${"flex flex-1 relative"}"><img${add_attribute("src", newDrink, 0)} alt="${"coffee"}" class="${"w-full h-full border-4 border-[#dcca87] object-cover"}">
			<div class="${"md:" + escape(style.flexCenter, true) + " flex flex-1 text-skin-golden md:w-[80%] md:h-[10%] absolute bg-skin-primary md:top-[80%] md:left-[40%] top-[75%] left-[10%] h-[20%] w-[90%]"}"><p class="${"text-center text-sm w-[80%]"}">&quot;I really love cappuccino. The coffee was very smooth.&quot;
				</p>
				<div class="${"absolute md:right-[97.5%] right-[96%]"}">${validate_component(Heart_fill, "HeartFill").$$render($$result, { class: "scale-[3]" }, {}, {})}</div></div></div>
		<div class="${"flex flex-1 flex-col"}"><p class="${"text-lg text-skin-golden italic"}">OUR COFFEE</p>
			<div class="${"text-dynamicText leading-[1] font-bold"}"><p>Choose Your</p>
				<p>Favorite Coffee</p></div>
			<p class="${"text-lg"}">More than 100+ type of coffee are ready to serve by our professionals.</p>
			<div class="${"flex md:text-3xl text-xl mt-6"}"><p class="${"hover:text-skin-golden cursor-pointer"}">Cappuccino
				</p>
				${validate_component(Dot_03_m, "CiDot03M").$$render($$result, {}, {}, {})}
				<p class="${"hover:text-skin-golden cursor-pointer"}">Latte</p>
				${validate_component(Dot_03_m, "CiDot03M").$$render($$result, {}, {}, {})}
				<p class="${"hover:text-skin-golden cursor-pointer"}">Arabica
				</p></div>
			<a href="${"dishes"}" class="${"w-[140px] bg-skin-primary text-skin-primary text-center p-2 rounded italic hover:bg-skin-golden hover:text-skin-secondary mt-4"}">More menu</a></div></div></section>`;
});
const blackForest = "/_app/immutable/assets/black-forest-e6c85fe3.jpg";
const Dessert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newDish = blackForest;
  return `<section class="${"font-display bg-skin-primary text-skin-primary mt-20"}"><div class="${"flex flex-col md:flex-row gap-10 " + escape(style.boxWidth, true) + " " + escape(style.paddingX, true) + " " + escape(style.paddingY, true)}"><div class="${"flex flex-1 flex-col"}"><p class="${"text-lg text-skin-golden italic"}">OUR DESSERTS</p>
			<div class="${"text-dynamicText leading-[1] font-bold"}"><p>Complete Your Coffee</p>
				<p>with Our Desserts</p></div>
			<p class="${"text-lg"}">Enjoy your coffee with our tasty desserts that will build your mood.</p>
			<div class="${"flex md:text-3xl text-xl mt-6"}"><p class="${"hover:text-skin-golden cursor-pointer"}">Black Forest
				</p>
				${validate_component(Dot_03_m, "CiDot03M").$$render($$result, {}, {}, {})}
				<p class="${"hover:text-skin-golden cursor-pointer"}">Cr\xE8me</p>
				${validate_component(Dot_03_m, "CiDot03M").$$render($$result, {}, {}, {})}
				<p class="${"hover:text-skin-golden cursor-pointer"}">Tiramisu
				</p></div>
			<a href="${"#menu"}" class="${"w-[140px] bg-skin-golden text-skin-secondary text-center p-2 rounded italic hover:bg-skin-secondary mt-4"}">More menu</a></div>
		<div class="${"bg-skin-golden flex flex-1 relative"}"><img${add_attribute("src", newDish, 0)} alt="${"dessert"}" class="${"w-full h-full border-4 border-[#dcca87] object-cover"}">
			<div class="${"md:" + escape(style.flexCenter, true) + " flex flex-1 text-skin-golden md:w-[80%] md:h-[10%] absolute bg-skin-primary md:top-[80%] md:left-[-20%] top-[75%] left-[-10%] h-[20%] w-[90%]"}"><p class="${"text-center text-sm w-[80%]"}">&quot;I really love dessert. The cake was very nice.&quot;</p>
				<div class="${"absolute md:left-[97.5%] left-[96%]"}">${validate_component(Heart_fill, "HeartFill").$$render($$result, { class: "scale-[3]" }, {}, {})}</div></div></div></div></section>`;
});
const barista = "/_app/immutable/assets/barista-a936f202.jpg";
const shop = "/_app/immutable/assets/shop-0e11c054.jpg";
const shop1 = "/_app/immutable/assets/shop1-d74316d4.jpg";
const shop2 = "/_app/immutable/assets/shop2-15013d44.jpg";
const Facility = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="${"service"}" class="${"font-display h-full mt-20"}"><div class="${"h-[35%] bg-skin-primary text-skin-primary " + escape(style.flexCenter, true) + " " + escape(style.paddingX, true) + " mb-[100px] text-center"}"><div class="${"flex flex-col items-center gap-6 text-lg " + escape(style.boxWidth, true)}"><p class="${"text-skin-golden italic"}">OUR FACILITY</p>
			<p class="${"text-dynamicText font-bold leading-[1]"}">Be Comfort In Our Place</p>
			<p>Our place designed by pro architecture with psychologist to build best place suit you.</p></div></div>
	<div class="${"sm:h-[520px] bg-skin-secondary h-[1200px]"}"><div class="${escape(style.boxWidth, true) + " " + escape(style.paddingX, true) + " flex flex-1 flex-col gap-10 relative top-[-70px]"}"><div class="${"flex flex-1 relative gap-10 sm:flex-row flex-col "}"><div class="${"w-full h-[300px] relative "}"><img${add_attribute("src", shop, 0)} alt="${"shop"}" class="${"w-full h-full absolute top-[6px] left-[8px] border-4 border-[#dcca87] object-cover"}"></div>
				<div class="${"md:w-[60%] w-full h-[300px] relative"}"><img${add_attribute("src", shop1, 0)} alt="${"shop1"}" class="${"w-full h-full absolute top-[6px] left-[8px] border-4 border-[#dcca87] object-cover"}"></div></div>
			<div class="${"flex flex-1 gap-10 sm:flex-row flex-col"}"><div class="${"md:w-[60%] w-full h-[300px] relative"}"><img${add_attribute("src", barista, 0)} alt="${"barista"}" class="${"w-full h-full absolute top-[6px] left-[8px] border-4 border-[#dcca87] object-cover"}"></div>
				<div class="${"w-full h-[300px] relative"}"><img${add_attribute("src", shop2, 0)} alt="${"shop"}" class="${"w-full h-full absolute top-[6px] left-[8px] border-4 border-[#dcca87] object-cover"}"></div></div></div></div>
	<div class="${"sm:h-[15%] bg-skin-primary h-[100px]"}"></div></section>`;
});
const logo1 = "/_app/immutable/assets/logo1-f46c81fe.png";
const logo2 = "/_app/immutable/assets/logo2-a3e4a349.png";
const logo3 = "/_app/immutable/assets/logo3-abfafda5.png";
const Reviews = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="${"reviews"}" class="${"bg-skin-primary font-display text-skin-primary sm:mt-20 "}"><div class="${escape(style.boxWidth, true) + " " + escape(style.paddingX, true) + " " + escape(style.paddingY, true) + " h-[800px] md:h-full"}"><div class="${"flex-col " + escape(style.flexCenter, true)}"><p class="${"text-lg text-center"}">They trust their work place</p>
			<span class="${"sm:text-5xl text-2xl font-bold text-skin-gold "}">Caf\xE8 House</span>
			<div class="${"flex gap-10 sepia mt-5 md:scale-75 scale-100"}"><div><img${add_attribute("src", logo1, 0)} alt="${"logo"}"></div>
				<div><img${add_attribute("src", logo2, 0)} alt="${"logo"}" class="${""}"></div>
				<div><img${add_attribute("src", logo3, 0)} alt="${"logo"}"></div></div></div>
		<div class="${escape(style.flexCenter, true) + " flex-1 md:flex-row flex-col"}"><div class="${"flex flex-1 flex-col gap-5"}"><p class="${"text-skin-golden"}">OUR REVIEWS</p>
				<div class="${"text-dynamicText leading-[1] font-semibold"}"><p>Let Our Customer</p>
					<p>Talk About Us</p></div>
				<p>We always providing the best to make our customer pleasant with our services.</p>
				<div class="${"flex justify-center md:justify-start gap-2"}"><button class="${"w-[100px] bg-skin-golden text-skin-secondary text-center rounded italic hover:bg-skin-secondary"}">Previous</button>
					<button class="${"w-[100px] bg-skin-golden text-skin-secondary text-center rounded italic hover:bg-skin-secondary"}">Next</button></div></div>
			<div class="${"flex flex-1 gap-10 relative md:top-0 top-[120px] w-full"}"><div class="${"bg-skin-primary flex flex-col gap-2 p-5 w-[60%] h-auto border-solid border-2 border-[#dcca87] justify-between absolute z-[0] top-[-100px]"}"><p>&quot;Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
						egestas.&quot;
					</p>
					<div><p>Roberto</p>
						<p class="${"text-sm"}">-Coffee Lover</p></div></div>
				<div class="${"bg-skin-primary flex flex-col gap-2 p-5 w-[60%] h-auto border-solid border-2 border-[#dcca87] justify-between absolute top-[10%] right-[0] z-[1]"}"><p>&quot;Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
						egestas.&quot;
					</p>
					<div><p>Sandra</p>
						<p class="${"text-sm"}">-Google</p></div></div></div></div></div></section>`;
});
const Copyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9.354a4 4 0 1 0 0 5.292"/></g>`}<!-- HTML_TAG_END --></svg>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"bg-skin-primary text-skin-primary text-lg"}"><div class="${escape(style.boxWidth, true) + " " + escape(style.flexBetween, true) + " " + escape(style.paddingX, true) + " " + escape(style.paddingY, true) + " md:flex-row flex-col gap-5"}"><div class="${"md:text-5xl text-3xl font-semibold"}"><p>Take Your</p>
			<p>Coffee Now</p></div>
		<p class="${"md:w-[40%] text-center"}">Don&#39;t let your coffee cold, let&#39;s go to <span class="${"text-xl mx-1 font-bold text-skin-golden"}">Caf\xE8 House</span> and get your coffee and boost your day now.
		</p>
		<button class="${"w-[120px] py-1 bg-skin-golden text-skin-secondary text-center rounded italic hover:bg-skin-secondary"}">Our Location</button></div>

	<div class="${escape(style.flexCenter, true) + " " + escape(style.paddingX, true) + " gap-2 bg-skin-secondary text-skin-secondary text-center"}">${validate_component(Copyright, "Copyright").$$render($$result, {}, {}, {})}
		<p>2022 Caf\xE8 House. All rights reserved.</p></div>
	<div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-skin-primary"}"><div class="${escape(style.boxWidth, true) + " " + escape(style.paddingX, true)}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>
	${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	${validate_component(Coffee, "Coffee").$$render($$result, {}, {}, {})}
	${validate_component(Dessert, "Dessert").$$render($$result, {}, {}, {})}
	${validate_component(Facility, "Facility").$$render($$result, {}, {}, {})}
	${validate_component(Reviews, "Reviews").$$render($$result, {}, {}, {})}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
