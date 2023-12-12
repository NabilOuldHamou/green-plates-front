<script>
	import "../app.css";
</script>

<header class="">
	<nav class="mx-auto flex  items-center  justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="flex items-center gap-2 text-4xl font-semibold text-grey font-kumbh w-1/3 "><img class="w-14" src="favicon.png" alt="logo">GreenPlates</a>
		</div>
		<div class="flex lg:hidden">
			<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
				<span class="sr-only">Open main menu</span>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">


			<a href="/about" class="text-lg font-medium font-kumbh leading-6 text-gray-900 hover:text-gray-500 transition ease-in-out duration-150">About</a>
			<a href="/recipes" class="text-lg font-medium  font-kumbh leading-6 text-gray-900 hover:text-gray-500 transition ease-in-out duration-150">Recipes</a>
			<a href="/review" class="text-lg font-medium  font-kumbh leading-6 text-gray-900 hover:text-gray-500 transition ease-in-out duration-150">Review</a>
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href="/contact" class=" font-medium font-kumbh text-xl px-6 py-2 rounded-full text-white bg-grey border-2 border-grey transition duration-300 ease-in-out hover:bg-background hover:text-grey">Contact us</a>
		</div>
	</nav>
</header>

<slot />

<footer class="fixed bottom-0 w-full z-0">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EEE8D4" fill-opacity="1" d="M0,0L80,53.3C160,107,320,213,480,240C640,267,800,213,960,170.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
</footer>