<script>
import RecipeCard from '$lib/components/RecipeCard.svelte';
import { onMount } from 'svelte';

let rcps;

onMount(async () => {
	const response = await fetch('http://127.0.0.1:8080/api/v1/recipes')
	const resultJson = await response.json()

	rcps = resultJson.recipes
})

</script>

<svelte:head>
	<title>Recipes - GreenPlates</title>
</svelte:head>

<main class="relative z-10">

	{#if rcps === undefined}
		Loading data...
	{:else}
		{#each rcps as r}
			<RecipeCard title={r.Title} />
		{/each}
	{/if}

</main>
