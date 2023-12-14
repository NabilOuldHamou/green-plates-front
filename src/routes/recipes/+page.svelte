<script>
import RecipeCard from '$lib/components/RecipeCard.svelte';
import { onMount } from 'svelte';

let rcps;

onMount(async () => {
	const response = await fetch('http://127.0.0.1:8080/api/v1/recipes')
	const resultJson = await response.json()

	rcps = resultJson.recipes

	console.log(rcps)
})

</script>

<svelte:head>
	<title>Recipes - GreenPlates</title>
</svelte:head>

<main class="sm:relative z-10">

	{#if rcps === undefined}
		Loading data...
	{:else}
		<div class="flex justify-center py-4">
			<div class="grid grid-cols-1 gap-4 justify-center lg:grid-cols-3 sm:grid-cols-2">
				{#each rcps as r}
					<RecipeCard title={r.Title} description="{r.Description}" />
				{/each}
			</div>
		</div>
	{/if}

</main>
