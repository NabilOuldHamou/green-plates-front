<svelte:head>
	<title>GreenPlates</title>
</svelte:head>

<main class="relative z-10">
	<div class="flex flex-col lg:flex-row items-center justify-center lg:p-10">
		<h1 class="font-lily text-7xl lg:w-1/3 flex justify-end z-40 text-grey text-center lg:relative lg:left-20">Cook & eat <br/> Green</h1>
		<div class="position-absolute top-0 right-0 z-0 lg:w-1/3 lg:mx-5">
			<img src="/hero.png" alt="hero"  class="position-absolute top-0 right-0 z-0 lg:mx-5">
		</div>

		<div class=" lg:w-1/3 lg:mx-5">
			<div class="my-7">
				<p class="font-lily   leading-4  text-2xl">
					250 <br/>
					<span class="font-kumbh text-lg">Recipes for every taste</span>
				</p>
			</div>

			<div class="my-5">
				<p class="font-lily   leading-4  text-2xl">
					75 <br/>
					<span  class="font-kumbh text-lg">Customs animations</span>
				</p>
			</div>

		</div>
	</div>

	<div class="flex flex-col items-center justify-center lg:p-2 z-70">

		<div class="border-2 bg-grey rounded-full px-4 py-2 w-1/3 flex justify-start items-center">
			<img  src="/icons/searchIcon.png" alt="searchIcon" class="w-8 h-8 mx-2">
			<input type="text" placeholder="Search..." class="bg-grey outline-none w-full font-kumbh text-xl text-white">
		</div>
		<div class="my-5">
			<p class="font-lily font-bold text-3xl text-grey">
				Or
			</p>
		</div>
		<div class="flex lg:flex-1 lg:justify-end">
			<a href="/discover" class=" font-medium font-kumbh text-xl border-2 border-grey px-6 py-1.5 rounded-full text-gray hover:bg-grey hover:text-white transition duration-300 ease-in-out">
				Discover
			</a>
		</div>

	</div>
</main>